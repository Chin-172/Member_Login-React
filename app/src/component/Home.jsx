import { useNavigate  } from "react-router-dom";

function Home(){
    const nav = useNavigate();

    return(
        <div className="Home">
            <button onClick={() => {nav("/signIn") }}>Sign In</button>
        </div>
    );
}

export default Home;