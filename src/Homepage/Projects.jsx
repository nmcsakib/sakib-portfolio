import SectionSubTitle from "../Components/SectionSubTitle";
import { Tilt } from 'react-tilt'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { FaArrowCircleRight } from "react-icons/fa";
const Projects = () => {
 const projects = [
    {
        image: project1,
        link: 'https://sci-fi-toys.web.app/'
    },
    {
        image: project2,
        link: 'https://foreign-language-camping.web.app/'
    },
    {
        image: project3,
        link: 'https://job-hunter-app.netlify.app/'
    },
    {
        image: project4,
        link: 'https://chef-hunter-5ddb4.web.app/'
    },
    {
        image: project5,
        link: 'https://nmcsakib.netlify.app/'
    },
    {
        image: project6,
        link: 'https://list-of-ai.netlify.app/'
    },
 ]
return (
<>
<SectionSubTitle text="Featured projects" />
<div className="container-primary" data-aos="fade-up" id="projects">
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