import React from "react";

const TextForm = ({info, setInfo}) => {
    const {username, age, dob, gender, textEmail, phoneNo, about} = info;

    const handleInfo = (event) => {
        setInfo({...info, [event.target.name]: event.target.value})
    }

    const handleCheckbox = () => {
        const checkboxes = document.getElementsByName('check')
        console.log(checkboxes);
        checkboxes.forEach((x) => {
            if (x.type !== "checkbox") {x.checked = false}
        })
        //handleInfo(event);
        // setInfo({...info, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailInput = info.textEmail.trim();
        const validateEmail = /\S+@\S+\.\S+/; 

        if (validateEmail.test(emailInput) === false) {
            alert("Not an email");
        }

        if (
            info.confirmPassword === "" ||
            info.confirmPassword !== info.password
        ) {
            alert("Password and confirmed password are not the same");
            //throw new Error("Password and confirmed password are not the same");
        }

        console.log("essay form inputs: ", info);
        // RenderInfo();
    }

    // const RenderInfo = () => {
    //     return (
    //         <div id="rendered-info">
    //             Is this information correct?
    //             <div id="info">{info}</div>
    //             <a href="#">:)</a>
    //             <a href="#">:(</a>
    //         </div>
    //     );
    // }

    // ^ with RenderInfo set state [submit, setSubmit] = useState("")
    // if the submit button is pressed, onChange, change state.
    // create useEffect function, setSubmit = e.value and when this changes, call function renderInfo to display info in the form
    // decide - renderInfo is a new div or remove elements in form-2 and display info in the form div
    // set the useEffect dependency array to submit state value

    return (
        <form id="form-2" onSubmit={handleSubmit} action="/action_page.php">
            <label for="name">Name:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleInfo} required/>
            
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" value={age} onChange={handleInfo}/>
            
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={dob} onChange={handleInfo} required/>
            
            <label for="gender">Gender:</label>
            <div className="dropdown-content">
                <input type="checkbox" id="male" name="check" value={gender} onChange={handleCheckbox}/>
                <label for="vehicle1"> Male</label><br></br>
                <input type="checkbox" id="female" name="check" value={gender} onChange={handleCheckbox}/>
                <label for="vehicle1"> Female</label><br></br>
                <input type="checkbox" id="other" name="check" value={gender} onChange={handleCheckbox}/>
                <label for="vehicle1"> Other</label><br></br>
                <input type="checkbox" id="none" name="check" value={gender} onChange={handleCheckbox}/>
                <label for="vehicle1"> Prefer not to say</label><br></br>
            </div>

            <label for="email">Email:</label>
            <input type="text" id="textEmail" name="textEmail" value={textEmail} onChange={handleInfo} required/>

            <label for="phone-no">Phone number:</label>
            <input type="text" id="phone-no" name="phoneNo" value={phoneNo} onChange={handleInfo} required/>
            
            <label for="essay">About:</label>
            <input type="text" id="about" name="about" value={about} onChange={handleInfo} contentEditable required/>
            
            <button type="submit" value="Submit">
                SUBMIT
            </button>
        </form>
    )
}

// {username, setUsername,
//                     age, setAge,
//                     dob, setDob,
//                     gender, setGender,
//                     essayEmail, setEssayEmail,
//                     phoneNo, setPhoneNo,
//                     essay, setEssay}

export default TextForm;
