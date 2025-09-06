import React, { useState } from 'react';
import { log } from '../base-api/auth';
import { getAuth, saveAuth } from '../utils/authStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    const res = await log(formData);
    console.log('form:', res);
    saveAuth(res.token, res.user);

    const token = await getAuth();
    console.log(token);

    if (token) {
      navigate('/');
    }
  };

  const handleRoute = () => {
    navigate('/SignUp');
  };

  return (
    <div className="login-container">
      <div className="login-img"> image</div>
      <div className="login">
        <div className="log-description">
          <h1>Welcome to Aurem</h1>
          <p>Your Personal Music Record Sleeve</p>
        </div>
        <div className="login-form">
          <h3>Log-in to Continue</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </label>
            <button type="submit"> Login</button>
          </form>
          <div>
            You are new to Aurem?<h4 onClick={() => handleRoute()}>Sign-up</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
