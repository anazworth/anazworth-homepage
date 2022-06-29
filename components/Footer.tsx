import { FolderIcon, ChevronRightIcon  } from '@heroicons/react/outline'

function Footer() {
    return (
    <div className="sticky bottom-2 flex flex-row flex-nowrap 
                    whitespace-nowrap mb-4 mx-4 justify-between items-center
                    bg-nord2">

    {/* Vim Status Bar Left-Side */}
        <div className="flex flex-row truncate">
            <h1 className="bg-nord14 px-2 text-nord0">NORMAL</h1>
            <FolderIcon className="h-6 w-4 ml-2 overflow-hidden"/>
            <h1 className="ml-2 overflow-hidden">anazworth</h1>
            <ChevronRightIcon className="h-6 w-4"/>
            <h1 className="">Austin.md</h1>
        </div>

    {/* Vim Status Bar Right-Side*/}
        <div className="flex flex-row flex-nowrap truncate content-center">
            <h1 className="mx-2 overflow-hidden">utf-8 [unix]</h1>
            <h1 className="bg-nord14 px-2 text-nord0">0% ln:1/365</h1>
        </div>

    </div>
           );
}

export default Footer;
