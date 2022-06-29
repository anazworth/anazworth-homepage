import Layout from '../components/layout'
import Image from 'next/image'

function about() {
    return (
        <Layout>
        <div className="flex flex-col">

        <div className="relative min-h-screen flex flex-col items-center justify-center
                        bg-nord0">
        <video autoPlay loop muted playsInline className="absolute z-1 h-full
                        bg-nord0 brightness-60 blur-sm hover:blur-none">
            <source src="/harrier.mov" type="video/mp4" />
        </video>
        <div className="font-bold z-10">
            <h1 className="text-3xl text-nord4 text-bold drop-shadow-2xl">Marine Corps Veteran</h1>
            <ul className="text-nord4 text-justify opacity-40 hover:opacity-100">
            <li>5 years served</li>
            <li>2 deployments</li>
            </ul>
        </div>
        </div>
        
        <div className="relative min-h-screen flex flex-col items-center justify-center
                        nord0">
            <video autoPlay loop muted playsInline className="absolute z-1 max-h-full
                                brightness-60 blur-sm hover:blur-none">
                <source src="/curry.mov" type="video/mp4" />
            </video>
        <div className="font-bold z-10">
            <h1 className="text-3xl text-nord4 text-bold drop-shadow-2xl">Shiba Enthusiast</h1>
            <ul className="text-nord4 text-justify opacity-40 hover:opacity-100">
            <li>(His name is Curry)</li>
            </ul>
        </div>
        </div>

        <div>
        next
        </div>

        </div>
        </Layout>
   )
}
export default about;
