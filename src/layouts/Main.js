import React from 'react';
import Footer from '../components/Footer';
import Navabr from '../components/Navbar';

export default function Main({ auth, children }) {
  return (
    <>
      <Navabr auth={auth} />
      <div className="main px-10 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
