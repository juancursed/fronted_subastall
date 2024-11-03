import './App.css'
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import { useState } from 'react';


function App() {  
  const[username, setUsername] = useState([])
  
  return (
    <div className='App'>


      {
        !(username.length > 0)
        ? <LoginForm setUsername = {setUsername}/>
        :<Home />
      }
      
 
    </div>
  )
}

export default App
