import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faSquareGithub, faLinkedin ,
   faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from 'react-router-dom'
import { NavLink, useLocation } from 'react-router-dom'




export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const Navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e, source) => {
    //  e.preventDefault();

    if(location.pathname === "/Projects") {
      // Scroll smoothly if already on project page
      document.getElementById("contactForm")?.scrollIntoView({ behavior: "smooth"});

    } else {
      // Navigate to Projects Page first, then scroll after the page loadss
      Navigate("/Projects", { state: {scrollToContact: true}});  // Pass state

    }
  }



  return (
    <div className="">
      <header className="md:py-4 py-3 px-4  md:px-16 fixed z-50 w-full bg-gray-300  ">
            <nav className="flex md:flex-row items-center justify-between">

                {/* Menu Button for Mobile */}
                <button className="text-darkbg md:hidden"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size='xl'/>
                </button>


                  {/* NavLinks */}
                <ul className={`${ 
                    menuOpen? "flex flex-col w-full  absolute p-6 top-20 left-0  " 
                    : "hidden"


                  } md:flex items-center md:space-x-8 md:w-auto`} >

                    <div className="flex flex-col md:flex-row items-center  bg-gray-300
                     rounded-lg md:space-y-0 md:space-x-12 space-y-6 bg-opacity-80 w-[250px] 
                       md:py-0 py-8 backdrop-blur-md">
                        <li className="relative group" >
                          <NavLink className="text-darkbg font-bold relative" 
                          onClick={() => setMenuOpen(false)} to="/Home">
                            Home
                            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full
                             bg-orangebg scale-x-0
                             group-hover:scale-x-100 transition-transform duration-300 
                             ease-in-out origin-left "></span>
                          </NavLink>
                        </li>   

                        <li className="relative group">
                          <NavLink className="text-darkbg font-bold relative"
                          onClick={() => setMenuOpen(false)} to="/About">
                            About
                            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full
                             bg-orangebg scale-x-0
                             group-hover:scale-x-100 transition-transform duration-300
                              ease-in-out origin-left "></span>
                          </NavLink>
                        </li>    

                        <li className="relative group">
                          <NavLink className="text-darkbg font-bold relative"
                          onClick={() => setMenuOpen(false)} to="/Projects">
                            Projects
                            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-orangebg scale-x-0
                             group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left "></span>
                          </NavLink>
                        </li>             
                       

                        <li className="relative group">
                           
                          <Link 
                           className="text-darkbg font-bold relative"
                           onClick={(e) => { setMenuOpen(false); handleContactClick(e, "contact")}} to="/Projects#contact" >
                            Contact
                            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-orangebg scale-x-0
                             group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left "></span>
                          </Link>
                        </li>   

                        {/* Social Container */}
                        <div className="flex md:flex-row md:pl-[32rem] space-x-4 items-center">
                            {/* Socials */}
                            <div className="md:flex md:space-x-6 space-x-4">
                              <a href="https://github.com/DefcValentino" 
                              target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faSquareGithub} size="xl" />
                              </a>
                              <a href="https://www.linkedin.com/in/valentineokonkwo" 
                              target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                              </a>
                              <a href="https://x.com/Defcvalentino?t=iE8Rxr6eApckLKXdmjYpPQ&s=09"
                               target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} size="xl" />
                              </a>
                              <a href="https://www.instagram.com/dev_valentino?igsh=ajg1MTIzdzRwa2Y=" 
                                target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="xl" />   
                              </a>
                            </div>   
                        </div> 
                      </div>  
                </ul>

                  <p className="">
                    <button className="bg-orangebg hover:opacity-80 border-darkbg 
                    shadow-md px-5 py-2 rounded-lg text-white   font-bold"
                    onClick={(e) => { handleContactClick(e, "hire")}}
                    
                     >Hire Me
                     </button>
                  </p>
            </nav>
        </header>
       
    </div>
  )
}
