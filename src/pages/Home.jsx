import React from 'react';
import Navbar from '../components/navbar';
import Manager from '../components/manager';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Manager />
      </main>
      <Footer />
    </>
  );
};

export default Home; 