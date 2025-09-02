import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setpassword] = useState<string>('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
    };
    console.log('form:', formData);
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
                type="text"
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
                type="text"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Sign up</button>
          </form>
          <p>
            Already using Aurem?<h4>Log-in</h4>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
