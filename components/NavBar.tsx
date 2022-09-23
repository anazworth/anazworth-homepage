import Link from 'next/link';
import {useEffect, useState} from "react";

const NavBar = () => {
    const [animateNavBar, setAnimateNavBar] = useState(false);
    useEffect(() => {
        const listener = () => {
            console.log("scrolling");
            window.scrollY > 40 ? setAnimateNavBar(true) : setAnimateNavBar(false);
            document.body.addEventListener('scroll', listener)
            return () => {
                document.body.removeEventListener('scroll', listener)
            }
        }
    }, []);
    return (
        <>
        <nav>
        <div className={`fixed top-0 left-0 h-16 w-screen m-0 z-50
                        flex opacity-80 hover:opacity-100
                        bg-nord0 hover:shadow-none ${animateNavBar && 'bg-white'}`}>
            <div className="flex-1 flex items-center justify-left m-2
                            text-nord4 whitespace-nowrap text-2xl sm:text-3xl
                             transition hover:translate-x-4
                            duration-500 hover:text-nord13
                            font-mono drop-shadow-2xl subpixel-antialiased">
                <Link href="/">
                   <a>Austin Nazworth</a>
                </Link>
            </div>
            {/* FIXME */}
            <div className="text-nord4 text-sm sm:text-2xl font-mono subpixel-antialiased">
               <ul className="flex flex-row whitespace-nowrap gap-x-2 mr-4 sm:gap-x-5 sm:mx-10 my-4 list-none">
                     <li className="nav-item hover:scale-110 duration-500 hover:text-nord14">
                        <Link href="/about">
                            <a>About Me</a>
                        </Link>
                     </li>
                     <li className="nav-item hover:scale-110 duration-500 hover:text-nord14">
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                     </li>
                     <li className="nav-item hover:scale-110 duration-500 hover:text-nord14">
                        <Link href="/contact">
                            <a>Contact Me</a>
                        </Link>
                     </li>
               </ul> 
            </div>
        </div>
        </nav>
        </>
    );
};
export default NavBar;
