import './App.css';
import {useState} from 'react';
import Result from './components/Result';
//import {Plus1Btn, Minus1Btn, Plus10Btn, Minus10Btn, Reset} from './components/CountBtn';
import {CountButtons, Reset} from './components/CountButtons';
//import LoginForm from './components/LoginForm';
import LoginForm from './components/LoginFormTest';
import EssayForm from './components/EssayForm';

function App() {
  //const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);

  // For Login Form
  //const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [info, setInfo] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //const infoValue = {username, phoneNum, email, password};
  // }

  // For Essay Form
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [essayEmail, setEssayEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [essay, setEssay] = useState("");

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
      <LoginForm name={name} setName={setName} 
                 phoneNum={phoneNum} setPhoneNum={setPhoneNum}
                 email={email} setEmail={setEmail}
                 password={password} setPassword={setPassword}
                 confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}/>
      <EssayForm username={username} setUsername={setUsername}
                 age={age} setAge={setAge}
                 dob={dob} setDob={setDob}
                 phoneNo={phoneNo} setPhoneNo={setPhoneNo}
                 essayEmail={essayEmail} setEssayEmail={setEssayEmail}
                 essay={essay} setEssay={setEssay}/>
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

{/* <form id="form-1" onSubmit={handleSubmit} action="/action_page.php">
        
      </form> */}

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

export default App;
