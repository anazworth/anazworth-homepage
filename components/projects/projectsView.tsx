import Link from "next/link";
import Image from "next/image";

export function projectsView(projects: any) {
    return <div className="flex flex-col min-h-screen">
        {projects.map((project: any, index: number) => (
            <div key={index} className="flex flex-col min-h-screen mx-auto p-4 justify-center content-center">
                <div className="flex flex-col max-w-3xl mx-auto text-center justify-center">
                    <Link href={project.link}>
                        <a className="hover:text-nord14 hover:scale-105 duration-500">
                            <h1 className="flex text-4xl sm:text-6xl font-bold justify-center sm:whitespace-nowrap my-10">{project.title}</h1>
                        </a>
                    </Link>
                    <Link href={project.link}>
                        <a className="text-nord14 hover:scale-105 duration-500">
                            <h1 className="flex text-xl sm:text-2xl font-bold justify-center sm:whitespace-nowrap my-10">{project.link}</h1>
                            </a>
                    </Link>
                    {project.altLink && (
                    <Link href={project.altLink}>
                        <a className="text-nord14 hover:scale-105 duration-500">
                            <h1 className="flex text-xl sm:text-2xl font-bold justify-center sm:whitespace-nowrap">{project.altLink}</h1>
                            </a>
                    </Link>
                        )}
                    <p className="flex text-lg text-center justify-center my-10">{project.description}</p>
                </div>
                <div className="flex flex-col justify-center bg-gradient-to-t from-nord2 to-nord0 space-y-8">
                    <div className="mt-4 sm:mt-4">
                        <h2 className="flex text-2xl font-bold underline justify-center">The Stack</h2>

                        <ul className="justify-center text-center ">
                            {project.stack.map((stack: string) => (
                                <li key={stack} className="flex text-lg text-center justify-center">{stack}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative group mt-4 justify-center mx-auto">
                        <div className="absolute inset-0 blur bg-nord14
                                    group-hover:blur-xl transition duration-1000"></div>
                        <Image src={project.image} alt={project.alt}
                               layout={'intrinsic'} width={900} height={500} objectFit={'contain'}
                        />
                    </div>
                </div>
            </div>
        ))}
    </div>;
}