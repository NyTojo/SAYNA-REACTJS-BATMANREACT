import React, { useState } from 'react';
import '../styles/Login.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginWithEmailPassword = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Gérer la réponse de l'authentification ici
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="up-bar"></div>
      <div className="left-bar"></div>
      <div className="right-bar"></div>
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLoginWithEmailPassword} className="login-button">
          Se connecter avec Email et Mot de passe
        </button>
      </div>
    </>
  )
}

export default Login;
