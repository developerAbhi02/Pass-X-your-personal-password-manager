import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-[#0f1520] dark:to-slate-800 
      transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Terms of Service</h1>
        <div className="prose dark:prose-invert">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing Pass-X, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Use License</h2>
          <p>We grant you a personal, non-transferable license to use Pass-X for password management.</p>
          
          <h2>3. Service Modifications</h2>
          <p>We reserve the right to modify or discontinue our service at any time.</p>
          
          <h2>4. User Obligations</h2>
          <p>You are responsible for maintaining the confidentiality of your account.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 