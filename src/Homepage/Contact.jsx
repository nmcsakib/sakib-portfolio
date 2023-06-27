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
            alert('Message sent successfully !')
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
return (
    <>
    <SectionSubTitle text="Hire Me"/>
<div className="container-primary border-none" data-aos="fade-up" id="contact">
    <div className="wrapper flex flex-col p-10">
   <form className="w-full" ref={form} onSubmit={sendEmail}>
   <input type="text" name='user_name' className="input text-[#ffffff73] outline-none" placeholder="Enter your name here"/>
   <input type="email" name='user_email' className="input my-5 text-[#ffffff73] outline-none" placeholder="Enter your email here"/>
   <input type="text" name='user_phone' className="input mb-5 text-[#ffffff73] outline-none" placeholder="Enter your phone number"/>
   <textarea name="message" cols="30" rows="8" className="input outline-none" placeholder="Write details here"></textarea>
   <button className="px-3 active:bg-[#ffffff73] py-2 w-24 text-white elite social rounded-lg mt-4">Send</button>
   </form>
   <div className="flex pt-5 gap-4 justify-center items-center">
    <a href="http://www.facebook.com/sakib.sjs" target="_blank"  rel="noreferrer" className="p-3 rounded-full social"><FaFacebook/></a>
    <a href="https://twitter.com/nmcakib01" target="_blank"  rel="noreferrer" className="p-3 rounded-full social"><FaTwitter/></a>
    <a href="https://github.com/nmcsakib" target="_blank"  rel="noreferrer" className="p-3 rounded-full social"><FaGithub/></a>
    <a href="https://www.linkedin.com/in/nmc-sakib/" target="_blank"  rel="noreferrer" className="p-3 rounded-full social"><FaLinkedin/></a>
    <a href="https://stackoverflow.com/users/20857380/nmc-sakib" target="_blank"  rel="noreferrer" className="p-3 rounded-full social"><FaStackOverflow/></a>
    
   </div>
    </div>
</div>
    </>
);
};
export default Contact;