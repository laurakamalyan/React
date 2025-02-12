import React, {useCallback, useMemo, useState} from "react";
import Input from "./Input";

function ValidationForm() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const [isFocus, setIsFocus] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = useCallback((e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }, [formData]);

    const valFirstname = useMemo(() => {
        if ((!formData.firstname && isFocus) || (!formData.firstname && isSubmitted)) {
            return "First name is required!";
        }
        return !formData.firstname;
    }, [formData.firstname, isSubmitted]);

    const valLastname = useMemo(() => {
        if ((!formData.lastname && isFocus) || (!formData.lastname && isSubmitted)) {
            return "Last name is required!";
        }
        return !formData.lastname;
    }, [formData.lastname, isSubmitted]);

    const valEmail = useMemo(() => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if ((!formData.email && isFocus) || (!formData.email && isSubmitted)) {
            return "Email is required!";
        } else if (formData.email && !emailPattern.test(formData.email)) {
            return "Email is not valid!";
        }
        return !formData.email;
    }, [formData.email, isSubmitted]);

    const valPassword = useMemo(() => {
        // 1 lowercase, 1 uppercase, one digit, one special character, least 8 character
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if ((!formData.password && isFocus) || (!formData.password && isSubmitted)) {
            return "Password is required!";
        } else if (formData.password && !passwordPattern.test(formData.password)) {
            return "Password is not valid!";
        }
        return !formData.password;
    }, [formData.password, isSubmitted]);

    const valRePassword = useMemo(() => {
        if ((!formData.rePassword && isFocus) || (!formData.rePassword && isSubmitted)) {
            return "Repeat password is required!";
        } else if (formData.rePassword && formData.password !== formData.rePassword) {
            return "Passwords don't match!";
        }
        return !formData.rePassword;
    }, [formData.rePassword, isSubmitted]);

    const validate = useMemo(() => {
        return {
            validateFirstName: valFirstname,
            validateLastName: valLastname,
            validateEmail: valEmail,
            validatePassword: valPassword,
            validateRePassword: valRePassword,
        }
    }, [valFirstname, valLastname, valEmail, valPassword, valRePassword]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setIsSubmitted(true);

        let arr = Object.values(validate);
        let result = arr.some(val => !!val);
        console.log(result);
        console.log(arr);

        console.log(validate);
        console.log(validate.validateFirstName);

        if (!result) {
            console.log("Registered successfully!");
        }
    }, [validate]);

    const data = useMemo(() => {
        return [
            {
                type: "text",
                name: "firstname",
                formData: formData.firstname,
                validateErr: validate.validateFirstName,
            },
            {
                type: "text",
                name: "lastname",
                formData: formData.lastname,
                validateErr: validate.validateLastName,
            },
            {
                type: "email",
                name: "email",
                formData: formData.email,
                validateErr: validate.validateEmail,
            },
            {
                type: "password",
                name: "password",
                formData: formData.password,
                validateErr: validate.validatePassword,
            },
            {
                type: "password",
                name: "rePassword",
                formData: formData.rePassword,
                validateErr: validate.validateRePassword,
            },
        ]
    }, [formData, validate]);

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
                            handleFocus={() => setIsFocus(true)}
                            handleBlur={() => setIsFocus(false)}
                            validate={validate}
                            name={item.name}
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