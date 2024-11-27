import React, { useState } from 'react';
// import { login, logout, getToken } from '../../services/auth/loginService';
import { login } from '../../services/auth/loginService';
import { Credentials } from '../../types/Auth';


const LoginForm = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  //const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const credenciales: Credentials = { username, password };
      const token = await login(credenciales);
      console.log('Token recibido:', token);
      // setError('');
    } catch (err: any) {
      // setError(err.message);
      console.log(err.message);
    }
  };

  // const handleLogout = () => {
  //   logout();
  //   console.log('Sesión cerrada:', getToken());
  // };

  return (
    <div className="form-container"> 
          <h2>SubastALL</h2>
          <form onSubmit={handleLogin}>
            <div className="form-controll">
              <input type="text" 
                     placeholder="Ingresa tu Email" 
                     onChange={(e)=>setUser(e.target.value)}
                     value={username}/>
            </div>

            <div className="form-controll">
              <input type="password" 
                     placeholder="Ingresa tu Contrasena" 
                     onChange={(e)=>setPassword(e.target.value)}
                     value={password}/>
            </div>
          
            <button onClick={handleLogin}>Iniciar Sesion</button>
          </form>
          {/* <p onClick={()=> FormHandle('SignUp')}>No tienes cuenta? registrate aqui</p> */}
         </div>
  );
};

export default LoginForm;
