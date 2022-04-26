import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      // history('./Hello');
    }
  });
  async function login() {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
  }
  return (
    <div className="main">
      <div>
        <div>
          <h1>Hello there, Sign in to continue</h1>

          <div>
            <form className="form">
              <div>
                <label className="label">Email</label>
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div></div>
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div></div>
              </div>
              <button className="btn" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
