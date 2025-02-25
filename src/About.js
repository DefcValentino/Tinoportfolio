import React from 'react'
import standpic from './assets/images/standpic.webp'
import award from './assets/images/award.jpg'
import { motion } from "framer-motion";




export const About = () => {
  return (
    <div className="h-full px-8 md:px-16 w-full bg-darkbg overflow-hidden ">
          {/* About me Section */}
        <motion.section 
            initial={{ opacity: 0, y:50 }} 
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 1, ease: "easeOut" }}

           className="">
            <div className="pt-24 space-y-8">
              <h1 className="text-gray-200 font-extrabold 
              text-2xl md:text-4xl"> 
              <span className="bg-orange-gradient bg-clip-text text-transparent">Unveiling My Journey</span>
               <br/>Passion, Code and Impact.</h1>
            
              
              <article className="flex md:flex-row flex-col-reverse md:justify-between items-center">
                  
                  <div className="text-gray-200 md:w-[500px] pt-12 text-left">
                    <div className="flex flex-row text-left items-center space-x-2">
                      <h2 className="font-bold text-lg md:text-xl 
                      bg-orange-gradient bg-clip-text text-transparent">ABOUT ME</h2>
                      <hr className="w-40 bg-lightbg"/>
                    </div>
                   
                   <div className="flex flex-col ">
                       <p className="pt-4  md:text-lg">
                          I’m Valentine, a frontend developer driven by a passion for crafting seamless, scalable,
                          and user-centered web experiences. My journey in the field has equipped me with the skills
                          to design and build intuitive interfaces that not only captivate visually but deliver 
                          flawless functionality.
                        </p>

                        <p className="pt-4  md:text-lg">
                          Fueled by a commitment to innovation, I aim to create solutions that make a meaningful 
                          impact transforming ideas into tools that inspire and improve lives.
                          Beyond coding, I’m an avid learner and explorer. 
                        </p>

                        <p className="pt-4 md:text-lg">
                          Beyond coding, I’m an avid learner and explorer. You’ll often find me diving into 
                          thought-provoking books, discovering new places, sharpening my focus with a game of table 
                          tennis, or dancing to reset and recharge. For me, it’s all about balance, growth, and embracing 
                          challenges both in technology and in life.
                        </p>
                   </div>
                  </div>

                    {/* About Me Image */}
                  <figure className="border rounded-lg "> 
                    <div className="p-2 w-[300px] h-[500px]  ">
                      <img className="w-full h-full object-cover rounded-lg"
                       src={standpic} alt=""/>
                    </div>
                  </figure>
              </article>
            </div>
        </motion.section>


        {/* Skills section */}
        <motion.section className="pt-28 md:pt-40 space-y-8"
            initial={{ opacity: 0, y:50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
        >

          <article className="text-gray-200 md:px-12">
            <h1 className="bg-orange-gradient bg-clip-text text-transparent p-2
             font-bold text-2xl md:text-4xl">Technologies I Use</h1>
            <p className="pt-6 md:text-lg">These technologies form the backbone of my expertise, meticulously honed 
              through hands-on projects, real-world problem-solving, and a relentless drive 
              for growth. Each skill reflects countless hours of practice, experimentation, 
              and learning, enabling me to craft innovative solutions that address real
              challenges.
            </p>
          </article>
          
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 text-gray-200 p-6">
            {/* skill 1 */}
            <figure className="rounded-lg border p-2  border-orangebg
              transition-transform duration-300 hover:translate-y-[-4px] group">
              <div className=" py-8 rounded-lg bg-darkbgtwo">
                <i class="devicon-javascript-plain colored text-5xl
                transition-transform duration-500 group-hover:rotate-[360deg] group-hover:transform"></i>
                <p className="md:text-lg ">JavaScript</p>
              </div>
            </figure>

            {/* skill 2 */}
            <figure className="rounded-lg border p-2  border-orangebg
              transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="py-8 rounded-lg bg-darkbgtwo"> 
               <i class="devicon-react-original colored text-5xl"></i>
                <p>React.Js</p>
              </div>
            </figure>

            {/* skill 4 */}
            <figure className="rounded-lg border p-2  border-orangebg
             transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="py-8 rounded-lg bg-darkbgtwo">
                <i class="devicon-tailwindcss-original colored text-5xl"></i>
                <p>Tailwind CSS</p>
              </div>
            </figure>

            {/* skill 5 */}
            <figure className="rounded-lg border p-2  border-orangebg
             transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="py-8 rounded-lg bg-darkbgtwo">    
               <i class="devicon-html5-plain colored text-5xl"></i>
                <p>HTML5</p>
              </div>
            </figure>

            {/* skill 6 */}
            <figure className="rounded-lg border p-2  border-orangebg
             transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="py-8 rounded-lg bg-darkbgtwo">
                <i class="devicon-css3-plain colored text-5xl"></i>
                <p>CSS3</p>
              </div>
            </figure>

            {/* skill 7 */}
            <figure className="rounded-lg border p-2  border-orangebg
            transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="py-8 rounded-lg bg-darkbgtwo">
                <i class="devicon-firebase-plain colored text-5xl"></i>
                <p>Firebase</p>
              </div>
            </figure>

            {/* skill 8 */}
            <figure className="rounded-lg border p-2  border-orangebg
             transition-transform duration-300 hover:translate-y-[-4px]">
              <div className="py-8 rounded-lg bg-darkbgtwo">
                <i class="devicon-git-plain colored text-5xl"></i>
                <p>Git</p>
              </div>
            </figure>

            {/* skill 9 */}
            <figure className="rounded-lg border p-2  border-orangebg">
              <div className="py-8 rounded-lg bg-darkbgtwo">
                 <i class="devicon-github-original text-5xl"></i>
                <p>Github</p>
              </div>
            </figure>

          </div>
        </motion.section>



        {/* Award Section */}
        <motion.section 
          initial={{ opacity: 0, y:50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}

          className="pt-28 md:pt-40 space-y-8">
           <h1 className="text-orangebg bg-orange-gradient bg-clip-text p-2 text-transparent
           font-bold text-2xl md:text-4xl">Award Of Recognition</h1>
          
          <div className="flex flex-col-reverse md:flex-row  md:items-center justify-between">
            <article className="text-gray-200 md:text-lg flex flex-col md:flex-col space-y-12 text-left">
              <div className="flex md:flex-row space-x-2 pt-6">
                <h1 className="font-bold md:text-2xl">Personal Brand Builder</h1>
                <p className="font-bold md:text-2xl
                 bg-orange-gradient bg-clip-text text-transparent">@Codetivite</p>
              </div>
              
              <div className="md:w-[500px] ">
                <p>
                  Awarded for consistently sharing my expertise, progress, and 
                  projects, strengthening my personal brand in the tech space. Through
                  documenting my journey, engaging with the community, and showcasing 
                  projects, I
                  demonstrated the power of visibility and consistency in career 
                  growth. This recognition reinforces my commitment to knowledge-sharing
                  and thought leadership in software development.
                </p>
              </div>
            </article>

            {/* Award Certificate */}
            <figure className="md:h-[300px] md:w-[500px] border rounded-lg">
              <img className="h-full w-full rounded-lg p-2" 
              src={award} alt="" loading='lazy'/>
            </figure>
          </div>
        </motion.section>



        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, y:50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}


           className="pt-28 md:pt-40 space-y-8">
            <h1 className="bg-orange-gradient bg-clip-text text-transparent p-2
             font-bold text-2xl md:text-4xl">Experience</h1>
          
          <div className="flex flex-row space-x-8 md:space-x-0 justify-evenly">
            {/* Vertical Line */}
            <div className="relative md:w-1 w-4 flex rounded-lg  bg-gray-200">
              <div className="absolute md:left-[-15px] left-[-12px]  top-2 border-gray-200
               rounded-full bg-gray-200 border-4 ">
                <div className="border-4 border-darkbg rounded-full h-[18px] w-[18px] 
                md:w-[25px] md:h-[25px] bg-orangebg"></div>
              </div>

              <div className="absolute md:left-[-15px] left-[-12px] md:top-[16rem] top-[31rem] 
               border-gray-200 rounded-full bg-gray-200 border-4 ">
                <div className="border-4 border-darkbg  rounded-full h-[18px] w-[18px]
                 md:w-[25px] md:h-[25px] bg-orangebg"></div>
              </div>
              
            </div>

            <div className="flex text-left flex-col space-y-12">
              <article className="md:w-[700px] text-gray-200">
                <div className="flex md:space-x-2 flex-col md:flex-row">
                  <h1 className="font-bold md:text-2xl">Frontend Developer Intern</h1>
                  <p className="font-bold md:text-2xl text-orangebg">@Codetivite</p>
                </div>
                <p>October-December 2024</p>
                <p>
                  collaborated with a dynamic team to build real-world web applications,
                   gained hands-on experience with React, Firebase, and Agile methodologies, 
                   and honed my problem-solving and teamwork skills. I contributed to project
                   planning, implementation, and debugging, enhancing code efficiency and 
                   functionality. This experience strengthened my technical expertise and 
                   prepared me for building scalable, user-focused applications in a professional
                   development environment
                </p>
              </article>


              <article className="md:w-[700px] text-gray-200">
                <div className="flex md:space-x-2 flex-col md:flex-row">
                  <h1 className="font-bold md:text-2xl">Volunteer</h1>
                  <p className="font-bold md:text-2xl text-orangebg">@GDG(Google Developers Group)</p>
                </div>
                <p>2024-Present</p>
                <p>
                  Collaborated with cross-functional teams to organize and execute successful 
                  events, ensuring smooth planning and coordination. I also contributed to 
                  promoting these events by sharing them across my social media networks, driving 
                  engagement and participation. This experience enhanced my teamwork, communication,
                   and organizational skills while fostering a deeper connection with the tech
                    community.
                </p>
              </article>
            </div>
          </div>
        </motion.section>

        <section className="pt-32 md:pt-40 space-y-12">

        </section>
    </div>
  
  )
}
