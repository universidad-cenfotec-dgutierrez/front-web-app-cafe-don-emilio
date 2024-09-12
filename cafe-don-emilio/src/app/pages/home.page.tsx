import {CarouselComponent, HeaderComponent} from "../components";


/**
 * Page for the home page
 * @author dgutierrez
 */
export const HomePage = () => {
    return (
        <>
            <HeaderComponent />
            <CarouselComponent
                listSrcImages={
                [
                    "https://res.cloudinary.com/dbhmej62h/image/upload/v1726182823/edb375d72050fc3d707eaf84e3f784b4_ploggg.png",
                    "https://res.cloudinary.com/dbhmej62h/image/upload/v1726182823/edb375d72050fc3d707eaf84e3f784b4_ploggg.png"
                ]
            }/>
        </>
    )
}