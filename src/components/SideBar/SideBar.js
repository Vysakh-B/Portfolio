import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import './SideBar.css'


  
const SideBar = ()=> {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to handle screen size changes
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 1023); // Example breakpoint for small screens
  };

  useEffect(() => {
    // Check the screen size on component mount
    checkScreenSize();

    // Add event listener to update on window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleSidebar = () => {
    if (isSmallScreen) {
      setIsSidebarVisible(!isSidebarVisible);
    }
  };

  const hideSidebar = () => {
    if (isSmallScreen) {
      setIsSidebarVisible(false);
    }
  };
    return (
      <>
      <div className={`sideBar__container ${isSidebarVisible ? 'visible' : ''}`}>
        <div className='group'>
        <div className='profile'>  
        </div>
        <div className='name'>Vysakh B</div>
        <div className='logos'>
            <div className='logo'><a href='https://www.facebook.com/vysakh.kannan.5680?mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a></div>
            <div className='logo'><a href='https://www.instagram.com/ysaaaaaak/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a></div>
            <div className='logo'><a href='https://www.linkedin.com/in/vysakh-b-1703b9246/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></div>
            <div className='logo'><a href='https://github.com/Vysakh-B' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></div> 
        </div>
        </div>
        <div className='links'>
            <li onClick={hideSidebar}><i className="fa-solid fa-house-chimney"></i><a href="#home">HOME</a></li>
            <li onClick={hideSidebar}><i className="fa-solid fa-address-card"></i><a href="#about">ABOUT</a></li>
            <li onClick={hideSidebar}><i className="fa-solid fa-laptop"></i><a href="#projects">PROJECTS</a></li>
            <li onClick={hideSidebar}><i className="fa-solid fa-server"></i><a href="#services">SERVICES</a></li>
            <li onClick={hideSidebar}><i className="fa-solid fa-terminal"></i><a href="#skills">SKILLS</a></li>
            <li onClick={hideSidebar}><i className="fa-solid fa-address-book"></i><a href="#contact">CONTACTS</a></li>
        </div>
      </div>
      <div className='topup'><a href="#home"><i class="fa-solid fa-arrow-up"></i></a></div>
      {isSmallScreen && (
        <div className='menue' onClick={toggleSidebar}>
                  <i className={isSidebarVisible ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>

        </div>
      )}
      
      </>
    )
  }
  export default SideBar;

