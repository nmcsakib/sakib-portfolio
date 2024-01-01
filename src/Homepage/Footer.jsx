const Footer = () => {
return (
<footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-slate-800">
    <span className="text-sm sm:text-center text-gray-400">© 2023 <a href="https://facebook.com/sakib.sjs" className="underline"  rel="noreferrer" target="_blank">NMC Sakib</a>. All Rights Reserved.
    </span>
    <ul className="relative z-20 grid md:grid-cols-2 md:text-center grid-cols-2 items-end mt-3 sm:mt-0">
        <li>
            <a href="#introduction" className="mr-4 text-sm hover:underline md:mr-6 text-gray-400">About</a>
        </li>
       
        <li>
            <a href="#contact" className="text-sm hover:underline text-gray-400">Contact</a>
        </li>
    </ul>

    <div className="absolute right-10 bottom-20 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-300 after:via-pink-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-600 before:dark:opacity-10 after:dark:from-pink-700 after:dark:via-[#f64dfc] after:dark:opacity-40 before:lg:h-[360px] z-[1]"></div>
</footer>
);
};
export default Footer;