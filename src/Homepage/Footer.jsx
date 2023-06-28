const Footer = () => {
return (
<footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-slate-800">
    <span className="text-sm text-gray-500 sm:text-center text-gray-400">© 2023 <a href="https://facebook.com/sakib.sjs" className="hover:underline"  rel="noreferrer" target="_blank">NMC Sakib</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
            <a href="#introduction" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 text-gray-400">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 text-gray-400">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 text-gray-400">Licensing</a>
        </li>
        <li>
            <a href="#contact" className="text-sm text-gray-500 hover:underline text-gray-400">Contact</a>
        </li>
    </ul>
</footer>
);
};
export default Footer;