import InputBox from "./InputBox";
import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import Alert from "./Alert";

function SignIn({data}){
    const nav = useNavigate();
    const [userEmail, setUserEmail] = useState();
    const [userPwd, setUserPwd] = useState();
    const [user, setUser] = useState();
    const [alert, setAlert] = useState(false);
    const [sentence, setSentence] = useState("");

    function Login(){
        console.log(data);
        let tmp = "";
        // Read the data cloned from DB
        for(let i = 0 ; i < Object.values(data).length ; i++)
            if ( userEmail === data[i]['email']  && userPwd === data[i]['password'] ){
                setSentence("Welcome Back, "+ data[i]['first name'])
                tmp =  data[i]['first name'] ;
            }

        if(tmp === ""){
            setSentence("Invalid Email or Password");
        }else{
            setUser(tmp);
        }
        console.log("user: ",user);
        setAlert(true);
    }

    function ResetPassword(){
        // Jump To Reset Password Page
        console.log("Reset Password");
    }

    function CreateAccount(){
        // Jump To SignUp Page
        // console.log("Create Account");
        nav("/signUp")
    }
    return(
        <div className="SignInPage">
            <div className="Title">
                <h1>Sign In</h1>
                <div className="underLine"></div>
            </div>
            <Alert trigger={alert}>
                <h3>{sentence}</h3>
            </Alert>
            <div className="Content">
                <InputBox lbl={"Email"} setData={setUserEmail} type={"text"}/>
                <InputBox lbl={"Password"} setData={setUserPwd} type={"password"}/>
                <label id="hyperLink" onClick={ResetPassword}>Forget Password?</label>
            </div>
            
            <div className="Footer">
                <label>Not registed yet? <label id="hyperLink" onClick={CreateAccount}>Create an account</label></label>
                <button onClick={Login}>Login</button>  
            </div>
        </div>
    );
}

export default SignIn;