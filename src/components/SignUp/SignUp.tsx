import React, { useState } from 'react';

import { register } from '../../services/auth/loginService';
import { RegisterRequest } from '../../types/Auth';

interface LoginFormProps {
  FormHandle: React.Dispatch<React.SetStateAction<string>>;
}


// export const SignUpForm: React.FC<LoginFormProps> = ({ FormHandle }) =>{
export const SignUpForm: React.FC<LoginFormProps> = () =>{
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [genter, setGender] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const credenciales: RegisterRequest = { username, password, firstname, lastname,country,date,genter};
      const mensaje = await register(credenciales);
      console.log('salida:', mensaje);
      // setError('');
    } catch (err: any) {
      // setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleRegister}>
        <div className="form-controll">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div className="form-controll">
          <input
            type="text"
            placeholder="Ingresa tu apellido"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>
        <div className="form-controll">
          <input
            type="email"
            placeholder="Ingresa tu Email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-controll">
          <input
            type="password"
            placeholder="Ingresa tu Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-controll">
          <input
            type="text"
            placeholder="Ingresa tu país"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div className="form-controll">
          <input
            type="date"
            name="birthdate"
            id="birthdate"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>
        <div>
          <select
            name="gender"
            required
            onChange={(e) => setGender(e.target.value)}
            value={genter}
          >
            <option value="">Género</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
      {/* <p onClick={() => FormHandle('login')}>Si ya tienes cuenta, inicia sesión aquí</p> */}
    </div>
  );
};

export default SignUpForm;