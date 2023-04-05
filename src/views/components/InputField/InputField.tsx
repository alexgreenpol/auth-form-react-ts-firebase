import { Field } from "formik";
import { FC } from "react";
import "./InputField.scss";

type InputFieldProps = {
    errorField?: string;
    touchField?: boolean;
    label: string;
    name: string;
};

const InputField: FC<InputFieldProps> = ({
    name,
    label,
    errorField,
    touchField,
}) => {
    return (
        <div className="input-holder">
            <label htmlFor={name}>{label}</label>
            <Field
                name={name}
                className={`input-field ${
                    errorField && touchField ? "invalid" : "valid"
                }`}
            />
            {errorField && touchField ? (
                <span className="error">{errorField}</span>
            ) : null}
        </div>
    );
};

export default InputField;
