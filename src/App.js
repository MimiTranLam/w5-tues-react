import './App.css';
import {useState} from 'react';
import Result from './components/Result';
//import {Plus1Btn, Minus1Btn, Plus10Btn, Minus10Btn, Reset} from './components/CountBtn';
import {CountButtons, Reset} from './components/CountButtons';
import LoginForm from './components/LoginFormTest';
import TextForm from './components/TextForm';

function App() {
  // For Count
  //const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  // For Login Form
  //const [username, setUsername] = useState("");
  // const [name, setName] = useState("");
  // const [phoneNum, setPhoneNum] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [formInfo, setFormInfo] = useState({
    nameInput: "", 
    phoneNum: "",  
    email: "",  
    password: "",
    confirmPassword: ""
  });

  // For Essay Form
  const [info, setInfo] = useState({
    username: "",
    age: "",
    dob: "",
    essayEmail: "",
    phone: "",
    essay: ""
  });

  return (
    <div className="App">
      <h1><span>[</span>Demo useState<span>]</span></h1>
      <Result count={count}/>
      <div className="btns-box">
        <CountButtons count={count} setCount={setCount} value={-10}/>
        <CountButtons count={count} setCount={setCount} value={-1}/>
        <CountButtons count={count} setCount={setCount} value={0}/>
        <CountButtons count={count} setCount={setCount} value={1}/>
        <CountButtons count={count} setCount={setCount} value={10}/>
      </div>
      <Reset count={count} setCount={setCount}/>
      <LoginForm formInfo={formInfo} setFormInfo={setFormInfo}/>
      <TextForm info={info} setInfo={setInfo}/>
    </div>
  );
}

// const handleSubmit = (event) => {
//   //   let info = {};
//     event.preventDefault();
//   //   let emailInput = info.email.trim();

//   //   if (
//   //       info.name === "" ||
//   //       info.phoneNum === "" ||
//   //       info.email === "" ||
//   //       info.name === "" ||
//   //       info.password === ""
//   //   ) {
//   //     throw new Error ("Missing info")
//   //   }

//   //   const minEmailStr = "@gmail.com"

//   //   if (
//   //       emailInput.length <= minEmailStr.length ||
//   //       emailInput.slice(-minEmailStr.length) !== minEmailStr
//   //   ) {
//   //       let info = {name, phoneNum, email, password};
//   //       throw new Error("Not an email");
//   //     }

//   //   if (
//   //       info.confirmPassword === "" ||
//   //       info.confirmPassword !== info.password
//   //   ) {
//   //           let info = {name, phoneNum, email, password};
//   //           throw new Error("Password and confirmed password are not the same");
//   //       }

//   //   console.log("login form inputs: ", info);
//   }

  //const [form2, setForm2] = useState("")

        //   <LoginForm info={info} setInfo={setInfo} infoValue={username}/>
        // <LoginForm info={info} setInfo={setInfo} infoValue={phoneNum}/>
        // <LoginForm info={info} setInfo={setInfo} infoValue={email}/>
        // <LoginForm info={info} setInfo={setInfo} infoValue={password}/>

  // <EssayForm form2={name, setName,
  //                   age, setAge,
  //                   dob, setDob,
  //                   gender, setGender,
  //                   email, setEmail,
  //                   phoneNum, setPhoneNum,
  //                   essay, setEssay}
  //                 setForm2={name, setName,
  //                   age, setAge,
  //                   dob, setDob,
  //                   gender, setGender,
  //                   email, setEmail,
  //                   phoneNum, setPhoneNum,
  //                   essay, setEssay}/>

  // name={name} setName={setName} 
  //                phoneNum={phoneNum} setPhoneNum={setPhoneNum}
  //                email={email} setEmail={setEmail}
  //                password={password} setPassword={setPassword}
  //                confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}


  // <EssayForm username={username} setUsername={setUsername}
  //                age={age} setAge={setAge}
  //                dob={dob} setDob={setDob}
  //                phoneNo={phoneNo} setPhoneNo={setPhoneNo}
  //                essayEmail={essayEmail} setEssayEmail={setEssayEmail}
  //                essay={essay} setEssay={setEssay}/>
export default App;
