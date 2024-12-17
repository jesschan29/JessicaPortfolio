import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../pages/header.jsx';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import {Reveal} from '../Components/utils/Reveal';
import {Reveal2} from '../Components/utils/Reveal2';
import {Pop} from '../Components/utils/Pop';


const Home: NextPage = () => {
    const [isScrolled, setIsScrolled] =useState(false);

    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const cardSliderSettings = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 1300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };

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
          animation: zoom-in 10s infinite;
        }

        .looped-zoom {
          animation-delay: 8s;
        }

        @keyframes upDownAnimation {
          0%, 100% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(5%);
          }
        }
        .animate-up-down {
          animation: upDownAnimation 6s infinite;
        }

        @keyframes leftRightAnimation {
          0%, 100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(-10%);
          }
        }
        .animate-left-right {
          animation: leftRightAnimation 7s infinite;
        }

        .grid-container {
          display: grid;
          gap: 16px;
          display: inline-block;
          text-align: center;
        }

        @media (min-width: 768px) {
          .grid-container {
            display: grid;
            grid-template-columns: 70% 20%;
            text-align: left;
          }
        }

      `}</style>
      <Header>
      </Header>

      <div className="flex grow px-8">
          <Head>
            <title>Jessica Portfolio</title>
            <meta name="description" content="Welcome to My Portfolio" />
            <link rel="icon" href="/bg/logo icon.png" />
            <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
          </Head>
      </div>

      <div className="flex flex-col items-center w-full mx-auto justify-center">
        <Image src="/bg/bghome_5.png" alt="bgtop" width={564} height={317} className="h-screen w-full object-cover sm:object-fill" style={{ zIndex: 1, objectPosition: 'left'}}/>

        <div className="flex w-full h-full mx-auto justify-center align-center absolute inset-0">
          <div className="grid grid-row-2 gap-2 text-black" style={{ zIndex: 2 }}>
            <div className="flex justify-center items-end">
              <Reveal>
                <p className="font-pureMilk text-[70px] pt-16 sm:text-[90px]">My Portfolio</p>
              </Reveal>
            </div>
            <div className="flex justify-center items-start" style={{fontFamily: 'Times New Roman'}}>
              <Reveal>
                <p className="font-semibold text-[30px] sm:text-[40px]">Jessica</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow justify-center items-center">
        <>
          <div className="w-full">
            <div>
              <div className="mb-10 mt-[-140px] pt-52 sm:mb-20 lg:my-30 min-h-screen w-100% xl:scale-90">
                <Pop>
                  <div className="mb-10 relative transition-transform duration-1000 ease-in-out hover:scale-105">
                    <div className="relative mt-1 xl:my-[15px] 3xl:mt-[20px] 3xl:mb-[70px] rounded-3xl justify-center items-center bg-custom-blue mx-auto p-7 w-[80%] h-3/4 md:w-[72%] xl:w-[65%] 2xl:w-[55%]" style={{zIndex:1}}>
                        <br></br>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-0 mt-[-20px]">
                          <div className="mt-0 items-left grid grid-rows-1 mx-2 lg:max-w-[270px] xl:max-w-[330px] 3xl:max-w-[400px] md:ml-[-8px] lg:ml-[15px] lg:mb-[12px] lg:mt-[-4px] xl:mt-[10px] xl:ml-[10px]">
                              <Pop>
                                  <div className="flex flex-col justify-center items-center rounded-2xl mx-auto w-[90%] md:w-5/6 lg:w-[75%]">
                                      <Image src="/Jessica2.jpg" alt="Jessica2 Profile Picture" className="h-full w-full rounded-2xl" width={670} height={797} />
                                  </div>
                              </Pop>
                              <div className="my-4 sm:my-3 lg:mt-3.5 lg:mb-0 items-center justify-center w-2/3 h-2/3 mx-auto sm:h-full sm:w-full bg-transparent flex flex-row">
                                  <Pop>
                                      <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full hover:scale-105">
                                      <a href="https://wa.me/+6282185592779"><Image src="/images/Contacts/whatsapp.png" alt="Whatsapp" className="h-full min-h-8 min-w-8 lg:min-h-9 lg:min-w-12 inline-block" width={40} height={40}></Image></a>
                                      </div>
                                  </Pop>
                                  <Pop>
                                      <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full hover:scale-105">
                                        <a href="mailto:jessicachan292003@gmail.com"><Image src="/images/Contacts/gmail.png" alt="Gmail" className="min-h-7 min-w-8 lg:min-h-9 lg:min-w-12 inline-block" width={40} height={40}></Image></a>
                                      </div>
                                  </Pop>
                                  <Pop>
                                      <div className="inline-block transition-transform duration-300 ease-in-out w-auto mx-2 items-center h-1/10 justify-center hover:shadow-xl hover:rounded-full hover:scale-105">
                                      <a href="https://www.linkedin.com/in/jessica-jessica-b2910224b/"><Image src="/images/Contacts/linkedin.png" alt="LinkedIn" className="min-h-8 min-w-8 lg:min-h-9 lg:min-w-12 inline-block" width={40} height={40}></Image></a>
                                      </div>
                                  </Pop>
                              </div>
                          </div>

                          <div className="sm:col-span-1 min-w-[260px] sm:min-w-[230px] md:min-w-[270px] lg:min-w-[340px] 3xl:min-w-[530px] mx-0 sm:ml-[-7px] md:ml-[-14px] lg:ml-[-20px] xl:ml-[-20px] 3xl:ml-[-50px] flex flex-col justify-center">
                            <div className="group mx-0 flex flex-col justify-center">
                              <div className="mx-2 lg:mx-0 hover:text-custom-link">
                                <Reveal2>
                                  <div>
                                    <p className="2xl:my-[10px] text-2xl lg:text-3xl xl:text-[43px] 3xl:text-[55px] text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">
                                      About Me&nbsp;&nbsp;
                                    </p>
                                    <p className="leading-loose my-3 text-justify text-sm lg:text-xl font-semibold">
                                      Hey there!🎉 I&apos;m Jessica, a passionate and driven individual from Indonesia 🇮🇩. I’ve recently graduated with a Bachelor’s degree in Information Technology, specializing in Computer Networking and Security from Sunway University! 🎓✨ I'm all about exploring the exciting world of tech and ready to dive into new adventures! 🚀💻"
                                    </p>
                                  </div>
                                </Reveal2>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  <div className="3xl:pb-[10px] absolute bg-custom-darkblue w-[80%] md:w-[70%] xl:w-[65%] 2xl:w-[55%] h-full right-[24px] sm:right-[50px] md:right-[88px] lg:right-[121px] lg:bottom-[-20px] xl:right-[180px] 2xl:right-[315px] 3xl:right-[395px] xl:bottom-[-25px] 2xl:bottom-[-27px] 3xl:bottom-[-35px] bottom-[-14px] sm:bottom-[-16px] md:bottom-[-18px] rounded-3xl" style={{zIndex: 0}}></div>
                  </div>
                </Pop>

                <div className="items-center justify-center bg-custom-blue mt-16 pb-7 shadow-lg shadow-gray-300/100 h-1/2 w-full mx-auto px-2 sm:px-6 md:px-8 lg:px-10 hd:px-30">
                  <Reveal>
                    <p className="text-3xl mb-2 pt-2 sm:text-3xl lg:text-3xl text-custom-header font-pureMilk justify-center text-center">
                      Languages
                    </p>
                  </Reveal>
                  <div className="justify-center mx-auto">
                    <Slider {...cardSliderSettings} className="justify-center mx-auto">
                      <Pop>
                        <div className="group m-2 sm:mx-auto justify-center align-center h-full">
                          <Card className="mx-auto w-[110px] h-[155px] sm:w-[190px] sm:h-[240px] md:w-[170px] bg-gradient-to-br from-violet-500 to-fuchsia-500 relative justify-center text-center items-center rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
                            <CardBody className="relative justify-center items-center m-2">
                              <CircularProgress
                                classNames={{
                                  svg: "w-24 h-24 sm:w-36 sm:h-36 drop-shadow-md pt-1",
                                  indicator: "stroke-white",
                                  track: "stroke-white/10",
                                  value: "text-2xl sm:text-3xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                }}
                                value={80}
                                strokeWidth={4}
                                showValueLabel={true}
                              />
                              <CardFooter className="justify-center items-center pt-2">
                                <Chip
                                  className="border-[1px] rounded-3xl border-white text-white/90 text-sm font-semibold p-1 sm:p-2 inline-block"
                                >
                                  English
                                </Chip>
                              </CardFooter>
                            </CardBody>
                          </Card>
                        </div>
                      </Pop>
                      <Pop>
                        <div className="group m-2 sm:mx-auto justify-center align-center h-full">
                          <Card className="mx-auto w-[110px] h-[155px] sm:w-[190px] sm:h-[240px] md:w-[170px] bg-gradient-to-br from-violet-500 to-fuchsia-500 relative justify-center text-center items-center rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
                            <CardBody className="relative justify-center items-center m-2">
                              <CircularProgress
                                classNames={{
                                  svg: "w-24 h-24 sm:w-36 sm:h-36 drop-shadow-md pt-1",
                                  indicator: "stroke-white",
                                  track: "stroke-white/10",
                                  value: "text-2xl sm:text-3xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                }}
                                value={70}
                                strokeWidth={4}
                                showValueLabel={true}
                              />
                              <CardFooter className="justify-center items-center pt-2">
                                <Chip
                                  className="border-[1px] rounded-3xl border-white text-white/90 text-sm font-semibold p-1 sm:p-2 inline-block"
                                >
                                  Malay
                                </Chip>
                              </CardFooter>
                            </CardBody>
                          </Card>
                        </div>
                      </Pop>
                      <Pop>
                        <div className="group m-2 sm:mx-auto justify-center align-center h-full">
                          <Card className="mx-auto w-[110px] h-[155px] sm:w-[190px] sm:h-[240px] md:w-[170px] bg-gradient-to-br from-violet-500 to-fuchsia-500 relative justify-center text-center items-center rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
                            <CardBody className="relative justify-center items-center m-2">
                              <CircularProgress
                                classNames={{
                                  svg: "w-24 h-24 sm:w-36 sm:h-36 drop-shadow-md pt-1",
                                  indicator: "stroke-white",
                                  track: "stroke-white/10",
                                  value: "text-2xl sm:text-3xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                }}
                                value={100}
                                strokeWidth={4}
                                showValueLabel={true}
                              />
                              <CardFooter className="justify-center items-center pt-2">
                                <Chip
                                  className="border-[1px] rounded-3xl border-white text-white/90 text-sm font-semibold p-1 sm:p-2 inline-block"
                                >
                                  Indonesia
                                </Chip>
                              </CardFooter>
                            </CardBody>
                          </Card>
                        </div>
                      </Pop>
                      <Pop>
                      <div className="group m-2 sm:mx-auto justify-center align-center h-full">
                        <Card className="mx-auto w-[110px] h-[155px] sm:w-[190px] sm:h-[240px] md:w-[170px] bg-gradient-to-br from-violet-500 to-fuchsia-500 relative justify-center text-center items-center rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
                          <CardBody className="relative justify-center items-center m-2">
                            <CircularProgress
                              classNames={{
                                svg: "w-24 h-24 sm:w-36 sm:h-36 drop-shadow-md pt-1",
                                indicator: "stroke-white",
                                track: "stroke-white/10",
                                value: "text-2xl sm:text-3xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                              }}
                              value={70}
                              strokeWidth={4}
                              showValueLabel={true}
                            />
                            <CardFooter className="justify-center items-center pt-2">
                              <Chip
                                className="border-[1px] rounded-3xl border-white text-white/90 text-sm font-semibold p-1 sm:p-2 inline-block"
                              >
                                Mandarin
                              </Chip>
                            </CardFooter>
                          </CardBody>
                        </Card>
                      </div>
                      </Pop>
                      <Pop>
                      <div className="group m-2 mr-0 sm:mx-auto justify-center align-center h-full">
                        <Card className="w-[110px] h-[155px] sm:w-[190px] sm:h-[240px] md:w-[170px] mx-auto bg-gradient-to-br from-violet-500 to-fuchsia-500 relative justify-center text-center items-center rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
                          <CardBody className="relative justify-center items-center m-2">
                            <CircularProgress
                              classNames={{
                                svg: "w-24 h-24 sm:w-36 sm:h-36 drop-shadow-md pt-1",
                                indicator: "stroke-white",
                                track: "stroke-white/10",
                                value: "text-2xl sm:text-3xl font-semibold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                              }}
                              value={70}
                              strokeWidth={4}
                              showValueLabel={true}
                            />
                            <CardFooter className="justify-center items-center pt-2">
                              <Chip
                                className="border-[1px] rounded-3xl border-white text-white/90 text-sm font-semibold p-1 sm:p-2 pr-0 inline-block"
                              >
                                Fujian
                              </Chip>
                            </CardFooter>
                          </CardBody>
                        </Card>
                      </div>
                      </Pop>
                    </Slider>
                  </div>
                </div>

                <div>
                  <div className="flex-grow py-5 sm:py-7 w-full">
                    <div className="mt-5 flex justify-center items-center mx-auto sm:w-2/3 w-3/4 h-full transition-transform duration-500 ease-in-out">
                      <Reveal>
                        <Image src="/images/EDUCATION AND ACHIEVEMENTS.png" alt="Education and Achievement RoadMap" width={800} height={2000}></Image>
                      </Reveal>
                    </div>

                    <div className={`grid-container ${'grid-cols-1 sm:grid-cols-2'} mx-5 md:mx-auto justify-center items-center`}>
                      <Reveal2>
                        <div>
                          <Image src="/images/extracurricular.png" className="w-full h-full" alt="Extracurricular Activities" width={2000} height={800}></Image>
                        </div>
                      </Reveal2>
                      <Reveal2>
                        <div><p className="w-full text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">
                          Extracurricular Activities</p>
                          </div>
                      </Reveal2>
                    </div>

                    <div className="relative transition-transform duration-1000 ease-in-out">
                      <div className="relative mt-20 group rounded-3xl justify-center align-center bg-custom-blue mx-auto shadow-lg p-7 sm:p-12 w-3/4 h-3/4 sm:w-2/3 sm:h-2/3 transition-transform duration-500 ease-in-out" style={{zIndex: 1}}>
                        <Reveal>
                          <p className="text-3xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Skills</p>
                        </Reveal>
                          <div className="h-full">
                            <Slider {...sliderSettings}>
                              <div className="px-2 justify-center align-center h-full">{
                                <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[430px] sm:min-h-[290px] md:min-h-[335px] lg:min-h-[290px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                  <Reveal2>
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Network and Security Skills&nbsp;</p>
                                  </Reveal2>
                                  <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4 font-semibold`}>
                                    <Reveal>
                                      <div>
                                        <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Wireshark</p>
                                        <div className="w-100% bg-gray-200 overflow-hidden">
                                          <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                            <p>90%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Reveal>
                                    <Reveal>
                                      <div>
                                        <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Cisco Packet Tracer</p>
                                        <div className="w-100% bg-gray-200 overflow-hidden">
                                          <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                            <p>90%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Reveal>
                                    <Reveal>
                                      <div>
                                        <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Configure Router, Switch, PC, and many more</p>
                                        <div className="w-100% bg-gray-200 overflow-hidden">
                                          <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                            <p>90%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Reveal>
                                    <Reveal>
                                      <div>
                                        <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Network and Computer Security</p>
                                        <div className="w-100% bg-gray-200 overflow-hidden">
                                          <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                            <p>90%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Reveal>
                                  </div>
                                </div>
                              }</div>
                              <div className="px-2 justify-center align-center h-full">{
                                <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[430px] sm:min-h-[290px] md:min-h-[335px] lg:min-h-[290px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                  <Reveal2>
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Programming Languages&nbsp;</p>
                                  </Reveal2>
                                  <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4 w-full font-semibold`}>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">HTML, CSS, Javascript</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                          <p>90%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">PHP, SQL</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-1/2 bg-custom-skills`}>
                                          <p>50%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Java, and Python</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                                          <p>80%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Next.js, TailwindCSS</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-5/6 bg-custom-skills`}>
                                          <p>90%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                  </div>
                                </div>
                              }</div>
                              <div className="px-2 justify-center align-center">{
                                <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[430px] sm:min-h-[290px] md:min-h-[335px] lg:min-h-[290px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                  <Reveal2>
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Operating System Skills&nbsp;</p>
                                  </Reveal2>
                                  <div className={`grid ${'grid-rows-2'} gap-4 font-semibold`}>
                                    <Reveal>
                                      <div>
                                        <p className="leading-loose group text-center text-xs sm:text-xs md:text-base mx-auto">Windows</p>
                                        <div className="sm:w-[60%] w-[100%] bg-gray-200 overflow-hidden sm:mx-auto">
                                          <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                                            <p>100%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Reveal>
                                    <Reveal>
                                      <div>
                                        <p className="leading-loose group text-center text-xs sm:text-xs md:text-base">Linux OS (Kali, Ubuntu, OpenSUSE, Parrot, etc)</p>
                                        <div className="sm:w-[60%] w-[100%] bg-gray-200 overflow-hidden sm:mx-auto">
                                          <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                                            <p>80%</p>
                                          </div>
                                        </div>
                                      </div>
                                    </Reveal>
                                  </div>
                                </div>
                              }</div>
                              <div className="px-2 justify-center align-center h-full">{
                                <div className="group rounded-3xl bg-white mt-5 mx-auto shadow-md p-12 px-3 w-full min-h-[430px] sm:min-h-[290px] md:min-h-[335px] lg:min-h-[290px] transition-transform duration-500 ease-in-out hover:shadow-xl flex flex-col items-center justify-center">
                                  <Reveal2>
                                    <p className="text-xl sm:text-3xl lg:text-3xl text-custom-header font-pureMilk underline text-center mb-4">&nbsp;Others&nbsp;</p>
                                  </Reveal2>
                                  <div className={`grid ${'grid-cols-1 sm:grid-cols-2'} gap-4 font-semibold`}>
                                  <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Microsoft Word, Excel, Powerpoint</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                                          <p>100%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Google Docs, Sheets, Slides</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-full bg-custom-skills`}>
                                          <p>100%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Adobe Photoshop, Canva, Davinci Resolve</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-4/5 bg-custom-skills`}>
                                          <p>80%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                    <Reveal>
                                    <div>
                                      <p className="leading-loose group text-justify text-xs sm:text-xs md:text-base">Adobe Illustrator, Inkscape, Gravit designer, and Pixlr</p>
                                      <div className="w-100% bg-gray-200 overflow-hidden">
                                        <div className={`align-right px-10 text-black w-2/3 bg-custom-skills`}>
                                          <p>60%</p>
                                        </div>
                                      </div>
                                    </div>
                                    </Reveal>
                                  </div>
                                </div>
                              }</div>
                            </Slider>
                        </div>
                      </div>
                      <div className="absolute bg-custom-darkblue w-3/4 sm:w-2/3 h-full right-[38px] sm:right-[92px] md:right-[116px] lg:right-[152px] lg:bottom-[-17px] xl:right-[196px] bottom-[-13px] sm:bottom-[-15px] md:bottom-[-18px] rounded-3xl" style={{zIndex: 0}}></div>
                    </div>


                    <br></br>

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

export default Home
