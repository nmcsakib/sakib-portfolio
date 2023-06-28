
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
import loading from '../assets/loading.gif'
import { useEffect, useState } from "react";
import Contact from "../Homepage/Contact";
import Footer from "../Homepage/Footer";

const Main = () => {
  const [showGif, setShowGif] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowGif(false);
    }, 2400); // change this value to set the duration of the GIF display
  }, []);

  if(showGif) return <div className="flex w-screen h-screen justify-center items-center">
<img className="object-cover h-screen md:w-screen" src={loading} alt="Loading..." />
  </div>
return (
<main className="max-w-7xl mx-auto bg-[#1f1f1f] min-h-screen">
<div className="p-5 md:p-10 relative"> 
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