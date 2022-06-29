import { FolderIcon, ChevronRightIcon  } from '@heroicons/react/outline'
import Link from 'next/link'

function Footer() {
    return (
    <>
    <div className="flex flex-col sticky bottom-2">
    <div className="flex flex-row flex-nowrap 
                    whitespace-nowrap mb-4 mx-4 justify-between items-center
                    bg-nord2">

    {/* Vim Status Bar Left-Side */}
        <div className="flex flex-row truncate">
            <h1 className="bg-nord14 px-2 text-nord0">NORMAL</h1>
            <FolderIcon className="h-6 w-4 ml-2 overflow-hidden"/>
            <h1 className="ml-2 overflow-hidden">anazworth</h1>
            <ChevronRightIcon className="h-6 w-4"/>
            <Link href="https://www.github.com/anazworth">
                <a className="hover:text-nord12 hover:animate-bounce">Austin.git</a>
            </Link>
        </div>

    {/* Vim Status Bar Right-Side*/}
        <div className="flex flex-row flex-nowrap truncate content-center">
            <h1 className="mx-2 overflow-hidden">utf-8 [unix]</h1>
            <h1 className="bg-nord14 px-2 text-nord0">0% ln:1/365</h1>
        </div>

    </div>
    </div>

    <div className="flex flex-row justify-center">
        <h1 className="text-xs text-nord8">© 2022 Austin Nazworth. All Rights Reserved.</h1>
    </div>
    </>
           );
}

export default Footer;
