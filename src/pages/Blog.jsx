import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "Password Security Best Practices",
      date: "2024-01-15",
      excerpt: "Learn how to create and maintain secure passwords...",
    },
    {
      title: "Why Password Managers Matter",
      date: "2024-01-10",
      excerpt: "Understanding the importance of password managers...",
    },
    // Add more blog posts here
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-[#0f1520] dark:to-slate-800 
      transition-colors duration-300">
      <Navbar />
      <div className="mycontainer pt-20">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{post.title}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{post.date}</p>
              <p className="text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              <a href="#" className="text-green-500 hover:text-green-600 mt-4 inline-block">Read more →</a>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog; 