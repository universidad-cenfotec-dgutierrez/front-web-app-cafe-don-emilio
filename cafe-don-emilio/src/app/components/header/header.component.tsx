import { useContext } from "react";
import { CartContext } from '../../components/cart/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { PagesUrlsEnum } from "../../common/enums";
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
    const context = useContext(CartContext);

    if (!context) {
        return null;
    }

    const { state } = context;
    const cartItems = state.items;

    return (
        <header className="fixed-top">
            <nav className="navbar navbar-expand-xl bg-color-medium px-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={PagesUrlsEnum.HOME}>
                        <img
                            className="navbar-brand__logo"
                            src="/logo.svg"
                            alt="Logo de la empresa cafe don emilio"
                        />
                    </Link>
                    <button
                        className="navbar-toggler d-xl-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-none d-xl-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link texto-sm-1 fw-normal active" aria-current="page" to={PagesUrlsEnum.OUR_HISTORY}>
                                    Nuestra historia
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link texto-sm-1 fw-normal" to={PagesUrlsEnum.SHOP}>
                                    Tienda de café
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <Link to={PagesUrlsEnum.RESERVATION}>
                                <button className="btn btn-md-imp btn-secondary color-light me-3 rounded-5">
                                    Reservar
                                </button>
                            </Link>
                            <Link to={PagesUrlsEnum.CART}>
                                <button className="btn btn-primary btn-sm-1-imp rounded-5">
                                    <FontAwesomeIcon size={"xl"} icon={faCartShopping} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Offcanvas */}
            <div
                className="offcanvas offcanvas-start bg-color-medium-imp d-xl-none"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        Menú
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link texto-sm-1 fw-normal active" aria-current="page" to={PagesUrlsEnum.OUR_HISTORY}>
                                Nuestra historia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link texto-sm-1 fw-normal" to="#">Preguntas frecuentes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link texto-sm-1 fw-normal" to={PagesUrlsEnum.SHOP}>Tienda de café</Link>
                        </li>
                    </ul>
                    <div className="text-center">
                        <Link to={PagesUrlsEnum.RESERVATION}>
                            <button className="btn btn-md-imp btn-secondary color-light me-3 rounded-5">
                                Reservar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
