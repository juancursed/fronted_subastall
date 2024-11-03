import { useState } from "react";



export const LoginForm = ({setUsername}) => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (user == "" || password == "") {
      setError(true)
      return
    }

    setError(false)
    setUsername([user])
  }

  return (
    <section>
      <h1>Login</h1>
      <form
        className="loginForm"
        onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text"
            name="username"
            value={user}
            onChange={e => setUser(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p>Todos los campos son requeridos</p>}
    </section>
  );

};


export default LoginForm;
