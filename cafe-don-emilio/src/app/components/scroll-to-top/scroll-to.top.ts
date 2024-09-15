import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top component. This component is used to scroll to top when the route changes.
 * @author dgutierrez
 */
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }, 100);
    }, [pathname]);

    return null;
}
