import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
    children: JSX.Element
}

export function ScrollToTop({ children }: Props) {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}
