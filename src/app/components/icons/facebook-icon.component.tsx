import { IIconComponentProps } from "../../common/interfaces";

/**
 * Facebook icon component
 * @author dgutierrez
 */
export const FacebookIconComponent = ({
  size = "20",
  fill = "white",
  height,
  width,
  color = "white",
  className = "",
}: IIconComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || size}
      height={height || size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M18.723 0.271484H1.03843C0.613132 0.271484 0.269531 0.615085 0.269531 1.04038V18.725C0.269531 19.1503 0.613132 19.4939 1.03843 19.4939H18.723C19.1483 19.4939 19.4919 19.1503 19.4919 18.725V1.04038C19.4919 0.615085 19.1483 0.271484 18.723 0.271484ZM17.9541 17.9561H13.5306V12.05H16.0295L16.4043 9.14984H13.5306V7.29728C13.5306 6.4563 13.7637 5.88443 14.9675 5.88443H16.5029V3.2894C16.2361 3.25336 15.3255 3.17407 14.2634 3.17407C12.0481 3.17407 10.5319 4.52685 10.5319 7.00894V9.14743H8.02818V12.0476H10.5343V17.9561H1.80732V1.80928H17.9541V17.9561Z"
        fill={fill || color}
      />
    </svg>
  );
};
