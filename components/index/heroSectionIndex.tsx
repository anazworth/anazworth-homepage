import Image from "next/image";
import {SiJava, SiJavascript, SiNestjs, SiNextdotjs, SiReact, SiSpring, SiTypescript} from "react-icons/si";

export function heroSectionIndex() {
    return <div className="relative group w-screen sm:w-full sm:rounded-l-full
                        sm:bg-gradient-to-b from-nord0 to-nord1">
        <div className="absolute -inset-24 -inset-y-0 z-0 w-screen
                    rounded-l-full sm:bg-gradient-to-b from-nord0 to-nord1
                    group-hover:-translate-x-40 group-hover:scale-110 ease-out delay-200 duration-500">
        </div>
        <div
            className="relative flex flex-col px-4 sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 justify-center">
            <div className="group relative mx-auto">
                <div className="absolute inset-0 group-hover:blur-2xl duration-1000 ease-in-out
                                       bg-gradient-to-b from-nord1 to-nord7
                                       opacity-0 group-hover:opacity-100 group-hover:rotate-180 blur-sm
                                       rounded-2xl group-hover:rounded-full scale-50 group-hover:scale-100"></div>
                <Image className="relative mx-auto"
                       src="/austin.jpeg"
                       alt="Photo of Austin Nazworth"
                       width={216}
                       height={256}
                       objectFit="cover"
                       layout="fixed"/>
            </div>
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl text-center sm:text-7xl scale-0 group-hover:scale-100
                    opacity-0 transition duration-1000 delay-700 ease-in-out group-hover:opacity-70
                     font-bold whitespace-nowrap origin-top text-nord3">
                    Austin Nazworth
                </h1>
                <p className="text-sm sm:text-md">I&apos;m a full time student at Valencia College.
                    I was born and raised in Starke, FL but I now live in Winter Garden, FL.
                    I spent 5 years in a Marine Corps Harrier squadron, and I just got my A.S.
                    in I.T.</p>
                <p className="text-md">I&apos;m currently working on my B.A.S in Software
                    Development.</p>
                <span className="flex flex-row py-4 space-x-4 ease-in-out text-center">
                <SiJava className="text-nord4 text-6xl hover:scale-110 duration-200 hover:rotate-2"/>
                <SiJavascript className="text-nord4 text-6xl hover:scale-125 duration-200 hover:rotate-2"/>
                <SiTypescript className="text-nord4 text-6xl hover:scale-125 duration-200 hover:rotate-2"/>
                <SiSpring className="text-nord4 text-6xl hover:scale-125 duration-200 hover:rotate-2"/>
                <SiNestjs className="text-nord4 text-6xl hover:scale-125 duration-200 hover:rotate-2"/>
                <SiNextdotjs className="text-nord4 text-6xl hover:scale-125 duration-200 hover:rotate-2"/>
                <SiReact className="text-nord4 text-6xl hover:scale-125 duration-200 hover:rotate-2"/>
            </span>
            </div>
        </div>
    </div>;
}