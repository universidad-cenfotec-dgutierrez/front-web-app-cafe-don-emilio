import {
    FooterComponent,
    HeaderComponent,
    OurLocationComponent,
    TitleSeccionComponent
} from "../../components";

/**
 * Page Component for show the history of the company
 * @author dgutierrez
 */
export const OurHistoryPage = () =>{
    const listParagraph = [
        "Somos una marca familiar fundada en el año 2015 en la comunidad de San Luis Bocana Pérez Zeledón por don Emilio" +
        " y doña Rita, ambos campesinos que junto a sus hijos han cosechado café desde mediados de los años 90s.",
        "Nos comprometemos a brindar a nuestros clientes café de calidad preparado mediante un lento y cuidadoso método" +
        " artesanal. Cuando nos visite y comparta una taza de café con nosotros logremos hacerle sentir como en casa," +
        " mostrándole la cultura artesanal del café desde la óptica de una auténtica familia campesina.",
        "Tradición y un paisaje adornado por la hermosa vista de Bahía Ballena son el escenario perfecto para vivir" +
        " la experiencia de producción de café tal y como nos enseñaron nuestros abuelos de principios de siglo."
    ];
    return (
        <>
            <HeaderComponent/>
            <div className="container pt-3">
                <div className="text-center py-5 my-5">
                    <TitleSeccionComponent nameOfSection={ "Nuestra historia" }/>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <h2 className="titulo-3 fw-bold">Una familia auténtica campesina</h2>
                        {
                            listParagraph.map(text=> <p>{text}</p>)
                        }
                    </div>
                    <div className="col-12 col-md-6">
                        <img src="/people-smiling.webp" className="img-fluid" alt="Una familia sonriendo" />
                    </div>
                </div>

            </div>
           <div className="my-5">
               <OurLocationComponent/>
           </div>
            <FooterComponent/>
        </>
    )
}
