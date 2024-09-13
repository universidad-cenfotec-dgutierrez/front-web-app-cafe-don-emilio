import {CarouselComponent, HeaderComponent} from "../components";

import './home.page.scss';

/**
 * Page for the home page
 * @author dgutierrez
 */
export const HomePage = () => {
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
                <img className="logo-container__carousel" src="/logo-live-the-experience.svg" alt="Café Don Emilio Logo" />
            </div>

            <div className="badge position-absolute">
                <img className="badge__img" src="/trip-advisor.png" alt="Tripadvisor Badge" />
            </div>
        </>
    );
};
