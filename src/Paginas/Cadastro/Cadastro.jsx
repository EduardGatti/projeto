import React from 'react'
import './global.css'
function Cadastro() {
  return (
    <div className="container">
      <h2>Cadastro de Usuário</h2>
      <div className="input">
      <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" />

      </div>
      <div className="input">
      <label>Email</label>
      <input type="email" placeholder="Digite seu email" />
      </div>
      <div className="input">

      <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />

      </div>

        <button type="submit">Cadastrar</button>
    </div>
  )
}

export default Cadastro
