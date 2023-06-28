import { FaEnvelope } from "react-icons/fa";

const Button = ({text}) => {
return (
<div className="border-2 text-sm md:text-md inter shadow-lg px-5 md:px-10 py-1 md:py-3 hover:border-[#155149] cursor-pointer hover:text-[#216964] transition-all tracking-wider rounded-full flex items-center gap-3"> <FaEnvelope/> {text}</div>
);
};
export default Button;