import { useRef } from "react";
import SectionSubTitle from "../Components/SectionSubTitle";
import {FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_c4m483q', 'template_lx73o3c', form.current, 'iO3UtMwx_ea2BEoW3')
        .then((result) => {
            if(result.text === 'OK'){

                alert('Message sent successfully !')
            }
            
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
return (
    <>
    <SectionSubTitle text="Let's work together"/>
<div className="container-primary  p-[0px] border-none" data-aos="fade-up" id="contact">
    <div className="wrapper flex flex-col p-5 md:p-10">
   <form className="w-full" ref={form} onSubmit={sendEmail}>
   <input required type="text" name='user_name' className="input text-[#ffffff73] outline-none" placeholder="Enter your name here"/>

   <input required type="email" name='user_email' className="input my-5 text-[#ffffff73] outline-none" placeholder="Enter your email here"/>

   <input type="text" name='user_phone' className="input mb-5 text-[#ffffff73] outline-none" placeholder="Enter your phone number"/>

   <textarea name="message" cols="30" rows="8" className="input outline-none" placeholder="Write details here"></textarea>
   <button className="px-3 relative z-20 active:bg-[#ffffff73] py-2 w-24 text-white elite social rounded-lg mt-4">Send</button>
   </form>
   <div className="relative z-20 flex flex-wrap md:flex-nowrap pt-5 gap-4 justify-center items-center">
    <a href="http://www.facebook.com/nmcsakib.1" target="_blank"  rel="noreferrer" className=" social"><FaFacebook/></a>
    <a href="https://twitter.com/nmcakib01" target="_blank"  rel="noreferrer" className=" social"><FaTwitter/></a>
    <a href="https://github.com/nmcsakib" target="_blank"  rel="noreferrer" className=" social"><FaGithub/></a>
    <a href="https://www.linkedin.com/in/nmc-sakib/" target="_blank"  rel="noreferrer" className=" social"><FaLinkedin/></a>
    <a href="https://stackoverflow.com/users/20857380/nmc-sakib" target="_blank"  rel="noreferrer" className=" social"><FaStackOverflow/></a>
    
   </div>
    </div>

    <div className="absolute left-10 bottom-1/4 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-cyan-500 after:via-cyan-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-cyan-600 before:dark:opacity-10 after:dark:from-cyan-700 after:dark:via-[#4df0fc] after:dark:opacity-40 before:lg:h-[360px] z-[1]"></div>
</div>
    </>
);
};
export default Contact;