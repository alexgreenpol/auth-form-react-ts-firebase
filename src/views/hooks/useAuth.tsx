import { useContext } from "react";
import { AuthContext } from "../../data/contexts/AuthContext";

export const useAuth = () => {
    return useContext(AuthContext);
};
