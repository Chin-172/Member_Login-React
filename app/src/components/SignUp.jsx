import InputBox from "./InputBox";
import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import Alert from "./Alert";

function SignUp({setData}){
    const nav = useNavigate();
    let [userData] = useState({
        "first name": "",
        "last name": "",
        "email": "",
        "password": "",
        "phone number": ""
    });
    let [username, setUsername] = useState();
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [confirmPw, setconfirmPw] = useState();
    const [alert, setAlert] = useState(false);
    const [sentence, setSentence] = useState("");

    function Login(){
        // Jump To Sign In Page
        nav("/signIn")
    }

    function postData(){
        console.log(username," : ",email," : ",firstName," : ",lastName," : ",password);

        if(confirmPw !== password){
            setSentence("Incorrect Confirmed Password!");
            setAlert(true);
        }else{
            setAlert(false);
            userData['first name'] = firstName;
            userData['last name'] = lastName;
            userData['email'] = email;
            userData['password'] = password;
            console.log(userData);
            // Do regist actions
            setData(userData);
            // Return Back To Home Page
            nav("/")
        }
    }



    return(
        <div className="SignUpPage">
            <div className="Title">
                <h1>Sign Up</h1>
                <div className="underLine"></div>
            </div>
            <Alert trigger={alert}>
                <h3>{sentence}</h3>
            </Alert>
            <div className="Content">
                <InputBox lbl={"Email"} setData={setEmail} type={"text"}/>
                <InputBox lbl={"Username"} setData={setUsername} type={"text"}/>
                <InputBox lbl={"First Name"} setData={setFirstName} type={"text"}/>
                <InputBox lbl={"Last Name"} setData={setLastName} type={"text"}/>
                <InputBox lbl={"Password"} setData={setPassword} type={"password"}/>
                <InputBox lbl={"Confirm Password"} setData={setconfirmPw} type={"password"}/>   
            </div>

            <div className="Footer">
                <label>Already have an account? <label id="hyperLink" onClick={Login}>SignIn</label></label>
                <button onClick={postData}>SignUp</button>  
            </div>
        </div>
    )
}


export default SignUp;