
import { useRef } from 'react';
import Button from '../Components/Button';
import profile from '../assets/profile.png'
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

    const handleDownload = () => {
        const pdfUrl = '../assets/Nur_Mohammad_Chowdhury_Resume.pdf';
        const a = document.createElement('a');
        a.download = 'Nur_Mohammad_Chowdhury_Resume.pdf';
        a.href = pdfUrl;
        a.click();
      };

return (
<div className="container-primary" id="home">
    <div className="flex justify-between items-start">
        <aside>
        <h1 className="text-6xl tracking-widest font-bold">NMC</h1>
    <p className="text-lg tracking-[1.4em]">SAKIB</p>
        </aside>
        <aside>
            <p className="text-md font-semibold leading-5 tracking-widest mt-3"> &lt; Front-end <br /> web developer. /&gt;</p>
        </aside>
    </div>
<div className="flex justify-center items-center flex-col"> 
<div className='bg-gray-700 md:-mt-16 rounded-full inline-block'>
    <img className='w-64' src={profile} alt="" />
</div>
<p className="text-md font-thin tracking-widest text-center w-5/6 mt-2 mx-auto">Hello, this is <span className="font-bold text-lg tracking-[0.3em]">SAKIB</span>. A passionate web developer from <span className='font-bold text-transparent bg-gradient-to-br bg-gradient-radial from-green-500 to-red-500 bg-clip-text'>Bangladesh.</span><br />
I am curious about <span ref={el}>React.js</span>
</p>
<span className='mt-5'>
<span  onClick={handleDownload}>
<Button text='My resume'/>
</span>
</span>
</div>
     </div>
);
};
export default Banner;