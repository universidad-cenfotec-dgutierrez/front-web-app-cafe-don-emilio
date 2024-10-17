import "./question.component.scss";

/**
 * Component for rendering a numbered title with customizable text and number
 * 
 * @param number Number to be displayed in red color (A03243)
 * @param text Text to be displayed alongside the number
 * @author ShantyCerdasB
 */
interface INumberedTitle {
    number: number;
    text: string;
}

export const NumberedTitleComponent = (
    {
        number,
        text
    }: INumberedTitle
) => {
    return (
        <div className="text-left pb-3 ">
   <h3 className="h3-custom-style fs-4">
        <span className="text-red">{number}</span> {text}
    </h3>
        </div>
    );
}
