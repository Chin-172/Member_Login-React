import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

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
    console.log('Fetching Data: ',data);
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
    fetchData();  
  }

  // Fetching Data
  useEffect( () => {
    fetchData();
  },[])


  // Posting and Moniting the data state
  useEffect( () => {
    
    if(pushData !== null && pushData !== undefined)
      postData();

      
  },[pushData])
  
  return (
    <div className="App">
      {/* Setup All The Routes */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/signIn" element={<SignIn data={data} />} />
          <Route exact path="/signUp" element={<SignUp setData={setPushData} />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
