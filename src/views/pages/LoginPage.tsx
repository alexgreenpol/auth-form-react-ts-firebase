import LoginForm from "../components/LoginForm/LoginForm";
import FullwidthLayout from "../layouts/FullwidthLayout";

const LoginPage = () => {
    return (
        <FullwidthLayout>
            <div className="page-with-form">
                <LoginForm />
            </div>
        </FullwidthLayout>
    );
};

export default LoginPage;
