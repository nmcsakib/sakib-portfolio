import { FaEnvelope } from "react-icons/fa";

const Button = ({text}) => {
return (
<div className="upsetShadow text-sm md:text-md inter px-5 md:px-10 py-3 md:py-3 cursor-pointer hover:text-[#216964] transition-all tracking-wider rounded-full flex items-center gap-3"> <FaEnvelope/> {text}</div>
);
};
export default Button;