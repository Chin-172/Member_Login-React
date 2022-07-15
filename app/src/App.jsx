import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
function App() {
  
  return (
    <div className="App">
      {/* Setup All The Routes */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
