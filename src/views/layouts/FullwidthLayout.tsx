import { FC, useEffect } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";

type FullwidthLayoutProps = {
    className?: string;
    children: JSX.Element | JSX.Element[];
};

const FullwidthLayout: FC<FullwidthLayoutProps> = ({ children, className }) => {
    const location = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return <main className={cn("page", { className })}>{children}</main>;
};

export default FullwidthLayout;
