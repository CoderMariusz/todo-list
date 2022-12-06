import Link from 'next/link';
import React from 'react';
import '../styles/header/header.css';
import { useAuth } from './AuthContext';

function Header() {
  const { currentUser } = useAuth();

  return (
    <header>
      <h1>ToDo List</h1>
      <nav>
        <Link href='/'>Home Page</Link>
        <Link href='/todos'>ToDos</Link>
        {currentUser ? <Link href='/myAccount'>My Account</Link> : null}
      </nav>
    </header>
  );
}

export default Header;
