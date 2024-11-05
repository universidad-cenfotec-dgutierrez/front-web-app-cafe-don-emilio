import './base-card.component.scss';

/**
 * Interface who defines the props of the BaseCard component. The contract for using the component is defined here.
 * @author dgutierrez
 */
interface IBaseCardProps {
    title: string;
    text: string;
    imageSrc: string;
}

/**
 * Component base for the all cards of the application
 * @author dgutierrez
 */
export const BaseCardComponent = ( { imageSrc, title, text } : IBaseCardProps) => {
    return (
        <>
            <div className="card border-0 shadow-none">
                <img src={imageSrc} className="card__img" alt={title}/>
                <div className="card__body">
                    <h5 className="fw-normal titulo-1 color-primary">{title}</h5>
                    <p className="card__text fw-normal texto-med">{text}</p>
                </div>
            </div>
        </>
    )
}