import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-[#0f1520] dark:to-slate-800 
      transition-colors duration-300">
      <Navbar />
      <div className="mycontainer pt-20">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">Privacy Policy</h1>
        {/* Add privacy policy content here */}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 