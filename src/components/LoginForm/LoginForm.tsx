import { useState } from "react";

interface LoginFormProps {
  FormHandle: React.Dispatch<React.SetStateAction<string>>;
}



export const LoginForm: React.FC<LoginFormProps> = ({ FormHandle }) =>{
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: React.FormEvent){
    e.preventDefault()

    if(!user || !password)return;
    console.log(user, password)
    setUser(" ")
    setPassword(" ")
  }
  
  
  return <div className="form-container"> 
          <h2>SubastALL</h2>
          <form onSubmit={handleLogin}>
            <div className="form-controll">
              <input type="text" 
                     placeholder="Ingresa tu Email" 
                     onChange={(e)=>setUser(e.target.value)}
                     value={user}/>
            </div>

            <div className="form-controll">
              <input type="password" 
                     placeholder="Ingresa tu Contrasena" 
                     onChange={(e)=>setPassword(e.target.value)}
                     value={password}/>
            </div>
          
            <button onClick={handleLogin}>Iniciar Sesion</button>
          </form>
          <p onClick={()=> FormHandle('SignUp')}>No tienes cuenta? registrate aqui</p>
         </div>
}
