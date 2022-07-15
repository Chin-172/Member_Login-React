import InputBox from "./InputBox";
import { useNavigate  } from "react-router-dom";

function SignIn(){
    const nav = useNavigate();

    function Login(){
        // To-do Login Check
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
            
            <div className="Content">
                <InputBox lbl={"Email"}/>
                <InputBox lbl={"Password"}/>
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