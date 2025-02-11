import React, {useCallback, useMemo, useState} from "react";
import {useFormStatus} from "react-dom";
import Input from "./Input";

function ValidationForm() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const formErrors = useMemo(() => {
        return {
            firstnameErr: '',
            lastnameErr: '',
            emailErr: '',
            passwordErr: '',
            rePasswordErr: '',
        }
    }, []);

    const validate = {
        validateFirstName: '',
        validateLastName: '',
        validateEmail: '',
        validatePassword: '',
        validateRePassword: '',
    }


    let isValid = true;
    const [isFocus, setIsFocus] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFocus = useCallback(() => {
        setIsFocus(true);
    }, [isFocus]);

    const handleBlur = useCallback(() => {
        setIsFocus(false);
    }, [isFocus]);

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }, [formData]);

    validate.validateFirstName = useMemo(() => {
        if (!formData.firstname && isFocus || !formData.firstname && isSubmitted) {
            formErrors.firstnameErr = "First name is required!";
            isValid = false;
        }

        return isValid;
    }, [formData.firstname, isSubmitted]);

    validate.validateLastName = useMemo(() => {
        if (!formData.lastname && isFocus || !formData.lastname && isSubmitted) {
            formErrors.lastnameErr = "Last name is required!";
            isValid = false;
        }
        return isValid;
    }, [formData.lastname, isSubmitted]);

    validate.validateEmail = useMemo(() => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email && isFocus || !formData.email && isSubmitted) {
            formErrors.emailErr = "Email is required!";
            isValid = false;
        } else if (formData.email && !emailPattern.test(formData.email)) {
            formErrors.emailErr = "Email is not valid!";
            isValid = false;
        }
        return isValid;
    }, [formData.email, isSubmitted]);

    validate.validatePassword = useMemo(() => {
        // 1 lowercase, 1 uppercase, one digit, one special character, least 8 character
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (!formData.password && isFocus || !formData.password && isSubmitted) {
            formErrors.passwordErr = "Password is required!";
            isValid = false;
        } else if (formData.password && !passwordPattern.test(formData.password)) {
            formErrors.passwordErr = "Password is not valid!";
            isValid = false;
        }
        return isValid;
    }, [formData.password, isSubmitted]);

    validate.validateRePassword = useMemo(() => {
        if (!formData.rePassword && isFocus || !formData.rePassword && isSubmitted) {
            formErrors.rePasswordErr = "Repeat password is required!";
            isValid = false;
        } else if (formData.rePassword && formData.password !== formData.rePassword) {
            formErrors.rePasswordErr = "Passwords don't match!";
            isValid = false;
        }
        return isValid;
    }, [formData.rePassword, isSubmitted]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setIsSubmitted(true);

        if (validate && formData.firstname && formData.lastname) {
            console.log("Registered successfully!");
        }
    }, [validate, formData]);

    const data = useMemo(() => {
        return [
            {
                type: "text",
                name: "firstname",
                formData: formData.firstname,
                validateName: validate.validateFirstName,
                validateErr: formErrors.firstnameErr,
            },
            {
                type: "text",
                name: "lastname",
                formData: formData.lastname,
                validateName: validate.validateLastName,
                validateErr: formErrors.lastnameErr,
            },
            {
                type: "email",
                name: "email",
                formData: formData.email,
                validateName: validate.validateEmail,
                validateErr: formErrors.emailErr,
            },
            {
                type: "password",
                name: "password",
                formData: formData.password,
                validateName: validate.validatePassword,
                validateErr: formErrors.passwordErr,
            },
            {
                type: "password",
                name: "rePassword",
                formData: formData.rePassword,
                validateName: validate.validateRePassword,
                validateErr: formErrors.rePasswordErr,
            },
        ]
    }, [formData, validate, formErrors]);


    return (
        <div className="formValidation">
            <p>
                {formData.firstname} {formData.lastname}
            </p>

            <form onSubmit={handleSubmit}>
                {
                    data.map((item, index) => [
                        <Input
                            key={index}
                            type={item.type}
                            formData={item.formData}
                            handleChange={handleChange}
                            handleFocus={handleFocus}
                            handleBlur={handleBlur}
                            validate={validate}
                            formErrors={formErrors}
                            name={item.name}
                            validateName={item.validateName}
                            validateErr={item.validateErr}
                        />
                    ])
                }

                <button>Register</button>
            </form>
        </div>
    );
}

export default ValidationForm;