import { Route, Routes } from "react-router-dom";
import "./pages/home/Home.css";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";

import { useEffect, useState } from "react";
import { fetchProfile } from "./component/Api/Api";
import Protected from "./pages/Protected";
function App() {
  const[user,setUser]=useState(null)
  const getProfile = async () => {
    const res = await fetchProfile();
    console.log("Profile", res.data);

    setUser(res.data.user)
  };

  useEffect(() => {
    
    getProfile();
   
  },[]);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route path="/" element={<Protected Component={Auth} user={user}/>} />
        <Route path="/home" element={<Protected Component={Home} user={user}/>} />
      </Routes>

      {/* <Profile /> */}
    </div>
  );
}

export default App;
