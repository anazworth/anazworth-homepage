import Layout from '../components/layout'
import Image from 'next/image'
import {ChevronDoubleDownIcon, ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/outline';
import {data} from "autoprefixer";

function about() {
    return (
        <Layout>
        <div className="flex flex-col space-y-0">

        <div className="relative min-h-screen flex flex-col items-center justify-between
                        bg-nord0">
        <video autoPlay loop muted playsInline className="absolute z-1 h-screen
                        bg-nord0 brightness-60 blur-sm hover:blur-none">
            <source src="/harrier.mov" type="video/mp4" />
        </video>
        <div></div>
        <div className="font-bold z-10">
            <h1 className="text-3xl text-nord4 text-bold drop-shadow-2xl">Marine Corps Veteran</h1>
            <ul className="text-nord4 text-justify opacity-40 hover:opacity-100">
            <li>5 years served</li>
            <li>2 deployments</li>
            </ul>
        </div>
        <ChevronDoubleDownIcon className="z-10 w-20 h-20 text-nord4 pb-8 animate-bounce"></ChevronDoubleDownIcon>
        </div>
        
        <div className="relative min-h-screen flex flex-col items-center justify-between
                        nord0">
            <video autoPlay loop muted playsInline className="absolute z-1 h-screen
                                brightness-60 blur-sm hover:blur-none">
                <source src="/curry.mov" type="video/mp4" />
            </video>
        <div></div>
        <div className="font-bold z-10">
            <h1 className="text-3xl text-nord4 text-bold drop-shadow-2xl">Shiba Enthusiast</h1>
            <ul className="text-nord4 text-justify opacity-40 hover:opacity-100">
            <li>(His name is Curry)</li>
            </ul>
        </div>
        <ChevronDoubleDownIcon className="z-10 w-20 h-20 text-nord4 pb-8 animate-bounce"></ChevronDoubleDownIcon>
        </div>


            <div className="flex flex-col pt-8 relative">
            <div className="relative carousel carousel-center pt-40 mb-40">

                <h1 className="absolute inset-0 text-nord4 text-3xl sm:text-6xl text-center pt-16">Photographer</h1>
                <div id="slide1" className="carousel-item pt-40 relative w-full justify-center">
                    <Image src="/atlanticBeach.jpeg" alt="Atlantic Beach, NC" layout={'fill'} objectFit={'contain'}
                           className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                        <a href="#slide2" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full justify-center">
                    <Image src="/curryGrass.jpeg" alt="Curry" layout={'fill'} objectFit={'contain'}
                            className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                        <a href="#slide3" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full justify-center">
                    <Image src="/bokGardens.jpeg" alt="Bok Gardens" layout={'fill'} objectFit={'contain'}
                           className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                        <a href="#slide4" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full justify-center">
                    <Image src="/lakeLouisa.jpeg" alt="Lake Louisa" layout={'intrinsic'} objectFit={'contain'}
                           width={1500} height={1000} className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                        <a href="#slide5" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full justify-center">
                    <Image src="/lari.jpeg" alt="Lari photo" layout={'intrinsic'} objectFit={'contain'}
                           width={1500} height={1000} className="w-full"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                        <a href="#slide1" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                    </div>
                </div>
            </div>
            </div>


        </div>
        </Layout>
   )
}
export default about;
