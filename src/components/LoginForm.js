import React from "react";

//{name, setName, phoneNum, setPhoneNum, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword}
const LoginForm = ({info, setInfo, infoValue}) => {
    const infoFormat = {
                username: {type: "text"},
                phoneNum: {type: "text"}, 
                email: {type: "email"}, 
                password: {type: "text"}
                };

    const handleInfo = (event) => {
        //info.name = setName(event.target.value);
        infoFormat.infoValue.input = setInfo(event.target.value);
    };

    return (
        <>
            <label for={infoValue}>{infoValue.toUppercase()}</label>
            <input type={infoFormat.infoValue.type} id={infoValue} onChange={handleInfo}/>
        </>
    )

    // return (
    //     <form id="form-1" onSubmit={handleSubmit}>
    //         <label for="name">Name:</label>
    //         <input type="text" id="name" onChange={handleName}/>
    //         <br />
    //         <label for="phone-num">Phone number:</label>
    //         <input type="text" id="phone-num" onChange={handlePhoneNum}/>
    //         <br />
    //         <label for="email">Email:</label>
    //         <input type="text" id="email" onChange={handleEmail}/>
    //         <br />
    //         <label for="password">Password:</label>
    //         <input type="password" id="password" onChange={handlePassword}/>
    //         <br />
    //         <label for="confirm-password">Confirm password:</label>
    //         <input type="password" id="confirm-password" onChange={handleConfirmPassword}/>
    //         <br />
    //         <button type="submit" value="Submit">
    //             SUBMIT
    //         </button>
    //     </form>
    // )
}

export default LoginForm;
