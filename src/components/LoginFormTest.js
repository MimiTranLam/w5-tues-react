import React from "react";

const LoginForm = ({name, setName, phoneNum, setPhoneNum, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword}) => {
    let info = {name, phoneNum, email, password};

    const handleName = (event) => {
        info.name = setName(event.target.value);
    };

    const handlePhoneNum = (event) => {
        info.phoneNum = setPhoneNum(event.target.value);
    };

    const handleEmail = (event) => {
        info.email = setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        info.password = setPassword(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        info.confirmPassword = setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailInput = info.email.trim();

        if (
            info.name === "" ||
            info.phoneNum === "" ||
            info.email === "" ||
            info.name === "" ||
            info.password === ""
        ) {
            throw new Error ("Missing info")
        }

        const minEmailStr = "@gmail.com"

        if (
        emailInput.length <= minEmailStr.length ||
        emailInput.slice(-minEmailStr.length) !== minEmailStr
        ) {
            let info = {name, phoneNum, email, password};
            throw new Error("Not an email");
        }

        if (
            info.confirmPassword === "" ||
            info.confirmPassword !== info.password
        ) {
            let info = {name, phoneNum, email, password};
            throw new Error("Password and confirmed password are not the same");
        }

        console.log("login form inputs: ", info);
    }

    return (
        <form id="form-1" onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={handleName}/>

            <label for="phone-num">Phone number:</label>
            <input type="text" id="phone-num" onChange={handlePhoneNum}/>

            <label for="email">Email:</label>
            <input type="text" id="email" onChange={handleEmail}/>

            <label for="password">Password:</label>
            <input type="password" id="password" onChange={handlePassword}/>
            
            <label for="confirm-password">Confirm password:</label>
            <input type="password" id="confirm-password" onChange={handleConfirmPassword}/>
            <button type="submit" value="Submit">
                SUBMIT
            </button>
        </form>
    )
}

export default LoginForm;
