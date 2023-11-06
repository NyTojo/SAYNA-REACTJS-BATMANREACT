import React, { useState } from 'react';
import '../styles/Singup.css';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';

function Singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Add this line to define the error state

  const navigate = useNavigate();
  const { createUser } = userAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Set the error state to an empty string here
    try {
      await createUser(email, password);
      navigate('Compte');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    console.log('email');
    console.log('password');
  }





  return (
    <>
      <section id="hero">
        <div className="hero-image">
          <div className="container">
            <h1 classnameName="hero-title text-uppercase text-white"></h1>
          </div>
        </div>
      </section>
      <div className="container formulaire">
        <div className="head text-center">
          <h2>inscription</h2>
          <p>
            Vous avez déjà un compte?
            <Link to='/login'> connectez-vous ici!</Link>
          </p>
        </div>

        <div className="form-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary w-100">Confirmer</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Singup