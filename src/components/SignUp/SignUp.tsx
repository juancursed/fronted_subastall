export const SignUpForm =() => {
    
    
    return(<section>
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
}