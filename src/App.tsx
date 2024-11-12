import { useState } from 'react';
import './App.css'
import {LoginForm} from './components/LoginForm/LoginForm';
import { SignUpForm } from './components/SignUp/SignUp';
//import Home from './components/Home/Home';
//import { useState } from 'react';


function App() {  
  const [form, setForm] = useState("login");
  
  return (
    <>
    {form == "login" ? (<LoginForm FormHandle = {setForm}/>):
    (<SignUpForm FormHandle = {setForm} />) }
    </>
  );
}

export default App
