
import { useRef } from 'react';
import Button from '../Components/Button';
import profile from '/new_profile.png'
import resume from '../assets/Nur_Mohammad_Chowdhury_Resume.pdf'
import { useEffect } from 'react';
import Typed from 'typed.js';

const Banner = () => {
    const el = useRef(null);
    // Create reference to store the Typed instance itself
      const typed = useRef(null);
  
    useEffect(() => {
      const options = {
          strings: 
              ['React.js', 'CSS3', 'Tailwind', 'JavaScript', 'JWT', 'Node.js','Redux', 'Express','MongoDB', 'Next.js' ], cursorChar: '_',
        
        typeSpeed: 60,
          backSpeed: 60,
          loop: true,
        
      };
      
      typed.current = new Typed(el.current, options);
        
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    }, [])

return (
<div className="container-primary" id="home">
    <div className="flex flex-col md:flex-row justify-between items-start">
        <aside data-aos="slide-right">
        <h1 className="text-6xl tracking-widest font-bold" title='Nur Mohammad Chowdhury'>NMC</h1>
    <p className="text-lg tracking-[1.4em]">SAKIB</p>
        </aside>
        <aside className='ml-auto hidden md:block' data-aos="slide-left">
            <p className="text-sm md:text-md font-semibold leading-5 tracking-widest mt-3"> &lt; Front-end <br /> web developer. /&gt;</p>
        </aside>
    </div>
<div className="flex justify-center items-center flex-col"> 
<div className='mt-5 backdrop-blur-xl bg-gray-700/80 md:-mt-16 rounded-full inline-block h-60 w-60'>
    <img className='-mt-12 relative z-20' src={profile} alt="" />
</div>

<div className="animated-text rounded-full w-60 h-60 relative  md:-top-60 -top-60 md:left-0 sm:top-22 sm:left-0 z-[-1] blur-[24px] opacity-60"></div>
<p className="text-md font-thin tracking-widest text-center w-5/6 -mt-36 mx-auto">Hello, this is <span className="font-bold text-lg tracking-[0.3em]">SAKIB</span>. A passionate web developer from <span className='font-bold text-transparent bg-gradient-to-br bg-gradient-radial from-green-500 to-red-500 bg-clip-text'>Bangladesh.</span><br />
I am curious about <br /> <span ref={el}>React.js</span>
</p>
<span className='mt-5'>
<a href={resume} >
<Button text='My resume'/>
</a>
</span>
</div>
     </div>
);
};
export default Banner;