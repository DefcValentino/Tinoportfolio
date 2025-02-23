import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   faSquareGithub, faLinkedin ,
   faXTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'





export const ContactForm = () => {
    const [isModalVisible, setModalVisible] = useState(false);


    // Define the Validation schema using Yup
    const validationSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("invalid email address").required("Email is required"),
        message: yup.string().required("Message is required"),
    });


    // Initialize React hook Form
    const {register, handleSubmit,  formState: {errors, isSubmitting}, reset } = useForm({
        resolver: yupResolver(validationSchema)
    });


    // Submit Handler Function
    const onSubmit = async (data) => {
        try {
            const response = await fetch("https://formspree.io/f/xkgokvnn", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
                redirect: "manual", //Prevents automatic redirection
            });

            if (response.status === 200) {
                setModalVisible(true);
                setTimeout(()=> setModalVisible(false
                   
                ), 3000);

                reset(); //Reset the form

            } else{
                alert("Failed to send message. Please try again.");
            }

        } catch(error) {
            alert("An error occured. Please try again Later.")
        }

        
    }


  return (

    <div className="mb-16 mt-12">
        
       <div className="flex flex-col  md:flex-row">
            <div className="py-4 md:px-10  text-left">
                <div className="flex space-x-2 items-center ">
                    <h1 className="font-bold text-lg md:text-3xl 
                    bg-orange-gradient bg-clip-text text-transparent">Let's Connect</h1>
                    <hr className="w-[10rem] border-t-2 "/>
                </div>
                
                <p className="pt-4">
                 Your company deserves a seasoned developer who crafts innovative solutions
                  tailored to your needs. Let’s collaborate to create impactful results—or 
                  feel free to reach out just to say hi!
                </p>

                {/* Social icons */}
                <div className="space-x-4 py-8 md:py-24"> 
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareGithub} size="xl" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} size="xl" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="xl" />   
                    </a>
               </div>
            </div>


            <form className="relative w-full space-y-6 text-left md:px-10"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex space-x-2 items-center ">
                  <h1 className="font-bold text-lg md:text-3xl  
                  bg-orange-gradient bg-clip-text text-transparent">Send a Message</h1>
                  <hr className="w-[8rem] border-t-2 "/>
                </div>
                
                {/*Name Field*/}
                <div>
                   <input
                     type="text" {...register("name")}
                      className="w-full px-4 py-2 rounded-lg bg-darkbgtwo outline-none
                       focus:outline-orangebg"
                      placeholder="Name"
                   />
                   {errors.name && <p className="text-sm text-red-500">{errors.name.message }</p>}
                </div>


                {/*Email Field*/}
                <div>
                   <input
                     type="email" {...register("email")}
                      className="w-full px-4 py-2 rounded-lg bg-darkbgtwo outline-none
                       focus:outline-orangebg"
                      placeholder="Email"
                   />
                   {errors.email && <p className="text-sm text-red-500">{errors.email.message }</p>}
                </div>


                {/*Message Field*/}
                <div>
                   <textarea
                     type="text" {...register("message")}
                     rows="4"
                      className="w-full px-4 py-2 rounded-lg bg-darkbgtwo outline-none
                       focus:outline-orangebg"
                      placeholder="Your Message"
                   />
                   {errors.message && <p className="text-sm text-red-500">{errors.message.message }</p>}
                </div>


                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2 text-lg text-gray-200 bg-orange-gradient rounded-lg focus:outlone-none
                     focus:ring-2 focus:ring-gray-200
                     ${isSubmitting? "opacity-50 cursor-not-allowed" : "" }`}
                >

                    {isSubmitting? "Sending..." : "Send Message"}
                </button>


                {/* Modal Message */}
               {isModalVisible && (
                <div className=" absolute top-[10rem] md:p-10 md:top-[6rem] inset-0 items-center justify-center">
                    <div className="bg-darkbg bg-opacity-90 shadow shadow-gray-700  backdrop-blur-sm
                    px-12 py-24 text-lg font-bold rounded-lg text-center text-gray-200">
                        <p>Message Sent Succesfully!</p>
                    </div>
                </div>
            )}
            </form>

            

        </div>
    </div>
  )
}
