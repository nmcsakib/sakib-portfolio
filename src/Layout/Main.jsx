
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 500,
});
import Banner from "../Homepage/Banner";
import Introduction from "../Homepage/Introduction";
import Skills from "../Homepage/Skills";
import Navigation from "../Navigation/Navigation";
import Projects from '../Homepage/Projects';
import loading from '../assets/loading2.gif';
import { useEffect, useState } from "react";
import Contact from "../Homepage/Contact";
import Footer from "../Homepage/Footer";

const Main = () => {
  const [showGif, setShowGif] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowGif(false);
    }, 800); // change this value to set the duration of the GIF display
  }, []);
  const now = new Date();
const hour = now.getHours();
const greeting =
  hour >= 5 && hour < 12
    ? '🌞 Good Morning'
    : hour >= 12 && hour < 17
    ? '☀️ Good Afternoon'
    : '🌇 Good Evening';
   


  if(showGif) return <div className="flex w-screen h-screen justify-center items-center">
<img className="object-cover h-screen md:w-screen" src={loading} alt="Loading..." />
  </div>
return (
<main className="max-w-7xl mx-auto bg-[#1f1f1f] min-h-screen overflow-hidden">
<div className="p-5 md:p-10 relative"> 
<div className=' fixed z-50 -right-16 top-10 transform rotate-45 w-60 text-center bg-red-500 border-2 '>
<p className='py-2 inter text-white'>{ greeting }</p>
</div>
<Navigation/>
<Banner/>   
<Introduction/> 
<Skills/>
<Projects/>
<Contact/>
<Footer/>
</div>
  
</main>
);
};
export default Main;