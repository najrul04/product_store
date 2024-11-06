import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import CreatePage from './components/Pages/CreatePage/CreatePage';
import { useState, useEffect } from 'react';

function App() {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);
  

  // Toggle dark mode
  const toggleColorMode = () => setDarkMode(!darkMode);

  // Apply dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='h-screen dark:bg-gray-900 dark:text-white'>
      {/* Pass toggleColorMode and darkMode to Navbar */}
      <Navbar toggleColorMode={toggleColorMode} darkMode={darkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpage' element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
