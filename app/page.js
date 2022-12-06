'use client';
import React from 'react';
import { useAuth } from './AuthContext';
import LoginForm from './LoginForm';

function Home() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      {!currentUser ? (
        <LoginForm />
      ) : (
        <button
          type='button'
          onClick={logout}
        >
          logOut
        </button>
      )}
    </div>
  );
}

export default Home;
