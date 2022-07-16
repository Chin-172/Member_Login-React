import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./component/Home";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

import { API_GET_DATA } from './global/constants';

function App() {

  // The data cloned from DB
  const [data,setData] = useState();
  
  // The data will push to DB
  const [pushData, setPushData] = useState();

  async function fetchData(){
    const res = await fetch(API_GET_DATA);
    const obtain =  await res.json();
    setData(obtain);
  }

  async function postData(){
    
    await fetch(
      API_GET_DATA,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pushData)
      }
    )

    console.log("Data Pushed!");
  }

  // Fetching Data
  useEffect( () => {
    fetchData();
  },[])


  // Posting and Moniting the data state
  useEffect( () => {
    // if(!initState && initState !== undefined && data !== null && data !== undefined){
    //   postData();
    //   console.log("Data Changed");
    //   console.log(initState);
    // }

    if(pushData !== null && pushData !== undefined)
      postData();
  },[pushData])
  
  return (
    <div className="App">
      {/* Setup All The Routes */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp setData={setPushData} />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
