import {FooterComponent, HeaderComponent, LineComponent, OurLocationComponent, TextImage} from "../../components";

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
                    <LineComponent/>
                    <h1 className="fw-bold titulo-1">Nuestra historia</h1>
                </div>

             <TextImage title={"Una familia auténtica campesina"} listParagraph={listParagraph} imageSrc={"/people-smiling.webp"} imageAlt={"Una familia sonriendo"}></TextImage>

            </div>
           <div className="my-5">
               <OurLocationComponent/>
           </div>
            <FooterComponent/>
        </>
    )
}