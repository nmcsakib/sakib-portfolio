
import SectionSubTitle from "../Components/SectionSubTitle";

const Introduction = () => {
   
return (<>
    <SectionSubTitle text="Introduction"/>
<div className="container-primary upsetShadow border-none" id="introduction"  data-aos="fade-up" data-aos-delay="800">
<div>
    <h1 className="text-3xl md:text-7xl leading-[1.2] inter text-white">
        It&#39;s Nur Mohammad <br /> Chowdhury <span className="text-[#42ccc4]">Sakib</span>, <br />
        A Passionate Web developer_
    </h1>
    <p className="mt-3 elite text-md tracking-wide text-left text-[#969696] w-5/6 ">I craft elegant and functional web experiences through design and coding. <br /> My passion for what I do drives me to create beautifully simple solutions.</p>
</div>
<div className="absolute left-10 -bottom-5 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-500 after:via-green-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-600 before:dark:opacity-10 after:dark:from-green-600 after:dark:via-[#4dfc79] after:dark:opacity-40 before:lg:h-[360px] z-[1]"></div>
 </div></>
);
};
export default Introduction;