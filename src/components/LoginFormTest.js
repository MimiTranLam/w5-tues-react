import React from "react";

const LoginForm = ({formInfo, setFormInfo}) => {
    const {nameInput, phoneNum, email, password, confirmPassword} = formInfo;
    
    const handleInfo = (event) => {
        setFormInfo({...formInfo, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailInput = formInfo.email.trim();

        const minEmailStr = "@gmail.com"

        if (
        emailInput.length <= minEmailStr.length ||
        emailInput.slice(-minEmailStr.length) !== minEmailStr
        ) {
            throw new Error("Not an email");
        }

        if (
            formInfo.confirmPassword === "" ||
            formInfo.confirmPassword !== formInfo.password
        ) {
            alert("Password and confirmed password are not the same");
            //throw new Error("Password and confirmed password are not the same");
        }

        console.log("login form inputs: ", formInfo);
    }

    return (
        <form id="form-1" onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <input type="text" id="name" name="nameInput" value={nameInput} onChange={handleInfo} required/>

            <label for="phone-num">Phone number:</label>
            <input type="text" id="phone-num" name="phoneNum" value={phoneNum} onChange={handleInfo} required/>

            <label for="email">Email:</label>
            <input type="text" id="email" name="email" value={email} onChange={handleInfo} required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handleInfo} required/>

            <label for="confirm-password">Confirm password:</label>
            <input type="password" id="confirm-password" name="confirmPassword" value={confirmPassword} onChange={handleInfo} required/>

            <button type="submit" value="Submit">
                SUBMIT
            </button>
        </form>
    )
}

    // const handleName = (event) => {
    //     info.name = setName(event.target.value);
    // };

    // const handlePhoneNum = (event) => {
    //     info.phoneNum = setPhoneNum(event.target.value);
    // };

    // const handleEmail = (event) => {
    //     info.email = setEmail(event.target.value);
    // };

    // const handlePassword = (event) => {
    //     info.password = setPassword(event.target.value);
    // };

    // const handleConfirmPassword = (event) => {
    //     info.confirmPassword = setConfirmPassword(event.target.value);
    // };

export default LoginForm;
