import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTablePasswords, setShowTablePasswords] = useState({});
  const [savedPasswords, setSavedPasswords] = useState(() => {
    return JSON.parse(localStorage.getItem("passwords") || "[]");
  });
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [copyStatus, setCopyStatus] = useState({});
  const [deletingIds, setDeletingIds] = useState(new Set());
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null });

  // Common toast configuration
  const toastConfig = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    style: {
      marginTop: '1rem', // Reduced from 2.5rem to 1rem
      borderRadius: '0.5rem',
      background: 'rgba(30, 41, 59, 0.95)',
      backdropFilter: 'blur(8px)',
    }
  };

  const copyToClipboard = async (text, id, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ id, type, copied: true });
      
      const copyMessages = {
        url: "URL copied! Ready to paste wherever you need it! 🔗",
        username: "Username copied! It's ready for action! 👤",
        password: "Password copied! Handle with care, it's precious! 🤫"
      };
      
      toast.success(copyMessages[type], toastConfig);

      setTimeout(() => {
        setCopyStatus({});
      }, 2000);
    } catch (err) {
      toast.error("Whoops! The copy machine seems to be on coffee break. ☕", toastConfig);
    }
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setEditId(item.id);
    setUrl(item.url);
    setUsername(item.username);
    setPassword(item.password);

    toast.info("Ready to update! Make your changes and save. ✏️", toastConfig);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check for duplicate entries
  const isDuplicate = (newEntry) => {
    return savedPasswords.some(item => 
      item.url.toLowerCase() === newEntry.url.toLowerCase() &&
      item.username.toLowerCase() === newEntry.username.toLowerCase()
    );
  };

  // Modified SavePassword function
  const SavePassword = () => {
    if (!url || !username || !password) {
      toast.error("Oops! Looks like some fields are playing hide and seek. 🙈", toastConfig);
      return;
    }

    if (editMode) {
      // For edit mode, check if the updated data conflicts with other entries
      const otherPasswords = savedPasswords.filter(item => item.id !== editId);
      const updatedPassword = { url, username, password };
      
      if (isDuplicate(updatedPassword) && otherPasswords.some(item => 
        item.url.toLowerCase() === url.toLowerCase() &&
        item.username.toLowerCase() === username.toLowerCase()
      )) {
        toast.warning("This combination of URL and username already exists! 🤔", toastConfig);
        return;
      }

      // Update existing password
      const updatedPasswords = savedPasswords.map(item => 
        item.id === editId 
          ? { ...item, url, username, password }
          : item
      );

      setSavedPasswords(updatedPasswords);
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
      
      toast.success("Password updated successfully! 🔄", toastConfig);
      
      setEditMode(false);
      setEditId(null);
    } else {
      // For new entries
      const newPassword = {
        id: uuidv4(),
        url,
        username,
        password,
        createdAt: new Date().toISOString(),
      };

      // Check for duplicates before saving
      if (isDuplicate(newPassword)) {
        toast.warning("Whoops! This URL and username combination is already saved! 🔄", {
          ...toastConfig,
          icon: '⚠️',
          style: {
            ...toastConfig.style,
            borderLeft: '4px solid #f59e0b', // Amber color for warnings
          }
        });
        return;
      }

      setSavedPasswords(prev => [...prev, newPassword]);
      const existingPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
      localStorage.setItem('passwords', JSON.stringify([...existingPasswords, newPassword]));
      
      toast.success("Password safely tucked away in the vault! 🔐", toastConfig);
    }

    // Clear fields
    setUrl('');
    setUsername('');
    setPassword('');
  };

  const initiateDelete = (id) => {
    setDeleteConfirm({ show: true, id });
  };

  const handleDelete = async (id) => {
    try {
      setDeletingIds(prev => new Set([...prev, id]));
      setDeleteConfirm({ show: false, id: null }); // Hide dialog
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setSavedPasswords(prev => prev.filter(item => item.id !== id));
      
      const storedPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
      const updatedPasswords = storedPasswords.filter(pass => pass.id !== id);
      localStorage.setItem('passwords', JSON.stringify(updatedPasswords));

      toast.success("Poof! That password has been sent into the digital void. 👋", toastConfig);

    } catch (error) {
      console.error('Error deleting password:', error);
      setDeletingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
      toast.error("Houston, we have a problem! Delete mission failed. 🚀", toastConfig);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirm({ show: false, id: null });
  };

  const togglePasswordVisibility = (id) => {
    setShowTablePasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    
    if (!showTablePasswords[id]) {
      toast.success("Peek-a-boo! Password revealed. 👀", toastConfig);
    } else {
      toast.success("Password hidden faster than a ninja! 🥷", toastConfig);
    }
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      toast.error("That password is shorter than a TikTok video! Make it longer. 📏", toastConfig);
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Your password needs some capital letters. Give it a promotion! 📈", toastConfig);
      return false;
    }
    if (!/[0-9]/.test(password)) {
      toast.error("Add some numbers! Even passwords need to do math sometimes. 🔢", toastConfig);
      return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error("Throw in some special characters! Make it feel fancy! ✨", toastConfig);
      return false;
    }
    toast.success("Now that's what I call a strong password! Fort Knox would be jealous! 💪", toastConfig);
    return true;
  };

  const checkEmptyFields = () => {
    if (!url) {
      toast.error("The URL field is as empty as my coffee cup! ☕", toastConfig);
      return false;
    }
    if (!username) {
      toast.error("Username field is looking lonely. Give it some company! 🫂", toastConfig);
      return false;
    }
    if (!password) {
      toast.error("A password field without a password is like a pizza without cheese! 🍕", toastConfig);
      return false;
    }
    return true;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      SavePassword();
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditId(null);
    setUrl('');
    setUsername('');
    setPassword('');
    toast.info("Edit cancelled! No changes were made. 😌", toastConfig);
  };

  useEffect(() => {
    const loadPasswords = () => {
      try {
        const storedPasswords = JSON.parse(localStorage.getItem('passwords') || '[]');
        
        const validatedPasswords = storedPasswords.map(pass => {
          if (!pass.id || typeof pass.id === 'number') {
            return {
              ...pass,
              id: uuidv4(),
              createdAt: pass.createdAt || new Date().toISOString()
            };
          }
          return pass;
        });

        if (JSON.stringify(storedPasswords) !== JSON.stringify(validatedPasswords)) {
          localStorage.setItem('passwords', JSON.stringify(validatedPasswords));
        }

        setSavedPasswords(validatedPasswords);
      } catch (error) {
        console.error('Error loading passwords:', error);
        toast.error("Had trouble loading your passwords. Please refresh! 🔄", toastConfig);
      }
    };

    loadPasswords();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 
      dark:from-[#0f1520] dark:to-slate-800 
      dark:bg-gradient-to-b py-8 transition-colors duration-300">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          marginTop: '1rem', // Reduced from 2.5rem to 1rem
        }}
        toastStyle={{
          borderRadius: '0.5rem',
          background: 'rgba(30, 41, 59, 0.95)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      />
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white transition-colors duration-300">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-slate-500">-</span>
          <span className="text-green-700">X/&gt;</span>
        </h1>
        <p className="text-slate-600 dark:text-green-400 text-center text-lg transition-colors duration-300">
          Your own Password Manager
        </p>

        <div className="text-slate-800 dark:text-white flex flex-col p-2 md:p-4 transition-colors duration-300">
          <input 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            className="rounded-full border border-green-700 p-2 w-full py-0.5 
              text-slate-700 dark:text-green-400 text-center text-sm md:text-base 
              placeholder:text-center placeholder:text-gray-500
              bg-white dark:bg-slate-800 transition-colors duration-300" 
            type="text" 
            placeholder="Enter website URL" 
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2">
            <input 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="rounded-full border border-green-700 p-2 w-full py-0.5 
                text-slate-700 dark:text-green-400 text-center text-sm md:text-base 
                placeholder:text-center placeholder:text-gray-500
                bg-white dark:bg-slate-800 transition-colors duration-300" 
              type="text" 
              placeholder="Enter Username" 
            />
            <div className="relative w-full">
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="rounded-full border border-green-700 p-2 w-full py-0.5 
                  text-slate-700 dark:text-green-400 text-center placeholder:text-center placeholder:text-gray-500
                  bg-white dark:bg-slate-800 transition-colors duration-300" 
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password" 
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 hover:text-green-900 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-5 h-5 transform transition-transform duration-300 hover:rotate-6">
                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-5 h-5 transform transition-transform duration-300 hover:rotate-6">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className="flex gap-2 justify-center mt-4">
            <button 
              onClick={SavePassword} 
              className="flex justify-center items-center gap-2 bg-green-700 hover:bg-green-600 text-white p-2 rounded-full w-fit group transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 transform group-hover:scale-110 transition-all duration-300"
              >
                {editMode ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                )}
              </svg>
              <span className="font-medium group-hover:tracking-wider transition-all duration-300">
                {editMode ? 'Update Password' : 'Save Password'}
              </span>
            </button>

            {editMode && (
              <button 
                onClick={handleCancel}
                className="flex justify-center items-center gap-2 bg-gray-500 hover:bg-gray-400 text-white p-2 rounded-full w-fit group transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-5 h-5 transform group-hover:scale-110 transition-all duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-medium group-hover:tracking-wider transition-all duration-300">
                  Cancel Edit
                </span>
              </button>
            )}
          </div>
        </div>

        <div className="password">
          <h1 className="text-2xl font-bold text-center text-green-700 mt-8 mb-4">Saved Passwords</h1>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg table-fixed transition-colors duration-300">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-6 py-3 text-left w-[30%]">Website</th>
                  <th className="px-6 py-3 text-left w-[25%]">Username</th>
                  <th className="px-6 py-3 text-left w-[35%]">Password</th>
                  <th className="px-6 py-3 text-center w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {savedPasswords.map((item) => (
                  <tr 
                    key={item.id} 
                    className={`border-b border-gray-200 dark:border-slate-700 
                      hover:bg-gray-50 dark:hover:bg-slate-700/50 
                      transition-all duration-300
                      ${deletingIds.has(item.id) ? 
                        'transform -translate-x-full opacity-0 h-0' : 
                        'transform translate-x-0 opacity-100'}`}
                  >
                    <td className="px-6 py-4 truncate">
                      <div className="flex items-center space-x-2">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" 
                           className="text-green-700 hover:text-green-900 hover:underline truncate block flex-1">
                          {item.url}
                        </a>
                        <button
                          onClick={() => copyToClipboard(item.url, item.id, 'url')}
                          className="p-1.5 rounded-full hover:bg-green-100 transition-all duration-300 group hover:scale-105 active:scale-95"
                          title="Copy URL"
                        >
                          {copyStatus.id === item.id && copyStatus.type === 'url' && copyStatus.copied ? (
                            <svg xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 text-green-600 transform transition-all duration-300 scale-110 rotate-6" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                            >
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 text-green-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 truncate">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-700 truncate flex-1">{item.username}</span>
                        <button
                          onClick={() => copyToClipboard(item.username, item.id, 'username')}
                          className="p-1.5 rounded-full hover:bg-green-100 transition-colors duration-200 group"
                          title="Copy Username"
                        >
                          {copyStatus.id === item.id && copyStatus.type === 'username' && copyStatus.copied ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 min-w-0 flex items-center space-x-2">
                          <span className="font-mono text-gray-700 truncate block">
                            {showTablePasswords[item.id] ? item.password : "••••••••"}
                          </span>
                          <button 
                            onClick={() => togglePasswordVisibility(item.id)}
                            className="text-green-700 hover:text-green-900 p-0.5 rounded-full hover:bg-green-50 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
                            title={showTablePasswords[item.id] ? "Hide Password" : "Show Password"}
                          >
                            {showTablePasswords[item.id] ? (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="w-4 h-4 transform transition-transform duration-300 hover:rotate-6">
                                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                                className="w-4 h-4 transform transition-transform duration-300 hover:rotate-6">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                          {showTablePasswords[item.id] && (
                            <button
                              onClick={() => copyToClipboard(item.password, item.id, 'password')}
                              className="p-1.5 rounded-full hover:bg-green-100 transition-colors duration-200 group"
                              title="Copy Password"
                            >
                              {copyStatus.id === item.id && copyStatus.type === 'password' && copyStatus.copied ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-110 active:scale-95 group"
                        title="Edit"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-5 h-5 transform group-hover:rotate-12 transition-all duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                      </button>
                      
                      <button 
                        onClick={() => initiateDelete(item.id)}
                        className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-all duration-300 hover:scale-110 active:scale-95 group"
                        title="Delete"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className="w-5 h-5 transform group-hover:rotate-12 transition-all duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 transition-colors duration-300">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full mx-4 transform transition-all scale-100 animate-fadeIn shadow-xl border border-gray-200 dark:border-slate-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Are you sure you want to delete this password? This action cannot be undone! 🤔
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                No, Keep it
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-200 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Yes, Delete it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add these styles to your global CSS or component
const styles = `
  @keyframes slideOut {
    0% {
      transform: translateX(0);
      opacity: 1;
      max-height: 100px;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
      max-height: 0;
    }
  }

  .deleted-row {
    animation: slideOut 0.3s ease-in-out forwards;
  }

  .Toastify__toast-container--top-right {
    top: 1rem !important;  /* Reduced from 2.5rem to 1rem */
  }

  .Toastify__toast {
    margin-bottom: 0.5rem !important;
  }

  .Toastify__toast:last-child {
    margin-bottom: 0 !important;
  }

  /* Add smooth transition for toasts */
  .Toastify__toast {
    transition: all 0.3s ease !important;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }
`;

export default Manager;
