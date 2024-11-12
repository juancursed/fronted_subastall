import React from 'react';
import { useState } from "react";


interface LoginFormProps {
  FormHandle: React.Dispatch<React.SetStateAction<string>>;
}


export const SignUpForm: React.FC<LoginFormProps> = ({ FormHandle }) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');

  function handleRegister(e: React.FormEvent){
    e.preventDefault()

    if(!name || !email || !password || !date ||!gender) return;

    console.log(name, email, password, date, gender)
    setName(" ")
    setEmail(" ")
    setPassword(" ")
    setDate(" ")
    setGender(" ")
  }

  return <div className="form-container"> 
          <h2>Crear Cuenta</h2>
          <form onSubmit={handleRegister}>
            <div className="form-controll">
              <input type="text" 
                     placeholder="Ingresa tu nombre"
                     onChange={(e)=> setName(e.target.value)}
                     value={name}/>
            </div>

            <div className="form-controll">
              <input type="email" 
                     placeholder="Ingresa tu Email"
                     onChange={(e)=> setEmail(e.target.value)}
                     value={email}/>
            </div>

            <div className="form-controll">
              <input type="password" 
                     placeholder="Ingresa tu Contraseña"
                     onChange={(e)=> setPassword(e.target.value)}
                     value={password}/>
            </div>
            
            <div className="form-controll">
              <input type="date" 
                     name="birthdate" 
                     id="birthdate" 
                     onChange={(e)=> setDate(e.target.value)}
                     value={date}
                     required/>
            </div>

            <div>
              <select name="gender" required onChange={(e)=> setGender(e.target.value)} value={gender}>
                <option value="">Género</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <button onClick={handleRegister}>Crear Cuenta</button>
          </form>
          <p onClick={() => FormHandle('login')}>Si ya tienes cuenta, inicia sesion aqui</p>
         </div>
}
