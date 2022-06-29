import Link from 'next/link';

const NavBar = () => {
    return (
        <>
        <nav>
        <div className="fixed top-0 left-0 h-16 w-screen m-0 z-50
                        flex opacity-80 hover:opacity-100
                        bg-nord0 shadow-2xl hover:shadow-none">
            <div className="flex-1 flex items-center justify-left m-2
                            text-nord4 whitepace-nowrap text-2xl sm:text-3xl font-mono drop-shadow-2xl subpixel-antialiased">
                <Link href="/">
                   <a>Austin Nazworth</a>
                </Link>
            </div>
            {/* FIXME */}
            <div className="text-nord4 text-sm sm:text-2xl font-mono subpixel-antialiased">
               <ul className="flex flex-row whitespace-nowrap gap-x-5 mx-10 my-4 list-none">
                     <li className="nav-item hover:animate-bounce">
                        <Link href="/about">
                            <a>About me</a>
                        </Link>
                     </li>
                     <li className="nav-item hover:animate-bounce">
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                     </li>
                     <li className="nav-item hover:animate-bounce">
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
