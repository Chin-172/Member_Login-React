import InputBox from "./InputBox";
import { useNavigate  } from "react-router-dom";
import { useState } from "react";

function SignUp({setData}){
    const nav = useNavigate();
    let [userData] = useState([{
        "first name": "",
        "last name": "",
        "email": "",
        "password": "",
        "phone number": ""
    }]);
    let [username, setUsername] = useState();
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    function Login(){
        // Jump To Sign In Page
        nav("/signIn")
    }

    function postData(){
        console.log(username," : ",email," : ",firstName," : ",lastName," : ",password);

        userData[0]['first name'] = firstName;
        userData[0]['last name'] = lastName;
        userData[0]['email'] = email;
        userData[0]['password'] = password;
        console.log(userData);
        // Do regist actions
        setData(userData);
        // Return Back To Home Page
        nav("/")
    }



    return(
        <div className="SignUpPage">
            <div className="Title">
                <h1>Sign Up</h1>
                <div className="underLine"></div>
            </div>

            <div className="Content">
                <InputBox lbl={"Email"} setData={setEmail} />
                <InputBox lbl={"Username"} setData={setUsername} />
                <InputBox lbl={"First Name"} setData={setFirstName} />
                <InputBox lbl={"Last Name"} setData={setLastName} />
                <InputBox lbl={"Password"} />
                <InputBox lbl={"Confirm Password"} setData={setPassword} />   
            </div>

            <div className="Footer">
                <label>Already have an account? <label id="hyperLink" onClick={Login}>SignIn</label></label>
                <button onClick={postData}>SignUp</button>  
            </div>
        </div>
    )
}


export default SignUp;