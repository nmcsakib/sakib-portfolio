import SectionSubTitle from "../Components/SectionSubTitle";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const Skills = () => {

const skills = [
    {   
        id: 1,
        sliceColor: '#e54c21',
        value: 80,
        image: "https://www.svgrepo.com/show/452228/html-5.svg"
    },
    {   
        id: 2,
        sliceColor: '#1172b8',
        value: 70,
        image: "https://www.svgrepo.com/show/452185/css-3.svg"
    },
    {   
        id: 2,
        sliceColor: '#f0db4f',
        value: 75,
        image: "https://www.svgrepo.com/show/353925/javascript.svg"
    },
    {   
        id: 2,
        sliceColor: '#0c9fcb',
        value: 65,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
    },
    {   
        id: 2,
        sliceColor: '#000000',
        value: 30,
        image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
    },
    {   
        id: 2,
        sliceColor: '#44a8b3',
        value: 70,
        image: "https://www.svgrepo.com/show/374118/tailwind.svg"
    },
    {   
        id: 2,
        sliceColor: '#8cc84b',
        value: 45,
        image: "https://www.svgrepo.com/show/452075/node-js.svg"
    },
    {   
        id: 2,
        sliceColor: '#13aa52',
        value: 50,
        image: "https://www.svgrepo.com/show/331488/mongodb.svg"
    },
    {   
        id: 2,
        sliceColor: '#fcca3f',
        value: 60,
        image: "https://www.svgrepo.com/show/373595/firebase.svg"
    },
    
]
return (
<> 
    <SectionSubTitle text='Skills'/>
    <div className="container-primary" data-aos="fade-up" id="skills">
        <h2 className="text-2xl tracking-wider inter text-left"><span className="text-3xl md:text-5xl tracking-widest block">Achieved_</span> <span className="text-[#42ccc4]">Skills</span> during last one year</h2>
        <hr className="w-2/4 my-3" />
        <div className="grid md:grid-cols-4 items-center gap-5 justify-center">

        
{
    skills.map(skill => <>
    <div className="relative mx-auto mt-5" data-aos="zoom-in" data-aos-duration="300">

<CircularProgressBar
 colorCircle="#4a4a4a"
 strokeBottom={6}
 round
colorSlice={skill.sliceColor}
size="150px"
fontSize="1em"
percent={skill.value}
fontColor='#ffffff'
textPosition="1.5em"
>
<img
alt="Random image"
src={skill.image}
style={{
 
  borderRadius: '50%',
  left: '50%',
  padding: '2px',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -90%)',
  width: '50px',
  height: '50px',
  
}}

/>
</CircularProgressBar>
</div>
    </>)
}
</div>
    </div>
</>
);
};
export default Skills;