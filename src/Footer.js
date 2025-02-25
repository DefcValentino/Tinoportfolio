
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faSquareGithub, faLinkedin ,
   faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
  return (
    <div>
         <section>
            <hr/>
            <div className="flex flex-col pt-4 items-center space-y-8
             text-sm md:text-lg bg-darkbg text-gray-400 md:flex-col md:py-6 px-16 ">
              
              <div className='flex md:flex-row flex-col md:space-x-6
               space-y-8 md:space-y-0 '>
               <p>Built with passion 💡 by <a className="underline"
                 href="https://github.com/DefcValentino">Valentino</a>
                </p>
                <a className="underline" href="https://wa.me/2348168617798">
                 Have a Chat with me
                </a>
              </div>
               

               {/*Socials  */}
              <div className='flex flex-col items-center space-y-8'>
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

                <p>2025 &copy; All Right Reserved</p>
              </div>
            </div>
        </section>
    </div>
  )
}
