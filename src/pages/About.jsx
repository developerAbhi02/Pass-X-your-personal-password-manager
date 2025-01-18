import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="mycontainer">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
            About Pass-X
          </h1>
          {/* Add content here */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About; 