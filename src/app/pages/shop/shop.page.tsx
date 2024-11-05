import { FooterComponent, HeaderComponent, LineComponent, ProductCard, TextImage } from '../../components';
import './shop.component.scss';

/**
 * ShopPage Component for the Coffee Store
 * @author Shanty
 */

export const Shop = () => {
  const products = [
    { id: 1, name: 'Tueste medio-Molido', format: '400g', price: 10, image: "/bolsa_enteroazul 1.png" },
    { id: 2, name: 'Tueste oscuro-Molido', format: '400g', price: 12, image: "/bolsa_enteroazul 1.png" },
    { id: 3, name: 'Tueste claro-Molido', format: '400g', price: 15, image: "/bolsa_enteroazul 1.png" },
    { id: 4, name: 'Café Orgánico', format: '400g', price: 20, image: "/bolsa_enteroazul 1.png" },
   // { id: 5, name: 'Café Gourmet', format: 'Molido', price: 25, image: "/bolsa_enteroazul 1.png" },
    //{ id: 6, name: 'Café Espresso', format: 'Molido', price: 30, image: "/bolsa_enteroazul 1.png" },
  ];

  const listParagraph = [
    "Cultivamos, cosechamos y procesamos nuestro café con esmero y " +
    "dedicación. En la región de Costa Rica, el café de las zonas bajas " + 
    "y medias se caracteriza por su suavidad, mientras que el café de las elevadas "+
    "tierras de Pérez Zeledón, a 1700 metros de altura, despliega notas más complejas en la taza.",
    "Durante la temporada seca, que va de diciembre a abril, cosechamos el café a mano y lo sometemos a un proceso de secado especial al sol tropical, con la humedad adecuada, manteniendo el grano en su fruta.",
    "Este método de procesamiento en seco da como resultado un café de un placer absoluto. La complejidad de sus sabores, su dulzura natural y su baja acidez se combinan de una manera divina y excepcional, creando una experiencia que es difícil de igualar en cualquier otro lugar."
  ];
  
  return (
    <>
      <HeaderComponent />
      
      <div className="container text-center py-5 my-5 no-padding-bottom">
        <LineComponent />
        <h3 className="fw-bold titulo-1">Tienda de Café</h3>
      </div>

      <div className="container margin-bottom">
        <div className="row gap-50 justify-content-around">
          {products.map(product => (
            <ProductCard 
              key={product.id} // Add a unique key for each product card
              id={product.id}
              name={product.name}
              format={product.format}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      <div className=" info-container d-flex py-5 bg-color">
            <TextImage title={'Acerca del café Don Emilio'} listParagraph={listParagraph} imageSrc={'/coffee.png'} imageAlt={'Recolección de café"'}></TextImage>
      </div>

      <FooterComponent />
    </>
  );
};
