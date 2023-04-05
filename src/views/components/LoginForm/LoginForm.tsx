import * as Yup from "yup";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { login } from "../../../data/api/firebase/auth";
import { auth } from "../../../data/api/firebase";
import { getErrorMessage } from "../../../helpers/getErrorMessage";
import InputField from "../InputField/InputField";
import "./LoginForm.scss";

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");

    const handleSubmit = (values: LoginFormValues) => {
        login(auth, values.email, values.password)
            .then(() => {
                navigate("/admin");
            })
            .catch((err) => {
                const errorMessage = getErrorMessage(err);
                setServerError(errorMessage);
            });
    };

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={LoginFormSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className="contact-form">
                    <h1 className="contact-form__title">Login</h1>
                    <div className="contact-form__input">
                        <InputField
                            name="email"
                            label="Email"
                            errorField={errors.email}
                            touchField={touched.email}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="password"
                            label="Password"
                            errorField={errors.password}
                            touchField={touched.password}
                        />
                    </div>

                    {serverError && (
                        <span className="server-error">{serverError}</span>
                    )}

                    <button type="submit">Submit</button>
                    <NavLink className="form-link" to="/register">
                        Go to register page
                    </NavLink>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
