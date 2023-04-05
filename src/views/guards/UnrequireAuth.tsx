import { FC, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../data/api/firebase";
import { useAuth } from "../hooks/useAuth";

type UnrequireAuthProps = {
    children: JSX.Element;
};

const UnrequireAuth: FC<UnrequireAuthProps> = ({ children }) => {
    const user = useAuth();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            setLoading(false);
        });
    }, [user]);

    if (loading) {
        return <span className="loader">Loading...</span>;
    }

    if (user) {
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }

    return children;
};

export default UnrequireAuth;
