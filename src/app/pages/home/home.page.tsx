import {
    BaseCardComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    InfoCardDetailedComponent,
    LineComponent,
    OurLocationComponent,
    TestimonyCardComponent
} from "../../components";

import './home.page.scss';

import {Swiper, SwiperSlide} from "swiper/react";
import {faClock, faStopwatch, faUtensils, faWallet} from "@fortawesome/free-solid-svg-icons";

/**
 * Page for the home page
 * @author dgutierrez
 */
export const HomePage = () => {

    const listCards = [
        {
            title: "Tour de cultivo de café",
            paragraph:
                "El tour de Café Don Emilio es una experiencia única que te sumerge en el mundo" +
                "del café artesanal, desde la cosecha en nuestras plantaciones hasta la degustación" +
                "de un café excepcional. Acompañado por expertos apasionados, descubrirás los secretos" +
                " de nuestro café y disfrutarás de una experiencia sensorial inolvidable.",
            imageSrc: "/tour-cafe/mujeres-cosechando-cafe.webp"
        },
        {
            title: "Hermosos paisajes",
            paragraph:
                "Sumérgete en la belleza natural de la zona mientras recorres nuestras tierras montañosas," +
                " donde podrás disfrutar de impresionantes vistas panorámicas que se extienden hasta la Punta" +
                " de Bahía Ballena y el mar, creando un escenario natural verdaderamente inolvidable.",
            imageSrc: "/tour-cafe/playa.webp"
        },
        {
            title: "Gastronomía auténtica local",
            paragraph:
                "En nuestro tour, tendrás la oportunidad de disfrutar de la auténtica cocina local, que complementa" +
                " a la perfección la experiencia del café. Desde deliciosos almuerzos hasta bebidas refrescantes," +
                " delicias horneadas y, por supuesto, nuestro café excepcional, cada bocado y sorbo te sumergirá " +
                "en la riqueza de los sabores locales.",
            imageSrc: "/tour-cafe/gastronomia.webp"
        },
    ];

    const breakPointsSwiper = {
        0: {
            slidesPerView: 1,
            spaceBetween: 100
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 100
        },
        992: {
            slidesPerView: 2.5,
            spaceBetween: 100
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 100
        },
    };

    const listInfo = [
        {
        iconSrc: faClock,
        isIconSrcFontAwesome: true,
        title: "Duración del tour",
        listInfo: ["4-5 horas aproximadamente"],
        },
        {
            iconSrc: faStopwatch,
            isIconSrcFontAwesome: true,
            title: "Horario",
            listInfo: ["Lun a Vie: 7:00 a.m. – 5:00 p.m.", "Sáb: 8:00 a.m. – 5:00 p.m.", "Dom: 9:00 a.m. – 5:00 p.m."],
            showDetailInfoInOrderList: false
        },
        {
            iconSrc: faWallet,
            isIconSrcFontAwesome: true,
            title: "Precios",
            listInfo: ["Precio por persona: $40.", "Niños y jóvenes: $30.", "Menores de 10 años: Gratis."],
            showDetailInfoInOrderList: true
        },
        {
            iconSrc: faUtensils,
            isIconSrcFontAwesome: true,
            title: "Servicios adicionales",
            listInfo: ["Almuerzo", "Caminata a la cascada", "Venta de souvenirs"],
            showDetailInfoInOrderList: true
        }
    ];

    const testimonies = [
        {
        autor:"Alejandro Powell",
        date: "9/10/2021",
        text:"“Deiner, Emilio y el resto de su familia nos han hecho sentir como en casa mientras aprendamos todo" +
            " sobre el maravilloso café que cultivan y preparan. Es un tour muy ameno e interesante que sin duda" +
            " recomendaría.”"
        },
        {
            autor:"Marc Francis",
            date: "28/6/2022",
            text:"“No es un tour de café, es toda una experiencia! Desde tu llegada hasta tu salida, Deiner" +
                " te hace sentir como parte de la familia, cuenta como nunca otro toda la historia del café y" +
                " la aventura de su familia en este negocio. Recuerdos inolvidables! Es el verdadero Costa Rica 🙂”"
        },
        {
            autor:"Stephanie Padilla",
            date: "4/3/2021",
            text:"“Feliz de haber llegado a este lugar tan maravilloso... Recomiendo esta experiencia un 100%." +
                " Me sentí como en familia y aprendí muchas cosas interesantes que no imaginaba sobre el" +
                " proceso del café... Definitivamente me encanto... 😍”"
        },
        {
            autor:"Alejandro Powell",
            date: "9/10/2021",
            text:"“Deiner, Emilio y el resto de su familia nos han hecho sentir como en casa mientras aprendamos todo" +
                " sobre el maravilloso café que cultivan y preparan. Es un tour muy ameno e interesante que sin duda" +
                " recomendaría.”"
        }
    ];

    return (
        <>
            <HeaderComponent/>
            <CarouselComponent
                listSrcImages={[
                    "https://res.cloudinary.com/dbhmej62h/image/upload/v1726182823/edb375d72050fc3d707eaf84e3f784b4_ploggg.png",
                    "https://res.cloudinary.com/dbhmej62h/image/upload/v1726182823/edb375d72050fc3d707eaf84e3f784b4_ploggg.png",
                ]}
            />
            {/* Positioned elements */}
            <div className="logo-container position-absolute rounded p-5">
                <img className="logo-container__carousel" src="/logo-live-the-experience.svg"
                     alt="Café Don Emilio Logo"/>
            </div>

            <div className="badge position-absolute">
                <img className="badge__img" src="/trip-advisor.png" alt="Tripadvisor Badge"/>
            </div>

            <section className="container my-5">
                <div className="my-5">
                    <h1 className="text-center color-primary titulo-1 fw-medium">Descubre nuestro tour de café</h1>
                    <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="14" viewBox="0 0 46 14" fill="none">
                            <path
                                d="M1.04297 3.24023L22.1673 9.98912C22.5632 10.1156 22.9887 10.1156 23.3846 9.98912L44.5089 3.24023"
                                stroke="#A03243" strokeWidth="6" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                <Swiper breakpoints={breakPointsSwiper}>
                    {
                        listCards.map((card, index) => (
                            <SwiperSlide key={index} className="d-flex d-md-block justify-content-center">
                                <BaseCardComponent title={card.title} text={card.paragraph} imageSrc={card.imageSrc}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className="text-center">
                    <button className="btn btn-secondary rounded-5 btn-md-imp">Nuestra historia</button>
                </div>
            </section>

            <section className="bg-color-medium">
                <div className="container">
                    <div className="text-center py-5">
                        <LineComponent/>
                        <h2 className="titulo-1 fw-medium">Descripción del tour de café</h2>
                    </div>

                    <div className="row">
                        {
                            listInfo.map(({
                                              showDetailInfoInOrderList,
                                              listInfo,
                                              iconSrc,
                                              isIconSrcFontAwesome,
                                              title
                                          }, index) => (
                                <div key={index} className="col-6 col-md-3">
                                    <InfoCardDetailedComponent
                                        iconSrc={iconSrc}
                                        isIconSrcFontAwesome={isIconSrcFontAwesome}
                                        title={title}
                                        listInfo={listInfo}
                                        showDetailInfoInOrderList={showDetailInfoInOrderList}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-center py-5">
                        <button className="btn btn-secondary rounded-5 btn-md-imp">Reserve su visita</button>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <div className="container">
                    <div className="text-center py-5">
                    <LineComponent/>
                        <h2 className="titulo-1 fw-medium">Testimonios</h2>
                    </div>

                    <Swiper breakpoints={breakPointsSwiper}>
                        {
                            testimonies.map(({autor, date, text}, index) => (
                                <SwiperSlide key={index}>
                                    <TestimonyCardComponent
                                        autor={autor}
                                        date={date}
                                        text={text}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="text-center my-5">
                        <button className="btn btn-secondary rounded-5 btn-md-imp">Escribe un comentario</button>
                    </div>
                </div>
            </section>

            <section className="my-5">
                <OurLocationComponent/>
            </section>
            <FooterComponent/>
        </>
    );
};
