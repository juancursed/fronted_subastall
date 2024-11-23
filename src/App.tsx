import { useState } from 'react';
import './App.css'
import { HomePage } from './components/Home/Home';



function App() {  
  const [form, setForm] = useState("login");
  
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App
