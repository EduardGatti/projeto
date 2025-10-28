import React from 'react'
import "../Cadastro/global.css"
function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="input">
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" />
        </div>

        <div className="input">
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
