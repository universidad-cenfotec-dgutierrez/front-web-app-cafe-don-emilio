import {StarsComponent} from "../stars";

/**
 * Interface who defines the props of the TestimonyCardComponent
 * @author dgutierrez
 */
interface ITestimony {
    autor: string;
    date: string;
    text: string;
}

/**
 * Component for the testimonial card
 * @param date Date of the testimony
 * @param text Text of the testimony
 * @param autor Author of the testimony
 * @author dgutierrez
 */
export const TestimonyCardComponent = (
    {
        date,
        text,
        autor
    }: ITestimony
) => {
    return (
        <div className="card">
            <div className="text-center pt-4">
                <img src="https://avatar.iran.liara.run/public"
                     className="dimension-80px img-fluid rounded-circle object-fit-cover" alt={autor}/>
            </div>
            <div className="text-center">
                <h5 className="fw-normal titulo-1">{autor}</h5>
                <span className="fw-normal texto-med">{date}</span>
                <StarsComponent/>
            </div>
            <div className="card__body">
                <p className="fw-normal texto-med text-start">
                    {text}
                </p>
            </div>
        </div>
    );
}