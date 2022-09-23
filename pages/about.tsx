import Head from "next/head";
import {ChevronDoubleDownIcon} from "@heroicons/react/outline";
import Layout from "../components/layout";
import {photoCarosel} from "../components/about/photoCarosel";

function about() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
                <meta name="Website for Austin Nazworth" content="About Austin Nazworth"/>
                <link rel="icon" href="/curryfavicon.ico"/>
            </Head>
            <div className="flex flex-col space-y-0">

                <div className="relative min-h-screen flex flex-col items-center justify-between
                        bg-nord0">
                    <video autoPlay loop muted playsInline className="absolute z-1 h-screen
                        bg-nord0 brightness-60 blur-sm hover:blur-none transition ease-in-out duration-300">
                        <source src="/harrier.mov" type="video/mp4"/>
                    </video>
                    <div></div>
                    <div className="font-bold z-10">
                        <h1 className="text-3xl text-nord4 text-bold drop-shadow-2xl">Marine Corps Veteran</h1>
                        <ul className="text-nord4 text-justify opacity-40 hover:opacity-100">
                            <li>5 years served</li>
                            <li>2 deployments</li>
                        </ul>
                    </div>
                    <ChevronDoubleDownIcon
                        className="z-10 w-20 h-20 text-nord4 pb-8 animate-bounce"></ChevronDoubleDownIcon>
                </div>

                <div className="relative min-h-screen flex flex-col items-center justify-between
                        nord0">
                    <video autoPlay loop muted playsInline className="absolute z-1 h-screen
                                brightness-60 blur-sm hover:blur-none transition ease-in-out duration-300">
                        <source src="/curry.mov" type="video/mp4"/>
                    </video>
                    <div></div>
                    <div className="font-bold z-10">
                        <h1 className="text-3xl text-nord4 text-bold drop-shadow-2xl">Shiba Enthusiast</h1>
                        <ul className="text-nord4 text-justify opacity-40 hover:opacity-100">
                            <li>(His name is Curry)</li>
                        </ul>
                    </div>
                    <ChevronDoubleDownIcon
                        className="z-10 w-20 h-20 text-nord4 pb-8 animate-bounce"></ChevronDoubleDownIcon>
                </div>


                {photoCarosel()}


            </div>
        </Layout>
    )
}

export default about;
