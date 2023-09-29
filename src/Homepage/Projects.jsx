import SectionSubTitle from "../Components/SectionSubTitle";
import { Tilt } from 'react-tilt'

import { FaArrowCircleRight } from "react-icons/fa";
const Projects = () => {
 const projects = [
    {
        image: 'https://i.ibb.co/2YQzTND/project1.png',
        link: 'https://sci-fi-toys.web.app/'
    },
    {
        image: 'https://i.ibb.co/3pS68Jm/flex-code-6541d-web-app.png',
        link: 'https://flex-code-6541d.web.app/'
    },
    {
        image: 'https://i.ibb.co/FxCw1wW/project3.png',
        link: 'https://job-hunter-app.netlify.app/'
    },
    {
        image: 'https://i.ibb.co/t4RJ8Hn/project4.png',
        link: 'https://chef-hunter-5ddb4.web.app/'
    },
    {
        image: 'https://i.ibb.co/qjjsmBf/project5.png',
        link: 'https://nmcsakib.netlify.app/'
    },
    {
        image: 'https://i.ibb.co/KrvRGZR/project2.png',
        link: 'https://foreign-language-camping.web.app/'
    },
 ]
return (
<>
<SectionSubTitle text="Featured projects" />
<div className="container-primary upsetShadow pb-10" data-aos="fade-up" id="projects">
    <div data-aos="flip-up" data-aos-duration={1200}>
        <h2 className="text-3xl text-center my-5 border py-3 bg-white text-[#1f1f1f] inter font-bold"><span className="text-7xl">10+</span> completed projects_</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
        
         
{
    projects.map((project, index) => <div key={index} className="shadow-lg ">
    <Tilt  

    style={{ height: '100%', width: '75%', margin: 'auto', position: 'relative'}}>

      <img className=" longImg h-[270px] xl:h-[320px] " src={project.image} alt="" />
     
     <a href={project.link} rel="noreferrer" target="_blank" className=" text-lg text-blue-600 absolute bottom-2 text-stroke left-2 inter tracking-wider border-b-2 border-blue-500"> Preview <FaArrowCircleRight className="inline"/></a>
    
    </Tilt>
    </div>)
}
</div>
</div>
</>
);
};
export default Projects;