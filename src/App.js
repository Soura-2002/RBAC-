import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import UserManagement from "./Components/UserManagement";
import RoleManagement from "./Components/RoleManagement";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from "./Components/About"

function App() {
  const[mode,setMode]=useState('light')//whether darkmode is enabled or not
  const[text,setText]=useState("Enable Dark Mode")
  const[btn,setBtn]=useState("outlined")
  
  const[alert,setAlert]=useState(null);
  const showAlert=(messsage,type)=>{
      setAlert({
        msg:messsage,
        Type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#495057";
      showAlert("Dark Mode has been enabled!!","success")
      setText("Enable Light Mode")
      setBtn("contained")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Dark Mode has been disabled!!","primary")
      setText("Enable Dark Mode")
      setBtn("outlined")
    }
  }
  return (
    <>
    <h1 style={{ textAlign: "center", background:"linear-gradient(to right, #cfcfcf, #ebedeb, #cfcfcf,#ebedeb,#cfcfcf,#ebedeb,#cfcfcf,#ebedeb)",border:"#cfcfcf",borderRadius:"10px",padding:"30px"}}>RBAC User Management</h1>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggle={toggleMode} text={text}/>
    <Alert alert={alert}></Alert>
    <Routes>
      <Route path="/" element={<UserManagement mode={mode} btn={btn}/>}/>
      <Route path="/roles" element={<RoleManagement mode={mode} btn={btn}/>} />
      <Route path="/about" element={<About mode={mode} btn={btn}/>}/>
    </Routes>
  </>
  );
}

export default App;


