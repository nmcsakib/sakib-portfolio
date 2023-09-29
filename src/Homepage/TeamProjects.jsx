import { Tilt } from "react-tilt";
// import SectionSubTitle from "../Components/SectionSubTitle";
import { FaArrowCircleRight } from "react-icons/fa";

const TeamProjects = () => {

    const projects = [
       
        {
            image: 'https://i.ibb.co/3pS68Jm/flex-code-6541d-web-app.png',
            link: 'https://flex-code-6541d.web.app/'
        }
     ]
return (
<div>
    
{/* <SectionSubTitle text="Team projects" /> */}
<div className="mt-20">
<div>
        <h2 className="text-3xl text-center my-5 border py-2 bg-white text-[#1f1f1f] inter font-bold"><span className="text-7xl">1</span> completed team project_</h2>
    </div>
        
         
{
    projects.map((project, index) => <div key={index} className="shadow-lg ">
    <Tilt  

    style={{ height: '100%', width: '80%', margin: 'auto', position: 'relative'}}>

      <img className=" longImg h-[270px] xl:h-[320px] " src={project.image} alt="" />
     
     <a href={project.link} rel="noreferrer" target="_blank" className=" text-lg text-blue-600 absolute bottom-2 text-stroke left-2 inter tracking-wider border-b-2 border-blue-500"> Preview <FaArrowCircleRight className="inline"/></a>
    
    </Tilt>
    </div>)
}
</div>
</div>
);
};
export default TeamProjects;