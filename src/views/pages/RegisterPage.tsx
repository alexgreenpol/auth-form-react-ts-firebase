import RegisterForm from "../components/RegisterForm/RegisterForm";
import FullwidthLayout from "../layouts/FullwidthLayout";

const RegisterPage = () => {
    return (
        <FullwidthLayout>
            <div className="page-with-form">
                <RegisterForm />
            </div>
        </FullwidthLayout>
    );
};

export default RegisterPage;
