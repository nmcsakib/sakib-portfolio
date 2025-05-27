import SectionSubTitle from "../Components/SectionSubTitle";

import { FaArrowCircleRight } from "react-icons/fa";
import TeamProjects from "./TeamProjects";
const Projects = () => {
 const projects = [
    {
        image: 'https://i.ibb.co/2YQzTND/project1.png',
        link: 'https://sci-fi-toys.web.app/'
    },
    {
        image: 'https://i.ibb.co/KrvRGZR/project2.png',
        link: 'https://foreign-language-camping.web.app/'
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
        image: '/muktopathagar.jpg',
        link: 'https://mukto-pathagar.netlify.app/'
    },
    {
        image: 'https://i.ibb.co/qjjsmBf/project5.png',
        link: 'https://nmcsakib.netlify.app/'
    }
 ]
return (
<>
<SectionSubTitle text="Featured projects" />
<div className="container-primary upsetShadow pb-10" data-aos="fade-up" id="projects">
    <div>
        <h2 className="text-3xl text-center my-5 border py-3 bg-white text-[#1f1f1f] inter font-bold"><span className="text-7xl">10+</span> completed projects_</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
        
         
{
    projects.map((project, index) => <div key={index} className="shadow-lg ">
    <div

    style={{ height: '100%', width: '75%', margin: 'auto', position: 'relative'}}>

      <img className=" longImg h-[270px] xl:h-[320px] " src={project.image} alt="" />
     
     <a href={project.link} rel="noreferrer" target="_blank" className=" text-lg text-blue-600 absolute bottom-2 text-stroke left-2 inter tracking-wider border-b-2 border-blue-500"> Preview <FaArrowCircleRight className="inline"/></a>
    
    </div>
    </div>)
}

<div className="absolute right-10 bottom-1/2 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-600 after:via-yellow-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-400 before:dark:opacity-10 after:dark:from-yellow-600 after:dark:via-[#f2ff40] after:dark:opacity-40 before:lg:h-[360px] z-[1]"></div>
</div>
<TeamProjects/>
</div>
</>
);
};
export default Projects;