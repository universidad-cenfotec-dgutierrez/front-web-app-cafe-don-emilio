import {LineComponent} from "../line";

import "./footer.component.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

import {InstagramIconComponent , FacebookIconComponent  , TripAdvisorIconComponent , WhatsAppIconComponent} from "../icons";

/**
 * Interface FooterProps who defines the props of the Footer component
 * @author dgutierrez
 */
interface IFooterProps {
}

/**
 * Footer component for the application
 * @author dgutierrez
 */
export const FooterComponent = (
    {}: IFooterProps
) => {

    const iconListComponents = [
        <InstagramIconComponent/>,
        <FacebookIconComponent/>,
        <TripAdvisorIconComponent/>,
        <WhatsAppIconComponent/>
    ]

    return (
        <footer className="footer bg-color-medium">
            <div className="container">
                <div className="text-center py-5">
                    <LineComponent/>
                    <div>
                        <img className="navbar-brand__logo__large" src="/logo.svg"
                             alt="Logo de la empresa cafe don emilio"/>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <a href="#" className="text-decoration-none">
                        <FontAwesomeIcon icon={faEnvelope} className="color-primary me-2" size={'2xl'}/>
                        <span className="fw-normal titulo-5">cafedonemilio.co.cr</span>
                    </a>
                </div>

                <div className="text-center">
                    <a href="#" className="text-decoration-none">
                        <FontAwesomeIcon icon={faPhone} className="color-primary me-2" size={'2xl'}/>
                        <span className="fw-normal titulo-5">+(506) 8646 2463</span>
                    </a>
                </div>

                <div className="d-flex justify-content-center py-5">
                    {iconListComponents.map((icon, index) => (
                        <a href="#" className="text-decoration-none">
                            <div
                                key={index}
                                className="dimension-46px me-4 rounded-circle object-fit-cover bg-secondary d-flex-center-center">
                                {icon}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </footer>
    );
}