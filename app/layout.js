'use client';
import '../styles/globals.css';
import { AuthProvider } from './AuthContext';
import Header from './Header';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
