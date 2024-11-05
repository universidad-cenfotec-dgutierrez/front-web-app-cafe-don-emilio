/**
 * Interface who defines the props of the LineComponent
 * @author dgutierrez
 */
interface LineProps {
    hexColor?: string;
}

/**
 * Component who renders a line with a specific color
 * @author dgutierrez
 */
export const LineComponent = (
    {hexColor = "#A03243"}: LineProps
) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="7" viewBox="0 0 44 7" fill={hexColor}>
            <path d="M0.0429688 3.39648H43.5089" stroke={hexColor} strokeWidth="6"/>
        </svg>
    )
}