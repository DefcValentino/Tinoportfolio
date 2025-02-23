import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import profilephoto from './assets/images/profilephoto.webp'




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
        <section className="">
            {/* Home Container */}
            <div className="md:px-16 px-4 bg-darkbg w-full md:h-svh">
                <article className="flex flex-col-reverse md:flex-row py-6 md:space-x-[15rem]
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
                            cursor-pointer border-2 hover:bg-orangebg border-orangebg bg-darkbg">
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
                            <img className="border-4 w-[200px] h-[200px] md:w-[550px] md:h-[300px]
                            rounded-full" src={profilephoto}
                            alt="" loading='lazy' 
                            /> 
                        </div>
                    </figure>
                </article>
            </div>
        </section>
    </div> 
  )
}
