import Image from "next/image";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";

export function photoCarosel() {
    return <div className="flex flex-col pt-8 relative">
        <div className="relative carousel carousel-center pt-40 mb-40">

            <h1 className="absolute inset-0 text-nord4 text-xl sm:text-6xl text-center pt-16">Photographer</h1>
            <div id="slide1" className="carousel-item pt-40 relative w-full justify-center">
                <Image src="/atlanticBeach.jpeg" alt="Atlantic Beach, NC" layout={'fill'}
                       objectFit={'contain'}
                       className="w-full"/>
                <div
                    className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                    <a href="#slide2" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full justify-center">
                <Image src="/curryGrass.jpeg" alt="Curry" layout={'fill'} objectFit={'contain'}
                       className="w-full"/>
                <div
                    className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                    <a href="#slide3" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full justify-center">
                <Image src="/bokGardens.jpeg" alt="Bok Gardens" layout={'fill'} objectFit={'contain'}
                       className="w-full"/>
                <div
                    className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                    <a href="#slide4" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full justify-center">
                <Image src="/lakeLouisa.jpeg" alt="Lake Louisa" layout={'intrinsic'} objectFit={'contain'}
                       width={1500} height={1000} className="w-full"/>
                <div
                    className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                    <a href="#slide5" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full justify-center">
                <Image src="/lari.jpeg" alt="Lari photo" layout={'intrinsic'} objectFit={'contain'}
                       width={1500} height={1000} className="w-full"/>
                <div
                    className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="hidden sm:flex btn btn-circle"><ChevronLeftIcon/></a>
                    <a href="#slide1" className="hidden sm:flex btn btn-circle"><ChevronRightIcon/></a>
                </div>
            </div>
        </div>
    </div>;
}