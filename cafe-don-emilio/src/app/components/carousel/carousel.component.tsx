/**
 * Interface who defines the props of the Carousel component. The contract for using the component is defined here.
 * @param listSrcImages list of images to show in the carousel
 * @author dgutierrez
 */
interface  ICarouselProps {
    listSrcImages: string[];
}

/**
 * Carousel component
 * @param listSrcImages list of images to show in the carousel
 * @author dgutierrez
 */
export const CarouselComponent = ( { listSrcImages } :ICarouselProps ) => {
    return (
        <>
            <div id="carouselExample" className="carousel slide position-relative">
                <div className="carousel-inner">
                    {
                        listSrcImages.map((imageSrc, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} >
                            <img src={imageSrc} className="d-block w-100 object-fit-cover h-dvh-100" alt="..."/>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}