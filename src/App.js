import { useState } from 'react';
import logo from './assets/logo.svg'
import './styles.css'

export default function App() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  function handleLogin(event) {
    event.preventDefault()
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleLogin}>
            
            <span className="title">
              Bem Vindo!
            </span>
            <span className="title">
              <img src={logo} alt="logo escrito dev" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-value-input input' : 'input'}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-value-input input' : 'input'}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-btn">
              <button className='form-btn'>Login</button>
            </div>

            <div className="create-account">
              <span>Não possui conta?</span>

              {/* Para fins de treino o link redireciona para o projeto no GitHub */}
              <a href="https://github.com/dionedev/Custom-login" target="blank">Crie aqui.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}