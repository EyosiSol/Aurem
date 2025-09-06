import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sign } from '../base-api/auth';
import { getAuth, saveAuth } from '../utils/authStore';

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    const res = await Sign(formData);
    console.log('form:', res);
    saveAuth(res.token, res.user);
    const token = await getAuth();
    console.log(token);

    if (token) {
      navigate('/', { replace: true });
    }
  };

  const handleRoute = () => {
    navigate('/login', { replace: true });
  };
  return (
    <div className="Signup-container">
      <div className="Signup-img"> </div>
      <div className="Signup">
        <div className="Sign-description">
          <h1>Welcome to Aurem</h1>
          <p>Your Personal Music Record Sleeve</p>
        </div>
        <div className="Signup-form">
          <h3>Sign-Up and Enjoy</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <p>Name</p>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
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
            <button type="submit">Sign up</button>
          </form>
          <div>
            Already using Aurem?<h4 onClick={() => handleRoute()}>Log-in</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
