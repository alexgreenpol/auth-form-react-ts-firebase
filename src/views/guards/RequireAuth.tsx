import { FC, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../data/api/firebase";
import { useAuth } from "../hooks/useAuth";

type RequireAuthProps = {
    children: JSX.Element;
};

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const user = useAuth();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    auth.onAuthStateChanged(() => {
        setLoading(false);
    });

    if (loading) {
        return <span className="loader">Loading...</span>;
    }

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
