import logo from './../images/logo.svg';
import menu_icon from './../images/menu-icon.svg'
import React, { useState, useLayoutEffect } from 'react';


function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    let showMobileMenu = () => {
      if (window.innerWidth < 690) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
    };
  
    useLayoutEffect(() => {
        showMobileMenu();
        window.addEventListener("resize", showMobileMenu);      
        return () => window.removeEventListener("resize", showMobileMenu);
    }, []);

    return <>
            <nav className='container navbar'>
               
                    <a className='logo' href='/'><img src={logo} alt='Shortly logo'></img></a>
                    {isVisible && (
                    <ul className='navbar-list'>
                    <div className='navbar-content'>
                    <li>
                        <a href='/' className='navbar-link'>Features</a>
                    </li>
                    <li>
                        <a href='/' className='navbar-link'>Pricing</a>
                    </li>
                    <li>
                        <a href='/' className='navbar-link'>Resources</a>
                    </li>
                </div>
                <div className='navbar-content'>
                <li>
                        <a href='/' className='navbar-link'>Login</a>
                    </li>     
                    <li>
                        <button className='btn-primary'>Sign up</button>
                    </li>
                </div>
           
                </ul> )}
                <a className='menu-icon' href='/'
                onClick={() => setIsVisible(!isVisible)}>
     
                    <img height={36} src={menu_icon} alt='Shortly logo'>                       
                    </img></a>                   
            </nav>
        </>
}

export default Navbar;