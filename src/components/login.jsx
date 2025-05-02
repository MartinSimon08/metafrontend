import React, { useState } from 'react';
import './login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">INICIAR SESIÓN</h1>
        <p className="login-subtitle">Por favor ingresa tu correo y contraseña</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#forgot" className="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
          
          <button type="submit" className="login-button">Iniciar sesión</button>

          {/* Fila de iconos debajo del botón */}
          <div className="social-icons-container">
            <div className="social-icons-row">
              <a href="#google" className="social-icon">
                <img 
                  src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000" 
                  alt="Google" 
                />
              </a>
              <a href="#facebook" className="social-icon">
                <img 
                  src="https://img.icons8.com/?size=100&id=01GWmP9aUoPj&format=png&color=000000" 
                  alt="Facebook" 
                />
              </a>
              <a href="#twitter" className="social-icon">
                <img 
                  src="https://img.icons8.com/?size=100&id=17950&format=png&color=000000" 
                  alt="Twitter" 
                />
              </a>
            </div>
          </div>
        </form>
        
        <div className="signup-link">
          ¿No tienes una cuenta? <a href="#signup">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default Login;