import logo from './../images/logo.svg';
import menu_icon from './../images/menu-icon.svg'
import React, { useState, useEffect } from 'react';


function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(0);

    let showMobileMenu = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 690) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
    };
  
    useEffect(() => {
        showMobileMenu();
      window.addEventListener("resize", showMobileMenu);      
      console.log("use effect")
      return () => window.removeEventListener("resize", showMobileMenu);
     
    }, []);

    return <>
 
            <nav className='container navbar'>
               
                    <a className='logo'><img src={logo} ></img></a>
                    {isVisible && (
                    <ul className='navbar-list'>
                    <div className='navbar-content'>
                    <li>
                        <a className='navbar-link'>Features</a>
                    </li>
                    <li>
                        <a className='navbar-link'>Pricing</a>
                    </li>
                    <li>
                        <a className='navbar-link'>Resources</a>
                    </li>
                </div>
                <div className='navbar-content'>
                <li>
                        <a className='navbar-link'>Login</a>
                    </li>     
                    <li>
                        <button className='btn-primary'>Sign up</button>
                    </li>
                </div>
           
                </ul> )}
                <a className='menu-icon'
                onClick={() => setIsVisible(!isVisible)}>
     
                    <img height={36} src={menu_icon}>                       
                    </img></a>
                    
            </nav>
        </>
}

export default Navbar;