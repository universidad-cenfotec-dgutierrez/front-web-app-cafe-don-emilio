import { MinusPlusButtons } from '../plus-minus-btns';
import { CoffeeCard } from '../coffee-product-image';

interface ProductCardProps {
    id: number;
    name: string;
    format: string;
    price: number;
    image: string;
  }

export const ProductCard: React.FC<ProductCardProps> = ({ name, format, price, image }) => {
    return (
    <div className="col-6 col-sm-4 col-md-3 shop-product-container border-shadow">
      <CoffeeCard image={image}></CoffeeCard>
      <div className='product-info'>
        <div className='d-flex justify-content-between'>
          <p className='fw-500'>{name} <br /><small className='fw-light'>{format}</small></p>
          <p className='fw-500 '>{price}$</p>
        </div>
        <div className='plus-minus-container'>
          <MinusPlusButtons />
        </div>
        <div className='d-flex justify-content-center btn-container'>
          <button className="btn btn-md-imp btn-secondary reserve-now-btn color-light me-3 rounded-5 tour-list-btn tour-list-btn-popup add-btn d-flex justify-content-evenly">
            <img src="/fi-ss-shopping-cart.png" alt="Añadir al carrito" />
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};


