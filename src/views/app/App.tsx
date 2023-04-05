import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../../data/providers/AuthProvider";
import RequireAuth from "../guards/RequireAuth";
import UnrequireAuth from "../guards/UnrequireAuth";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <UnrequireAuth>
                    <LoginPage />
                </UnrequireAuth>
            ),
        },
        {
            path: "/register",
            element: (
                <UnrequireAuth>
                    <RegisterPage />
                </UnrequireAuth>
            ),
        },
        {
            path: "/admin",
            element: (
                <RequireAuth>
                    <AdminPage />
                </RequireAuth>
            ),
        },
    ]);

    return (
        <AuthProvider>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    );
};

export default App;
