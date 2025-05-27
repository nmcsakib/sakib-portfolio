import SectionSubTitle from "../Components/SectionSubTitle";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

const Skills = () => {

const skills = [
    {   
        id: 1,
        sliceColor: '#e54c21',
        value: 100,
        image: "https://www.svgrepo.com/show/452228/html-5.svg"
    },
    {   
        id: 2,
        sliceColor: '#1172b8',
        value: 100,
        image: "https://www.svgrepo.com/show/452185/css-3.svg"
    },
    {   
        id: 2,
        sliceColor: '#f0db4f',
        value: 100,
        image: "https://www.svgrepo.com/show/353925/javascript.svg"
    },
    {   
        id: 2,
        sliceColor: '#0c9fcb',
        value: 100,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
    },
    {   
        id: 2,
        sliceColor: '#000000',
        value: 100,
        image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
    },
    {   
        id: 2,
        sliceColor: '#44a8b3',
        value: 100,
        image: "https://www.svgrepo.com/show/374118/tailwind.svg"
    },
    {   
        id: 2,
        sliceColor: '#8cc84b',
        value: 100,
        image: "https://www.svgrepo.com/show/452075/node-js.svg"
    },
    {   
        id: 2,
        sliceColor: '#13aa52',
        value: 100,
        image: "https://www.svgrepo.com/show/331488/mongodb.svg"
    },
    {   
        id: 2,
        sliceColor: '#fcca3f',
        value: 100,
        image: "https://www.svgrepo.com/show/373595/firebase.svg"
    },
    {   
        id: 2,
        sliceColor: '#ee513b',
        value: 100,
        image: "https://www.svgrepo.com/show/452210/git.svg"
    },
    {   
        id: 2,
        sliceColor: '#000',
        value: 100,
        image: "https://www.svgrepo.com/show/330398/express.svg"
    },
    
]
return (
<> 
    <SectionSubTitle text='Skills'/>
    <div className="container-primary" data-aos="fade-up" id="skills">
        <h2 className="text-2xl tracking-wider inter text-left"><span className="text-3xl md:text-5xl tracking-widest block">Achieved_</span> <span className="text-[#42ccc4]">Skills</span> during last one year</h2>
        <hr className="w-2/4 my-3" />
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-5 justify-center">

        
{
    skills.map((skill, i) => <div key={i} className="relative mx-auto mt-5" data-aos="zoom-in" data-aos-duration="300">

<CircularProgressBar
 colorCircle="#4a4a4a"
 round
colorSlice={skill.sliceColor}
size={135}
fontSize="0em"
percent={skill.value}
fontColor='#ffffff'
>
<img
alt="Random image"
src={skill.image}
style={{
 
  borderRadius: '50%',
  left: '50%',
  padding: '2px',
  position: 'absolute',
  top: '65%',
  transform: 'translate(-50%, -90%)',
  width: '60px',
  height: '60px',
  
}}

/>
</CircularProgressBar>
</div>
)
}
</div>

<div className="absolute right-10 -bottom-5 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-pink-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-600 before:dark:opacity-10 after:dark:from-pink-700 after:dark:via-[#f64dfc] after:dark:opacity-40 before:lg:h-[360px] z-[1]"></div>
    </div>
</>
);
};
export default Skills;