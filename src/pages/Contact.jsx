import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="mycontainer">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input 
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <textarea 
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
              <button className="w-full px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300">
                Send Message
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Get in Touch</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Have questions? We'd love to hear from you.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-400">Email: contact@pass-x.com</p>
                  <p className="text-slate-600 dark:text-slate-400">Phone: +1 (234) 567-8900</p>
                  <p className="text-slate-600 dark:text-slate-400">Address: 123 Security Street, Cyberspace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact; 