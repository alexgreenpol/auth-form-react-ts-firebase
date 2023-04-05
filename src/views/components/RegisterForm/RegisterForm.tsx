import * as Yup from "yup";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { register } from "../../../data/api/firebase/auth";
import { auth } from "../../../data/api/firebase";
import { getErrorMessage } from "../../../helpers/getErrorMessage";
import InputField from "../InputField/InputField";
import "../LoginForm/LoginForm.scss";

interface RegisterFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const RegisterForm = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={RegisterFormSchema}
            onSubmit={(values: RegisterFormValues) => {
                register(auth, values.email, values.password)
                    .then((res) => {
                        navigate("/admin");
                    })
                    .catch((err) => {
                        const errorMessage = getErrorMessage(err);
                        setServerError(errorMessage);
                    });
            }}
        >
            {({ errors, touched }) => (
                <Form className="contact-form">
                    <h1 className="contact-form__title">Register</h1>
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

                    <div className="contact-form__input">
                        <InputField
                            name="confirmPassword"
                            label="Confirm password"
                            errorField={errors.confirmPassword}
                            touchField={touched.confirmPassword}
                        />
                    </div>

                    {serverError && (
                        <span className="server-error">{serverError}</span>
                    )}

                    <button type="submit">Submit</button>
                    <NavLink className="form-link" to="/">
                        Go to login page
                    </NavLink>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
