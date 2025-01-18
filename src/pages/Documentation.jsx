import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-[#0f1520] dark:to-slate-800 
      transition-colors duration-300">
      <Navbar />
      <div className="mycontainer pt-20">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Documentation</h1>
        <div className="prose dark:prose-invert">
          <h2>Getting Started</h2>
          <p>Learn how to use Pass-X effectively for managing your passwords.</p>
          
          <h2>Features</h2>
          <ul>
            <li>Secure Password Storage</li>
            <li>Password Generator</li>
            <li>Cross-Platform Sync</li>
            <li>Two-Factor Authentication</li>
          </ul>
          
          <h2>API Reference</h2>
          <p>Detailed documentation for developers integrating with Pass-X.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation; 