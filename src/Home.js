import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import profilephoto from './assets/images/profilephoto.webp'
import fundifyonboard from './assets/images/fundifyonboard.jpg'
import atlas from './assets/images/atlas.png'
import { motion } from "framer-motion";



export const Home = () => {

    const Navigate = useNavigate();
    const location = useLocation();
    const [shouldScroll, setShouldScroll] = useState(false);

    
      const handleContactClick = (e) => {
        //  e.preventDefault();
    
        if(location.pathname === "/Projects") {
          // Scroll smoothly if already on project page
          document.getElementById("contactForm")?.scrollIntoView({ behavior: "smooth"});
    
        } else {
          setShouldScroll(true); // Mark that we need to scroll after navigation
          Navigate("/Projects");  //Navigate First
    
        }
    }

    useEffect(() => {
        if (shouldScroll && location.pathname === "/Projects") {
            setTimeout(() => {
                document.getElementById("contactForm")?.scrollIntoView({behavior:"smooth"})
                setShouldScroll(false); //Reset State
              }, 2000)
        }
    }, [shouldScroll, location])


  return (
    <div className="">
        <section id='Hero section' className="">
            
            {/* Home Container */}
            <div className="md:px-16 px-4 bg-darkbgtwo w-full md:h-screen">
                <motion.article 
                   initial={{ opacity: 0, y:50 }} 
                   animate={{ opacity: 1, y:0}}
                   transition={{ duration: 1, ease: "easeOut" }}

                 className="flex flex-col-reverse md:flex-row py-6 md:space-x-[15rem]
                     md:pt-44 pt-28 items-center md:justify-between ">
                    <div className="flex flex-col items-start space-y-4 text-gray-200 ">
                        
                        <div className="flex flex-col pt-8  items-start text-left justify-start">
                            <h1 className="text-lg md:text-xl">Hello👋</h1>
                            <h1 className="text-2xl md:text-3xl">I'm Valentine</h1>
                            <h1 className="text-3xl font-bold md:text-4xl">Frontend Developer</h1>

                            {/* Horizontal rectangle */}
                            <figure className="mt-3 flex flex-row border">
                                <div className="w-[4rem] md:w-[9rem] h-[3px]"></div>
                                <div className="w-[9rem] md:w-[14rem] h-[3px] bg-orangebg"></div>
                                <div className="w-[4rem] md:w-[9rem] h-[3px]"></div>
                            </figure>

                            {/* Home Caption */}
                            <h1 className="md:text-lg mt-4">
                                From Imagination to Execution.
                                Weaving code and creativity into seamless digital experiences 
                                that captivate, inspire and engage.
                            </h1>
                        </div>
                       
                         {/* Home Buttons */}
                        <div className="flex flex-row space-x-4 md:space-x-12 ">
                        <p className="py-4 px-8 md:px-12 md:mt-8 rounded-md md:text-xl
                            cursor-pointer border-2 hover:bg-orangebg border-orangebg bg-darkbgtwo">
                            <a href="/myresume.pdf" download>
                             My Resume
                            </a>
                        </p>
                            
                        <p className="py-4 px-8 md:px-12 md:mt-8 md:text-xl hover:lightbg
                            bg-orangebg hover:opacity-60
                            cursor-pointer rounded-md ">
                            <a href='/Projects#contactForm'
                            onClick= { handleContactClick }>
                            Contact Me</a></p>
                        </div>
                    </div>


                        {/* Profile Photo */}
                    <figure className="md:px-12 ">
                        <div className="bg-orange-gradient rounded-full p-3">
                            <img className="border-4 w-[200px] h-[200px] lg:w-[550px] md:h-[300px]
                            rounded-full" src={profilephoto}
                            alt="" loading='lazy' 
                            /> 
                        </div>
                    </figure>
                </motion.article>
            </div>
        </section>




        {/* Recent Projects Section */}
        <section id='Recent Projects' 
        className='pt-20 bg-darkbg space-y-8 px-4 text-gray-200'>
            <h1 className="bg-orange-gradient bg-clip-text text-transparent
              font-extrabold text-2xl md:text-4xl py-3">Recent Projects</h1>

            <div className='flex flex-col space-y-16 items-center'>

               {/* Card Wrapper */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ amount: 0.2 }}

                 className=" md:w-[1100px] border rounded-lg p-2 border-orangebg
                  transition-transform duration-300 hover:translate-y-[-5px]">
                    {/* Project Card 1*/}
                    <div className="md:p-8 p-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between
                        items-center bg-darkbgtwo rounded-lg">
                        
                        {/* Project image */}
                        <fig className="md:w-[500px] md:h-[300px]">
                            <img className="h-full w-full object-cover rounded-lg
                                transition-transform duration-300 hover:scale-105" 
                            src={fundifyonboard} alt=".."/>
                        </fig>
        
                        {/* project description */}
                        <article className="text-left space-y-3 md:w-[450px]">
                            <p className="text-orangebg text-2xl
                            bg-orange-gradient bg-clip-text text-transparent">Featured Project</p>
                            <h1 className="text-2xl md:text-3xl hover:underline"><a href="./">Fundify App</a></h1>
                            <p>
                                Fundify is a fintech app built with HTML, CSS, and JavaScript, featuring secure PIN
                                authentication and dynamic account search to deliver a seamless, 
                                user-friendly experience for managing financial transactions
                            </p>
            
                            <div className="flex items-center space-x-6 md:flex-row">
                                <a href="https://github.com/DefcValentino/Fundify-App.git">
                                <i class="devicon-github-original text-3xl md:text-5xl"></i></a>
                                <p className="cursor-pointer py-2 px-6 bg-gray-200
                                hover:bg-darkbgtwo hover:text-gray-200
                                hover:border md:text-lg text-black rounded-lg">
                                <a href="https://fundify-app.vercel.app/" alt="..">
                                Visit Project
                                </a></p>
                            </div>
                        </article>
                    </div>
                </motion.div>



                {/* Card Wrapper */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ amount: 0.2 }}

                  className=" md:w-[1100px] border rounded-lg p-2 border-orangebg
                  transition-transform duration-300 hover:translate-y-[-5px]">
                    {/* Project Card 2*/}
                    <div className="md:p-8 p-6 flex flex-col space-y-4 md:space-y-0 
                      md:flex-row justify-between
                      items-center bg-darkbgtwo rounded-lg">
                    
                        {/* Project image */}
                        <fig className="md:w-[500px] md:h-[300px]">
                            <img className="h-full w-full object-cover rounded-lg
                            transition-transform duration-300 hover:scale-105" 
                            src={atlas} alt=".."/>
                        </fig>
            
                        {/* project description */}
                        <article className="text-left space-y-3 md:w-[450px]">
                            <p className="text-orangebg text-2xl bg-orange-gradient 
                               bg-clip-text text-transparent">
                               Featured Project
                            </p>
                            <h1 className="text-2xl md:text-3xl hover:underline"><a href="./">
                              AtlasVest Website</a>
                            </h1>
                            <p>
                                A micro-investment platform built with HTML, CSS, JavaScript, and Firebase, 
                                featuring secure user authentication as a foundation for enabling accessible 
                                and seamless financial transactions for users.
                            </p>
            
                            <div className="flex items-center space-x-6 md:flex-row">
                                <a href="https://github.com/DefcValentino/atlastvest-app.git">
                                <i class="devicon-github-original text-3xl md:text-5xl"></i></a>
                                <p className="cursor-pointer py-2 px-6 bg-gray-200
                                    hover:bg-darkbgtwo hover:text-gray-200
                                    hover:border md:text-lg text-black rounded-lg">
                                    <a href="https://defcvalentino.github.io/atlastvest-app/" alt="..">
                                        Visit Project
                                    </a>
                                </p>
                            </div>
                        </article>
                    </div>
                </motion.div>


                {/* View All Buttton */}
                <div>
                   <button className="cursor-pointer py-2 px-6 mb-8 bg-orangebg
                    hover:opacity-60 md:text-lg
                    text-gray-200 rounded-lg"
                    onClick={() => Navigate("/projects", {state: { scrollToProjects: true}})}
                    >
                        View All Projects
                        {/* <NavLink className=""
                            to="/Projects">
                                                   
                        </NavLink> */}
                    </button>
                </div>
        
                
            </div>
        </section>
    </div> 
  )
}
