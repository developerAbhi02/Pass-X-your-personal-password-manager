import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Services = () => {
  const services = [
    {
      title: "Password Management",
      description: "Securely store and manage all your passwords in one place with military-grade encryption.",
      icon: "🔐"
    },
    {
      title: "Password Generator",
      description: "Generate strong, unique passwords that are impossible to crack.",
      icon: "⚡"
    },
    {
      title: "Cross-Platform Sync",
      description: "Access your passwords across all your devices seamlessly.",
      icon: "🔄"
    },
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your password vault.",
      icon: "🛡️"
    },
    {
      title: "Secure Notes",
      description: "Store sensitive information beyond just passwords.",
      icon: "📝"
    },
    {
      title: "Security Alerts",
      description: "Get notified about potential security breaches and weak passwords.",
      icon: "🚨"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="mycontainer">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
            Our Services
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services; 