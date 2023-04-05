import { auth } from "../../data/api/firebase";
import { logout } from "../../data/api/firebase/auth";
import { useAuth } from "../hooks/useAuth";
import FullwidthLayout from "../layouts/FullwidthLayout";

const AdminPage = () => {
    const user = useAuth();

    return (
        <FullwidthLayout>
            <h1>Hello {user?.email}</h1>
            <button
                className="btn btn--white"
                onClick={() => {
                    logout(auth);
                }}
            >
                Logout
            </button>
        </FullwidthLayout>
    );
};

export default AdminPage;
