import React, {useRef, useState, useEffect} from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../pages/header.jsx';
import Image from "next/image";
import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Reveal} from '../Components/utils/Reveal';
import {Reveal2} from '../Components/utils/Reveal2';
import {Pop} from '../Components/utils/Pop';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Projects: NextPage = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(1);
    const [activeTab, setActiveTab] = useState<string>('Video');

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev % 7) + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const openCity = (tabName: string) => {
        setActiveTab(tabName);
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-300 via-gray-50 to-gray-300 w-100%">
        <style jsx>{`
            @font-face{
                    font-family: "Just Bubble";
                    src: url("ad118fd848f5254b108b7e7bfab6b7b7.eot");
                    src: url("ad118fd848f5254b108b7e7bfab6b7b7.eot?#iefix")format("embedded-opentype"),
                        url("ad118fd848f5254b108b7e7bfab6b7b7.woff")format("woff"),
                        url("ad118fd848f5254b108b7e7bfab6b7b7.woff2")format("woff2"),
                        url("ad118fd848f5254b108b7e7bfab6b7b7.ttf")format("truetype"),
                        url("ad118fd848f5254b108b7e7bfab6b7b7.svg#Just Bubble")format("svg");
                    font-weight:normal;
                    font-style:normal;
                    font-display:swap;
                }

                .font-bubble {
                    font-family: "Just Bubble";
                }

                @font-face{
                    font-family: "pureMilk";
                    src: url("/pure-milk/Pure Milk.otf")format("opentype");
                }

                .font-pureMilk {
                    font-family: "pureMilk";
                }

                @keyframes zoom-in {
                0% {
                    transform: scale(1);
                    opacity: 0;
                }
                50%, 100% {
                    transform: scale(1.15);
                    opacity: 1;
                }
                }

                .animate-zoom-in {
                animation: zoom-in 3s infinite;
                }

                .looped-zoom {
                animation-delay: 5s;
                }
        `}</style>
        <Header></Header>
        <div className="flex grow px-8">
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects Page" />
                <link rel="icon" href="/bg/logo icon.png" />
                <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </Head>
        </div>

        <div className="flex flex-col items-center w-full mx-auto justify-center">
            <Image src="/bg/My Portfolio/3_3.png" alt="bgtop" width={1640} height={900} className="h-screen w-full object-cover sm:object-fill" style={{ zIndex: 1, objectPosition: 'left'}}/>
            <div className="flex w-full h-full mx-auto justify-center align-center absolute inset-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black" style={{ zIndex: 2 }}>
                    <div className="flex justify-center items-end md:items-center md:justify-end">
                        <Image src="/bg/My Portfolio/4.png" alt="projects" width={1110} height={651} className="pt-16 md:pt-0 w-[70%] sm:w-4/5 h-auto mx-auto md:mr-0"/>
                    </div>
                    <div className="flex justify-center items-start md:items-center md:justify-start md:ml-20">
                        <Reveal>
                            <p className="font-pureMilk text-[70px] sm:text-[90px]">My Projects</p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>

        <main className="flex-grow justify-center items-center">
            <>
            <div className="w-full">
                <div className="mb-10 mt-[-140px] pt-52 sm:mb-20 lg:my-30 min-h-screen w-100%">
                    <Pop>
                        <div className="mt-10 w-[90%] max-h-[730px] sm:w-[75%] lg:w-[55%] flex justify-center items-center mx-auto bg-custom-blue rounded-lg p-6">
                            <Swiper
                                className="flex justify-center items-center"
                                spaceBetween={30}
                                centeredSlides={true}
                                speed={1100}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                style={{
                                    // @ts-ignore
                                    "--swiper-pagination-color": "#FFFFFF",
                                    "--swiper-navigation-color": "#FFFFFF",
                                    "--swiper-navigation-size": "35px",
                                    "--swiper-pagination-bullet-inactive-color": "#000",
                                    "--swiper-pagination-bullet-inactive-opacity": "0.5"
                                }}
                            >
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/4.jpg" alt="slide4" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/5.jpg" alt="slide5" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/2.jpg" alt="slide2" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/3.jpg" alt="slide3" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/1.jpg" alt="slide1" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/6.jpg" alt="slide6" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/7.jpg" alt="slide7" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/8.jpg" alt="slide8" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/9.jpg" alt="slide9" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/10.jpg" alt="slide10" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/11.jpg" alt="slide11" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/12.jpg" alt="slide12" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/13.jpg" alt="slide13" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/14.jpg" alt="slide14" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/15.jpg" alt="slide15" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/16.jpg" alt="slide16" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/17.jpg" alt="slide17" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/18.jpg" alt="slide18" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/19.jpg" alt="slide19" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/20.jpg" alt="slide20" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/21.jpg" alt="slide21" width={1280} height={960} className="object-contain"/></SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center my-auto mx-auto"><Image src="/projects/carousel/22.jpg" alt="slide22" width={1280} height={960} className="object-contain"/></SwiperSlide>
                            </Swiper>
                        </div>
                    </Pop>

                    <div className="flex-grow py-10 sm:py-20 lg:py-30 w-full">
                        <div className="relative transition-transform duration-1000">
                            <div className="relative group rounded-3xl justify-center align-center bg-custom-blue mx-auto shadow-lg p-7 sm:p-12 w-3/4 h-3/4 sm:w-2/3 transition-transform duration-500 ease-in-out hover:shadow-xl" style={{zIndex: 1}}>
                                <Reveal>
                                    <p className="text-2xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Projects & Experiences&nbsp;&nbsp;</p>
                                </Reveal>
                                <Slider {...sliderSettings}>
                                <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                            <Reveal2>
                                                <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;28 - 31 October 2024&nbsp;</p>
                                            </Reveal2>
                                            <Reveal>
                                                <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center text-center">
                                                    <p className="text-justify text-sm mb-3 md:text-base"><strong>Asia Haptics Conference 2024</strong></p>
                                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                                        <li>Sunway University, Malaysia</li>
                                                        <li>Speaker for “Exploring Haptic Technology in Malaysia: Trends, Developments, and Hands-On Experience” Workshop.</li>
                                                        <li>Participated in workshops and hands-on sessions, exploring the latest innovations in haptics and networking with attendees from Japan, Korea, and beyond.</li>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                            <Reveal2>
                                                <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Jan 2024 - April 2024&nbsp;</p>
                                            </Reveal2>
                                            <Reveal>
                                                <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center text-center">
                                                    <p className="text-justify text-sm mb-3 md:text-base"><strong>Full Stack Developer Intern</strong></p>
                                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                                        <li>Malaysian Youth Community (MYC), Petaling Jaya, Selangor</li>
                                                        <li>Developed front-end and back-end solutions using Next.js, Tailwind CSS, and Prisma.</li>
                                                        <li>Enhanced MYC's Co-profile web page for improved user experience on desktop and mobile.</li>
                                                        <li>Implemented new features including an event calendar and a 3D responsive flipbook.</li>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                            <Reveal2>
                                                <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Jan 2023 – April 2024 &nbsp;</p>
                                            </Reveal2>
                                            <Reveal>
                                                <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center text-center">
                                                    <p className="text-justify text-sm mb-3 md:text-base"><strong>ICT Pilot Projects for Rural Areas (Sunway Cat II Japan APT)</strong></p>
                                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                                        <li>Sunway HUMAC RC, Level 3, Sunway University, Bandar Sunway</li>
                                                        <li>A student leader that manages the team, team schedule and activities.</li>
                                                        <li>Conducts, participates, and manages workshops, meetings, and trips</li>
                                                        <li>Research on Kuching’s Mangrove trees (Kuching Wetland National Park) using various types of drones, hyperspectral along with data processing such as stitching, annotation and image processing.</li>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                        <Reveal2>
                                            <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;May 2023 - July 2023&nbsp;</p>
                                        </Reveal2>
                                        <Reveal>
                                            <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center text-center">
                                                <div className="text-justify text-xs sm:text-xs md:text-base">
                                                    <p className="text-justify text-sm mb-3 md:text-base"><strong>Network and System Administrator project</strong></p>
                                                    <li>Configured a Linux based local network that consist of Web Server, DNS Server, and DHCP Server</li>
                                                </div>
                                            </div>
                                        </Reveal>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                            <Reveal2>
                                                <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Apr 2022 – Jun 2022&nbsp;</p>
                                            </Reveal2>
                                            <Reveal>
                                                <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center text-center">
                                                    <p className="text-justify text-sm mb-3 md:text-base"><strong>Web Development</strong></p>
                                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                                        <li>Published, implemented, and designed a website using web development skills such as HTML, CSS, JavaScript, PHP, and SQL (3-tier development).</li>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                        <Reveal2>
                                            <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Aug 2021 – Dec 2021&nbsp;</p>
                                        </Reveal2>
                                        <div className="grid grid-rows-2 gap-4 items-center justify-center">
                                                <Pop>
                                                    <div className="w-[40%] h-auto flex items-center justify-center mx-auto">
                                                        <Image src="/projects/projects/Mastermind.jpg" alt="Mastermind game" width={400} height={300}/>
                                                    </div>
                                                </Pop>
                                                <div className="mx-auto justify-center items-center text-center">
                                                <Reveal>
                                                    <div>
                                                        <p className="text-justify text-sm mb-3 md:text-base"><strong>Python-based project</strong></p>
                                                        <div className="text-justify text-xs sm:text-xs md:text-base">
                                                            <li>Mastermind Game</li>
                                                        </div>
                                                    </div>
                                                </Reveal>
                                            </div>
                                        </div>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                            <Reveal2>
                                                <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Sep 2020 – June 2021&nbsp;</p>
                                            </Reveal2>
                                            <Reveal>
                                                <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center text-center">
                                                    <p className="text-justify text-sm mb-3 md:text-base"><strong>Java Text-based projects</strong></p>
                                                    <div className="text-justify text-xs sm:text-xs md:text-base">
                                                        <li>Connect Four Game</li>
                                                        <li>Cashier System</li>
                                                        <li>Go Fish Game</li>
                                                        <li>Student Management System</li>
                                                        <li>Library System</li>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        </div>
                                    }</div>
                                    <div className="px-2 justify-center align-center">{
                                        <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[480px] sm:min-h-[415px] md:min-h-[510px] lg:min-h-[400px] xl:min-h-[405px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                            <Reveal2>
                                                <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Sep 2020 – Oct 2020&nbsp;</p>
                                            </Reveal2>
                                            <div className="text-justify text-xs sm:text-xs md:text-base">
                                                <Reveal>
                                                    <div className="sm:mx-[10px] md:mx-[18px] lg:mx-[25px] justify-center items-center">
                                                        <p className="text-justify text-sm mb-3 md:text-base"><strong>Voluntary Work (Maha Vihara Duta Maitreya Monastry, Batam)</strong></p>
                                                        <li>Assisted the vihara personnel with their work, cleaned the temple, and participated in the temple events.</li>
                                                    </div>
                                                </Reveal>
                                            </div>
                                        </div>
                                    }</div>
                                </Slider>
                            </div>
                            <div className="absolute bg-custom-darkblue w-3/4 sm:w-2/3 h-full right-[38px] sm:right-[92px] md:right-[116px] lg:right-[152px] lg:bottom-[-17px] xl:right-[196px] bottom-[-13px] sm:bottom-[-15px] md:bottom-[-18px] rounded-3xl"></div>
                        </div>

                        <div className="mt-14 sm:mt-28 group bg-custom-blue mx-auto rounded-tl-3xl rounded-tr-3xl shadow-lg p-4 sm:p-5 pb-0 sm:pb-0 w-5/6 sm:w-2/3 h-full transition-transform duration-500 ease-in-out">
                            <div className="grid grid-cols-2">
                                <Reveal>
                                    <div className={`font-semibold w-full tablink w3-bottombar w3-hover-light-grey w3-padding ${activeTab === 'Video' ? 'w3-border-red' : ''}`} onClick={() => openCity('Video')}>
                                        Video
                                    </div>
                                </Reveal>
                                <Reveal>
                                    <div className={`font-semibold w-full tablink w3-bottombar w3-hover-light-grey w3-padding ${activeTab === 'News' ? 'w3-border-red' : ''}`} onClick={() => openCity('News')}>
                                        News
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                        <div className="group bg-white mx-auto rounded-bl-3xl rounded-br-3xl shadow-lg pb-7 sm:pb-10 w-5/6 sm:w-2/3 sm:px-3 md:px-5 lg:px-7 h-full transition-transform duration-500 ease-in-out">
                            <div id="Video" className={`w3-container city ${activeTab === 'Video' ? '' : 'hidden'}`}>
                                <div className="mt-10 group bg-custom-blue rounded-3xl shadow-lg p-6 w-full h-auto transition-transform duration-500 ease-in-out">
                                    <Reveal2>
                                        <p className="text-2xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">Sunway Cat 2 Japan APT Video&nbsp;&nbsp;</p>
                                    </Reveal2>
                                    <br />
                                    <Pop>
                                        <div>
                                            <iframe className="w-full h-full sm:h-[50vh] sm:w-full mx-auto" src="https://www.youtube-nocookie.com/embed/Dt9vMojk-Cg?si=C_mg_Oe3GDycRd02" title="Sunway Cat 2 Japan APT Youtube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                            </iframe>
                                        </div>
                                    </Pop>
                                    <br/>
                                </div>
                            </div>

                            <div id="News" className={`w3-container city ${activeTab === 'News' ? '' : 'hidden'}`}>
                                <div className="mt-10 group mx-auto p-3 pt-0 w-full h-70 transition-transform duration-500 ease-in-out">
                                <Reveal2>
                                    <p className="text-2xl sm:text-3xl mx-auto mt-5 text-center text-custom-header font-pureMilk transition-transform duration-500 ease-in-out group-hover:underline group-hover:scale-105">News Article Link about Sunway Cat 2 Japan APT&nbsp;&nbsp;</p>
                                </Reveal2>
                                <br />
                                <table className="w-[100%] mx-auto" style={{borderCollapse: 'collapse'}}>
                                    <tbody>
                                        <tr className="flex justify-center">
                                            {/* @ts-ignore */}
                                            <Pop>
                                                <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue rounded-lg m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                                    <a href="https://www.newsarawaktribune.com.my/drones-protect-forests-from-threats/" target="_blank" rel="noopener noreferrer"
                                                    className="rounded-2xl text-xs sm:text-xs md:text-base block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-link hover:underline flex-grow">
                                                        <Image src="/projects/news/image/newsarawaktribune.png" className="my-4 sm:my-6 px-1 sm:px-2 rounded-2xl" alt="NewsSarawakTribune" width={600} height={400} />
                                                        New Sarawak Tribune
                                                    </a>
                                                </td>
                                            </Pop>
                                            <Pop>
                                                <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue rounded-lg m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                                    <a href="https://dayakdaily.com/swak-forestry-corporation-sunway-university-ink-mou-on-mangrove-forest-management-using-drones/" target="_blank" rel="noopener noreferrer"
                                                    className="rounded-2xl text-xs sm:text-xs md:text-base block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-link hover:underline flex-grow">
                                                        <Image src="/projects/news/image/DayakDaily.png" className="my-4 sm:my-6 px-1 sm:px-2 rounded-2xl" alt="DayakDaily" width={600} height={400}/>
                                                        Dayak Daily
                                                    </a>
                                                </td>
                                            </Pop>
                                        </tr>
                                        <tr className="flex justify-center">
                                            {/* @ts-ignore */}
                                            <Pop>
                                                <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue rounded-lg m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                                    <a href="https://opengovasia.com/advancing-conservation-through-technology/" target="_blank" rel="noopener noreferrer"
                                                    className="rounded-2xl text-xs sm:text-xs md:text-base block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-link hover:underline flex-grow">
                                                        <Image src="/projects/news/image/opengovasia.jpg" className="my-4 sm:my-6 px-1 sm:px-2 rounded-2xl" alt="OpenGovAsia" width={600} height={400}/>
                                                        Open Gov Asia
                                                    </a>
                                                </td>
                                            </Pop>
                                            <Pop>
                                                <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue rounded-lg m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                                    <a href="https://sunwayuniversity.edu.my/news/2023/sunway-university-partners-japanese-companies-and-sarawak-forestry-corporation-mangrove" target="_blank" rel="noopener noreferrer"
                                                    className="rounded-2xl text-xs sm:text-xs md:text-base block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-link hover:underline flex-grow">
                                                        <Image src="/projects/news/image/sunwayUniversity.jpg" className="my-4 sm:my-6 px-1 sm:px-2 rounded-2xl" alt="SunwayUniversity" width={600} height={400}/>
                                                        Sunway University
                                                    </a>
                                                </td>
                                            </Pop>
                                        </tr>
                                        <tr className="flex justify-center">
                                            {/* @ts-ignore */}
                                            <Pop>
                                                <td style={{padding: '2%'}} className="sm:h-full shadow-md bg-custom-blue rounded-lg m-2 sm:m-3 md:m-4 lg:m-5 w-auto transition-transform duration-500 ease-in-out transform hover:shadow-xl hover:scale-1015 flex flex-col flex-grow">
                                                    <a href="https://www.disruptr.com.my/malaysia-japan-collaborate-in-sarawak-mangrove-forest-conservation-and-sustainable-management/" target="_blank" rel="noopener noreferrer"
                                                    className="rounded-2xl text-xs sm:text-xs md:text-base block text-black no-underline transition duration-300 ease-in-out text-center h-full mx-auto justify-center hover:text-custom-link hover:underline flex-grow">
                                                        <Image src="/projects/news/image/disruptr.jpeg" className="my-4 sm:my-6 px-1 sm:px-2 rounded-2xl" alt="Disruptr" width={600} height={400}/>
                                                        Disruptr
                                                    </a>
                                                </td>
                                            </Pop>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </>
        </main>


            <footer className="mt-0 pt-4 border-t border-white">
            <Link href="/">
                <Image
                src="/bg/name logo no bg2.png"
                alt="Logo"
                width={213}
                height={123}
                className="relative mx-auto w-[30%] sm:w-[10%] h-auto mt-3 mb-5"
                />
            </Link>
        </footer>
    </div>
    )
    }

export default Projects;