import { useState } from 'react';
import './App.css'
import {LoginForm} from './components/LoginForm/LoginForm';
import { SignUpForm } from './components/SignUp/SignUp';
import { HomePage } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';


function App() {  
  const [form, setForm] = useState("login");
  
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App
