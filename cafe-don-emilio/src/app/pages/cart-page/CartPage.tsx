// src/app/pages/CartPage.tsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../../components/cart/CartContext';
import { Link } from 'react-router-dom';
import { HeaderComponent, FooterComponent } from '../../components';
import './CartPage.scss'; // Asegúrate de importar la hoja de estilos

const CartPage: React.FC = () => {
    const context = useContext(CartContext);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

    if (!context) {
        return <p>Error: Contexto del carrito no disponible.</p>; // Mensaje de error mejorado
    }

    const { state, dispatch } = context;
    const cartItems = state.items;

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError(''); // Reiniciar error al escribir
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Por favor, ingresa un correo electrónico válido.');
        } else {
            console.log('Correo enviado a:', email);
            setSuccessMessage('Envío de correo exitoso.'); // Mostrar el mensaje de éxito
            setEmail(''); // Limpiar el campo de correo
            setEmailError(''); // Limpiar el error, si existe

            // Vaciar el carrito
            dispatch({ type: 'CLEAR_CART' }); // Acción para limpiar el carrito

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    // Calcular el total del carrito
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <HeaderComponent />
            <div className="cart-container">
                <h2>Carrito de Compras</h2>
                {cartItems.length > 0 ? (
                    <ul className="list-group mb-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    {item.name} - ${item.price.toFixed(2)} x 
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const quantity = parseInt(e.target.value);
                                            if (quantity > 0) {
                                                dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
                                            }
                                        }}
                                        className={`quantity-input ${item.quantity <= 0 ? 'is-invalid' : ''}`} // Clase is-invalid si es necesario
                                    />
                                </div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay productos en el carrito.</p>
                )}
                
                {/* Mostrar el total */}
                {cartItems.length > 0 && (
                    <h4 className="total-price">Total: ${total.toFixed(2)}</h4>
                )}
                
                <form onSubmit={handleSubmit} className="email-form mb-4">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Ingresa tu correo electrónico</label>
                        <input
                            type="email"
                            className={`form-control ${emailError ? 'is-invalid' : ''}`}
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <div className="invalid-feedback">{emailError}</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

                {/* Mensaje de éxito */}
                {successMessage && (
                    <div className="alert alert-success" role="alert">
                        {successMessage}
                    </div>
                )}
                
                <Link to="/" className="btn btn-secondary mt-3">Continuar Comprando</Link>
            </div>
            <FooterComponent />
        </>
    );
};

export default CartPage;
