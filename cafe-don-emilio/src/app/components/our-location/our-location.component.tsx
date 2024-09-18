import {EmbedMapComponent} from "../embed-map";
import {TitleSeccionComponent} from "../title-seccion";

/**
 * OurLocationComponent component for showing the location of the company
 * @author dgutierrez
 */
export const OurLocationComponent = () => {
    return (
        <div className="container">
            <div className="text-center py-5">
                <TitleSeccionComponent nameOfSection={ "Nuestra ubicación" }/>
            </div>

            <div className="row">
                <div className="col-12 col-lg-4">
                    <div>
                        <h6 className="titulo-4 fw-bold">Ubicación</h6>
                        <p>Comunidad de San Luis Bocana Pérez Zeledón, Costa Rica</p>
                    </div>

                    <div>
                        <h6 className="titulo-4 fw-bold">Contacto</h6>
                        <p>Teléfono: 8646 2463</p>
                        <p>cafedonemiliocr@email.com</p>
                    </div>

                    <div className="my-5">
                        <button className="btn btn-secondary rounded-5 btn-md-imp">Reserve su visita</button>
                    </div>
                </div>
                <div className="col-12 col-lg-8">
                    <EmbedMapComponent width="100%"/>
                </div>
            </div>

        </div>
    );
}
