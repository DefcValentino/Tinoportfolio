
import { ContactForm } from './ContactForm';
import { useLocation } from 'react-router-dom';
import { useRef, useEffect} from "react";
// import { useNavigate } from 'react-router-dom'
import fundifyonboard from './assets/images/fundifyonboard.jpg'
import exquisite from './assets/images/exquisite.jpg'
import atlas from './assets/images/atlas.png'
import digiduka from './assets/images/digiduka.png'
import { motion } from "framer-motion";





export const Projects = () => {
  const location = useLocation();
  const contactRef = useRef(null);
  const projectRef = useRef(null);


  useEffect(() => {

    if (location.state?.scrollToProjects && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });

    }
      

    if (location.state?.scrollToContact) {
    
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100); // Delay to ensure navigation updates before scrolling
    }

  }, [location]);



  return (
    <div className="h-full px-8 md:px-16 w-full bg-darkbg overflow-hidden ">
      
      {/* Project Section */}
      <motion.section ref={projectRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }} // Animate into view
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}

       className="pt-24 space-y-8 text-gray-200">
       <h1  className="bg-orange-gradient bg-clip-text text-transparent
        font-extrabold text-2xl md:text-4xl py-3">Innovating with Purpose </h1>
        <div className="flex flex-col space-y-16 items-center">
        
          {/* Card Wrapper */}
          <div className=" md:w-[1100px] border rounded-lg p-2 border-orangebg
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
                  <p className="cursor-pointer py-2 px-6 bg-gray-200 hover:bg-darkbgtwo hover:text-gray-200
                   hover:border md:text-lg text-black rounded-lg"><a href="https://fundify-app.vercel.app/" alt="..">Visit Project</a></p>
                </div>
              </article>
            </div>
          </div>



          {/* Card Wrapper */}
          <motion.div 
            initial={{ opacity: 0, y:50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}

           className=" md:w-[1100px] border rounded-lg p-2 border-orangebg
           transition-transform duration-300 hover:translate-y-[-5px]">
            {/* Project Card 2*/}
            <div className="md:p-8 p-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between
             items-center bg-darkbgtwo rounded-lg">
              

              {/* Project image */}
              <fig className="md:w-[500px] md:h-[300px]">
                <img className="h-full w-full object-cover rounded-lg
                transition-transform duration-300 hover:scale-105" 
              src={atlas} alt=".."/>
              </fig>


              {/* project description */}
              <article className="text-left space-y-3 md:w-[450px]">
                <p className="text-orangebg text-2xl bg-orange-gradient bg-clip-text text-transparent
                ">Featured Project</p>
                <h1 className="text-2xl md:text-3xl hover:underline"><a href="./">AtlasVest Website</a></h1>
                <p>
                  A micro-investment platform built with HTML, CSS, JavaScript, and Firebase, 
                  featuring secure user authentication as a foundation for enabling accessible 
                  and seamless financial transactions for users.
                </p>

                <div className="flex items-center space-x-6 md:flex-row">
                  <a href="https://github.com/DefcValentino/atlastvest-app.git">
                  <i class="devicon-github-original text-3xl md:text-5xl"></i></a>
                  <p className="cursor-pointer py-2 px-6 bg-gray-200 hover:bg-darkbgtwo
                   hover:text-gray-200
                   hover:border md:text-lg text-black rounded-lg">
                    <a href="https://defcvalentino.github.io/atlastvest-app/" alt="..">
                      Visit Project
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </motion.div>



          {/* Card Wrapper */}
          <motion.div 
            initial={{ opacity: 0, y:50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}


            className="md:w-[1100px] border rounded-lg p-2 border-orangebg
           transition-transform duration-300 hover:translate-y-[-5px]">
            {/* Project Card 3*/}
            <div className="md:p-8 p-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between 
            items-center bg-darkbgtwo rounded-lg">
              
              {/* Project image */}
              <fig className="md:w-[500px] md:h-[300px]">
                <img className="h-full w-full object-cover rounded-lg
                transition-transform duration-300 hover:scale-105"
                 src={exquisite} alt=".."/>
              </fig>

              {/* project description */}
              <article className="text-left space-y-3 md:w-[450px]">
                <p className="text-orangebg text-2xl
                bg-orange-gradient bg-clip-text text-transparent">Featured Project</p>
                <h1 className="text-2xl md:text-3xl hover:underline"><a href="./">Exquisite Fash Website</a></h1>
                <p>
                  Exquisite Fash is a fashion brand website built with HTML, CSS, JavaScript, 
                  and Firebase, featuring a sleek design to showcase trendy collections while
                   providing users with an engaging and interactive browsing experience
                </p>

                <div className="flex items-center space-x-6 md:flex-row">
                  <a href="https://github.com/DefcValentino/Exquisite-Fash-Landing-Page.git">
                  <i class="devicon-github-original text-3xl md:text-5xl"></i></a>
                  <p className="cursor-pointer py-2 px-6 bg-gray-200 hover:bg-darkbgtwo hover:text-gray-200
                   hover:border md:text-lg text-black rounded-lg">
                    <a href="https://exquisite-fash-landing-page.vercel.app/" alt="..">Visit Project</a></p>
                    
                </div>
              </article>
            </div>
          </motion.div>



          {/* Card Wrapper */}
          <motion.div 
            initial={{ opacity: 0, y:50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}

            
            className=" md:w-[1100px] border rounded-lg p-2 border-orangebg 
            transition-transform duration-300 hover:translate-y-[-5px]">
            {/* Project Card 4*/}
            <div className="md:p-8 p-6 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between
             items-center bg-darkbgtwo rounded-lg">
              
              {/* Project image */}
              <fig className="md:w-[500px] md:h-[300px]">
                <img className="h-full w-full object-cover rounded-lg
                transition-transform duration-300 hover:scale-105"
                 src={digiduka} alt=".."/>
              </fig>

              {/* project description */}
              <article className="text-left space-y-3 md:w-[450px]">
                <p className="text-orangebg text-2xl
                bg-orange-gradient bg-clip-text text-transparent">Featured Project</p>
                <h1 className="text-2xl md:text-3xl hover:underline"><a href="./">Digiduka Website</a></h1>
                <p>
                  A responsive landing page for DigiDuka, a platform helping market vendors
                   gain social media literacy through subscription plans. Built with Tailwind CSS 
                   and JavaScript, it showcases my frontend skills and ability to collaborate 
                   effectively with designers to bring ideas to life
                </p>

                <div className="flex items-center space-x-6 md:flex-row">
                  <a href="https://github.com/DefcValentino/DigiDuka.git">
                  <i class="devicon-github-original text-3xl md:text-5xl"></i></a>
                  <p className="cursor-pointer py-2 px-6 bg-gray-200 hover:bg-darkbgtwo
                   hover:text-gray-200
                   hover:border md:text-lg text-black rounded-lg">
                    <a href='https://defcvalentino.github.io/DigiDuka/'>Visit Project</a></p>
                </div>
              </article>
            </div>
          </motion.div>


        </div>

      </motion.section>


      {/* Contact Form */}
      <motion.section ref={contactRef} id="contactForm" 
        initial={{ opacity: 0, y:50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}

      className=" pt-24 space-y-8 text-gray-200">
        <ContactForm/>
      </motion.section>
    </div>
  );
};
