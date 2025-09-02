import React from 'react';

const Login = () => {
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
          <form action="">
            <label htmlFor="email">
              <p>Email</p>
              <input type="text" name="email" id="email" required />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input type="text" name="password" id="password" required />
            </label>
            <button type="submit"> Login</button>
          </form>
          <p>
            {' '}
            You are new to Aurem? <h5>Sign-up</h5>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
