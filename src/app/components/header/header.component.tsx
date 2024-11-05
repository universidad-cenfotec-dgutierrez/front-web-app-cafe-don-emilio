import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { PagesUrlsEnum } from "../../common/enums";
import { Link } from 'react-router-dom';

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
                            <img
                                className="navbar-brand__logo"
                                src="/logo.svg"
                                alt="Logo de la empresa cafe don emilio"
                            />
                        </a>
                        <button
                            className="navbar-toggler d-xl-none" // Solo se muestra en lg y menores
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse d-none d-xl-flex"> {/* Se muestra solo en pantallas grandes */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link texto-sm-1 fw-normal active"
                                        aria-current="page"
                                        href={PagesUrlsEnum.OUR_HISTORY}
                                    >
                                        Nuestra historia
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link texto-sm-1 fw-normal" href="#">
                                        Preguntas frecuentes
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link texto-sm-1 fw-normal" href={PagesUrlsEnum.SHOP}>
                                        Tienda de café
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <button className="btn btn-outline-primary me-3">ES</button>

                                <Link to={PagesUrlsEnum.RESERVATION}>
                                 <button className="btn btn-md-imp btn-secondary color-light me-3 rounded-5">
                                  Reservar
                                </button>
                                </Link>
                                <button className="btn btn-primary btn-sm-1-imp rounded-5">
                                    <FontAwesomeIcon size={"xl"} icon={faCartShopping} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Inicio del offcanvas */}
                <div
                    className="offcanvas offcanvas-start bg-color-medium-imp d-xl-none" // Solo visible en pantallas lg y menores
                    tabIndex={-1}
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                            Menú
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link texto-sm-1 fw-normal active" aria-current="page" href={PagesUrlsEnum.OUR_HISTORY}>
                                    Nuestra historia
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link texto-sm-1 fw-normal" href="#">Preguntas frecuentes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link texto-sm-1 fw-normal" href="#">Tienda de café</a>
                            </li>
                        </ul>
                        <div className="my-3">
                            <button className="btn btn-outline-primary me-3">ES</button>
                            <button className="btn btn-primary btn-sm-1-imp rounded-5 ">
                                <FontAwesomeIcon size={"xl"} icon={faCartShopping}/>
                            </button>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-md-imp btn-secondary color-light me-3 rounded-5">Reservar
                            <a className="nav-link texto-sm-1 fw-normal active" aria-current="page" href={PagesUrlsEnum.OUR_HISTORY}></a>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Fin del offcanvas */}
            </header>
        </>
    );
};
