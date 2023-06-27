const SectionSubTitle = ({text}) => {
return (
<div className="relative mt-20 mb-5 ml-5">
    <div className="w-3 absolute top-[34px] left-[-7px] h-3 bg-white rounded-full"></div>
    <h3 className=" mb-3 text-white inter text-lg  tracking-wider inline-block">&lt; {text} /&gt;</h3>
    <hr className="w-44"/>
</div>
);
};
export default SectionSubTitle;