/**
 * Interface EmbedMapProps who defines the props of the EmbedMap component
 * @author dgutierrez
 */
interface IEmbedMapPropsComponent {
    width?: string;
    height?: string;
    src?: string;
}

/**
 * EmbedMap component
 * @author dgutierrez
 */
export const EmbedMapComponent = (
    {
        width = "600",
        height = "450",
        src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.9398446299033!2d-83.7297590885285!3d9.249673085455546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa150e6f421098b%3A0x792618e8af59e7f6!2sCaf%C3%A9%20Don%20Emilio.!5e0!3m2!1ses-419!2scr!4v1726364532108!5m2!1ses-419!2scr"
    }: IEmbedMapPropsComponent
) => {
    return (
        <iframe
            src={src}
            width={width} height={height} style={{border: 0}} allowFullScreen={false} loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
    );
}