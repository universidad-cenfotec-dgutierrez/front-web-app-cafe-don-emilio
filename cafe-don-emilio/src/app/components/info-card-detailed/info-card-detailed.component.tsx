import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

/**
 * Props for the detailed info card
 * @author dgutierrez
 */
interface InfoCardDetailedProps {
    iconSrc: string | FontAwesomeIconProps["icon"];
    isIconSrcFontAwesome: boolean;
    title: string;
    listInfo: string[];
    showDetailInfoInOrderList?: boolean;
}

/**
 * Renders the icon, either as an image or a FontAwesome icon
 * @param iconSrc - The source of the icon
 * @param isIconSrcFontAwesome - Whether the icon source is a FontAwesome icon
 * @returns The icon component
 * @author dgutierrez
 */
const renderIcon = (iconSrc: string | FontAwesomeIconProps["icon"], isIconSrcFontAwesome: boolean) => {
    return isIconSrcFontAwesome ? (
        <FontAwesomeIcon icon={iconSrc as FontAwesomeIconProps["icon"]} size="1x" className="color-light" />
    ) : (
        <img src={iconSrc as string} alt="icon" className="img-fluid" />
    );
};

/**
 * Component for the detailed info card
 * @author dgutierrez
 */
export const InfoCardDetailedComponent = ({
                                              showDetailInfoInOrderList = false,
                                              listInfo,
                                              iconSrc,
                                              title,
                                              isIconSrcFontAwesome,
                                          }: InfoCardDetailedProps) => {
    return (
        <div className="info-card">
            <div className="info-card__icon d-flex justify-content-center">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded-circle dimension-80px">
                    {renderIcon(iconSrc, isIconSrcFontAwesome)}
                </div>
            </div>

            <div className="info-card__content">
                <h3 className="info-card__title titulo-3 text-center my-3">{title}</h3>
                {showDetailInfoInOrderList ? (
                    <ul className="info-card__list">
                        {listInfo.map((info, index) => (
                            <li className="fw-normal texto-med" key={index}>{info}</li>
                        ))}
                    </ul>
                ) : (
                    <ol className="info-card__list list-unstyled text-center">
                        {listInfo.map((info, index) => (
                            <li className="fw-normal texto-med" key={index}>{info}</li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
};