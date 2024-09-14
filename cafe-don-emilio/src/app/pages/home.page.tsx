import {BaseCardComponent, CarouselComponent, HeaderComponent} from "../components";

import './home.page.scss';

import {Swiper, SwiperSlide} from "swiper/react";

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
                    <h1 className="text-center color-primary titulo-1 fw-normal">Descubre nuestro tour de café</h1>
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

            </section>
        </>
    );
};
