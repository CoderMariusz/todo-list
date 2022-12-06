import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLogin, setLogin] = useState(true);

  const { login, signUp } = useAuth();

  const onChangeHandler = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };
  async function submitHandler(e) {
    e.preventDefault();
    setLogin(true);
    if (!email || !password) {
      setLogin(false);
      return setError('please Enter email and password');
    }
    if (isLogin) {
      try {
        setError(null);
        return await login(email, password);
      } catch (error) {
        setError('incorrect email or Password');
      }
    }

    await signUp(email, password).catch((err) => {
      setError(err.message);
    });
  }

  return (
    <div>
      <h2>Login</h2>
      <h3>{error}</h3>
      <form>
        <label htmlFor='email'>
          email:
          <input
            type='email'
            name='email'
            onChange={onChangeHandler}
          />
        </label>
        <label htmlFor='password'>
          password:
          <input
            type='password'
            name='password'
            onChange={onChangeHandler}
          />
        </label>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}
