import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {PagesUrlsEnum} from "../../common/enums";

/**
 * Component for the header of the application
 * @author dgutierrez
 */
export const HeaderComponent = () => {
    return (
        <>
            <header className="fixed-top">
                <nav className="navbar navbar-expand-xl bg-color-medium px-4">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={PagesUrlsEnum.HOME}>
                            <img className="navbar-brand__logo" src="/logo.svg" alt="Logo de la empresa cafe don emilio"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link texto-sm-1 fw-normal active" aria-current="page" href={PagesUrlsEnum.OUR_HISTORY}>Nuestra historia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link texto-sm-1 fw-normal" href="#">Preguntas frecuentes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link texto-sm-1 fw-normal" href="#">Tienda de café</a>
                                </li>
                            </ul>
                            <div>
                                <button className="btn btn-outline-primary me-3">
                                    ES
                                </button>

                                <button className="btn btn-md-imp btn-secondary color-light me-3 rounded-5">
                                    Reservar
                                </button>

                                <button className="btn btn-primary btn-sm-1-imp rounded-5 ">
                                    <FontAwesomeIcon size={"xl"} icon={faCartShopping} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
