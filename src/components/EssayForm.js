import React from "react";

const EssayForm = ({username, setUsername,
                    age, setAge,
                    dob, setDob,
                    gender, setGender,
                    essayEmail, setEssayEmail,
                    phoneNo, setPhoneNo,
                    essay, setEssay}) => {
    let info = {username, age, dob, gender, essayEmail, phoneNo, essay};

    const handleUsername = (event) => {
        info.username = setUsername(event.target.value);
    };

    const handleAge = (event) => {
        info.age = setAge(event.target.value);
    };

    const handleDob = (event) => {
        info.dob = setDob(event.target.value);
    };

    // const handleGender = (event) => {
    //     info.gender = setGender(event.target.value);
    // };

    const handleEssayEmail = (event) => {
        info.essayEmail = setEssayEmail(event.target.value);
    };

    const handlePhoneNo = (event) => {
        info.phoneNo = setPhoneNo(event.target.value);
    };

    const handleEssay = (event) => {
        info.essay = setEssay(event.target.value);
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
            throw new Error("Not an email");
        }

        if (
            info.confirmPassword === "" ||
            info.confirmPassword !== info.password
        ) {
            throw new Error("Password and confirmed password are not the same");
        }

        console.log("login form inputs: ", info);
    }

    return (
        <form id="form-2" onSubmit={handleSubmit} action="/action_page.php">
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={handleUsername}/>
            
            <label for="age">Age:</label>
            <input type="text" id="age" onChange={handleAge}/>
            
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" onChange={handleDob}/>
            
            <label for="gender">Gender:</label>
            <input type="button" id="gender-input" className="dropbtn"/>
            <div className="dropdown-content">
                <a href="#">Options</a>
                <a href="#">Male</a>
                <a href="#">Female</a>
                <a href="#">Other</a>
                <a href="#">Prefer not to say</a>
            </div>

            <label for="email">Email:</label>
            <input type="text" id="email" onChange={handleEssayEmail}/>

            <label for="phone-num">Phone number:</label>
            <input type="text" id="phone-num" onChange={handlePhoneNo}/>
            
            <label for="essay">Essay:</label>
            <input type="text" id="esaay" onChange={handleEssay}/>
            
            <button type="submit" value="Submit">
                SUBMIT
            </button>
        </form>
    )
}

export default EssayForm;
