import {LineComponent} from "../line";

/**
 * Interface for the props of the TitleSeccionComponent component
 * @author dgutierrez
 */
interface ITitleSeccionProps {
    nameOfSection: string;
    classNameTitle?: string;
}

/**
 * Component for showing the title of the section
 * @author dgutierrez
 */
export const TitleSeccionComponent = ({classNameTitle = "titulo-1 fw-bold", nameOfSection} : ITitleSeccionProps) =>{
    return (
        <>
            <LineComponent/>
            <h2 className={classNameTitle}>{nameOfSection}</h2>
        </>
    );
}
