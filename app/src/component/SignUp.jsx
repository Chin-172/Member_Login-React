import InputBox from "./InputBox";
import { useNavigate  } from "react-router-dom";

function SignUp(){
    const nav = useNavigate();

    function Login(){
        // Jump To Sign In Page
        nav("/signIn")
    }

    function Regist(){
        // Do regist actions
    }
    return(
        <div className="SignUpPage">
            <div className="Title">
                <h1>Sign Up</h1>
                <div className="underLine"></div>
            </div>

            <div className="Content">
                <InputBox lbl={"Email"}/>
                <InputBox lbl={"Username"}/>
                <InputBox lbl={"First Name"}/>
                <InputBox lbl={"Last Name"}/>
                <InputBox lbl={"Password"}/>
                <InputBox lbl={"Confirm Password"}/>   
            </div>

            <div className="Footer">
                <label>Already have an account? <label id="hyperLink" onClick={Login}>SignIn</label></label>
                <button onClick={Regist}>SignUp</button>  
            </div>
        </div>
    )
}


export default SignUp;