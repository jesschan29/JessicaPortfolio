import React, {useState} from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../pages/header.jsx';
import Image from "next/image";
import Link from "next/link";
import {Reveal} from '../Components/utils/Reveal';
import {Reveal2} from '../Components/utils/Reveal2';
import {Pop} from '../Components/utils/Pop';

const ContactUs: NextPage = () => {
    const [fullName, setFullName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [submissionResult, setSubmissionResult] = useState<string | null>(null);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if required fields have values
        if (fullName && userMessage) {
            // Successful submission
            setSubmissionResult('SUCCESSFUL');
            window.alert('Successful Submission!');
            window.location.reload();
        } else {
            // Failed submission
            setSubmissionResult('FAILED');
            window.alert('Failed Submission! Please fill in all required fields.');
        }
    };
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-300 via-gray-50 to-gray-300 w-100%">
            <div className=""></div>
            <style jsx>{`
            input[type=text], textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 16px;
                resize: vertical;
            }

            input[type=submit] {
                background-color: #e7ac9a;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            input[type=submit]:hover {
                opacity: 80%;
            }

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

            @font-face{
                font-family: "pureMilk";
                src: url("/pure-milk/Pure Milk.otf")format("opentype");
            }

            .font-pureMilk {
                font-family: "pureMilk";
            }

            .font-bubble {
                font-family: "Just Bubble";
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

            @keyframes upDownAnimation {
            0%, 100% {
                transform: translateY(0%);
            }
            50% {
                transform: translateY(4%);
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

            `}</style>
            <Header></Header>
            <div className="flex grow px-8">
                <Head>
                    <title>Contact Us</title>
                    <meta name="description" content="Contact Us Page" />
                    <link rel="icon" href="/bg/logo icon.png" />
                    <link href="https://db.onlinewebfonts.com/c/ad118fd848f5254b108b7e7bfab6b7b7?family=Just+Bubble" rel="stylesheet" type="text/css"/>
                </Head>
            </div>

            <div className="flex flex-col items-center w-full mx-auto justify-center">
                <Image src="/bg/My Portfolio/3_3.png" alt="bgtop" width={1640} height={900} className="h-screen w-full object-cover sm:object-fill" style={{ zIndex: 1, objectPosition: 'left'}}/>
                <div className="flex w-full h-full mx-auto justify-center align-center absolute inset-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black" style={{ zIndex: 2 }}>
                        <div className="flex justify-center items-end md:items-center md:justify-end">
                            <Pop>
                                <Image src="/bg/contactuslogo.png" alt="contactUs" width={1110} height={651} className="pt-16 md:pt-0 w-[70%] sm:w-4/5 h-auto mx-auto md:mr-0"/>
                            </Pop>
                        </div>
                        <div className="flex justify-center items-start md:items-center md:justify-start md:ml-20">
                            <Reveal>
                                <p className="font-pureMilk text-[70px] sm:text-[90px]">Contact Us</p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <main className="flex-grow justify-center items-center">
            <>
                <div className="w-full">
                    <div>
                        <div className="pt-7 md:pt-10 lg:pt-11 pb-12 md:pb-20 lg:pb-14 xl:pb-20 w-100% xl:scale-90">
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

                                            <div className="sm:col-span-1 min-w-[280px] sm:min-w-[230px] md:min-w-[270px] lg:min-w-[340px] 3xl:min-w-[530px] mx-0 sm:ml-[-7px] md:ml-[-14px] lg:ml-[-20px] xl:ml-[-20px] 3xl:ml-[-50px] flex flex-col justify-center">
                                                <div className="group mx-0 flex flex-col justify-center">
                                                    <div className="mr-2 lg:mx-0 hover:text-custom-link">
                                                        <a href="mailto:jessicachan292003@gmail.com">
                                                            <Reveal2>
                                                                <div>
                                                                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[43px] xl:my-[3px] 3xl:my-[15px] 3xl:text-[55px] text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Send Email&nbsp;&nbsp;</p>
                                                                    <ul className="list-disc list-inside text-[16px] sm:text-[13px] md:text-base lg:text-xl xl:text-2xl 3xl:text-[34px] pl-3">
                                                                        <li className="xl:mb-[5px] 2xl:mb-[10px] 3xl:mb-[35px]">jessicachan292003@gmail.com</li>
                                                                    </ul>
                                                                </div>
                                                            </Reveal2>
                                                        </a>
                                                    </div>
                                                    <div className="mr-2 mt-5 hover:text-custom-link  3xl:mt-0">
                                                        <a href="tel:+60176944154">
                                                            <Reveal2>
                                                                <div>
                                                                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[43px] xl:my-[3px] 3xl:my-[15px] 3xl:text-[55px] text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Phone Number&nbsp;&nbsp;</p>
                                                                    <ul className="list-disc list-inside text-[16px] sm:text-[13px] md:text-base lg:text-xl xl:text-2xl 3xl:text-[34px] pl-3">
                                                                        <li>(+62)821 8559 2779</li>
                                                                    </ul>
                                                                </div>
                                                            </Reveal2>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="3xl:pb-[10px] absolute bg-custom-darkblue w-[80%] md:w-[70%] xl:w-[65%] 2xl:w-[55%] h-full right-[24px] sm:right-[50px] md:right-[88px] lg:right-[121px] lg:bottom-[-20px] xl:right-[195px] 2xl:right-[315px] 3xl:right-[395px] xl:bottom-[-25px] 2xl:bottom-[-27px] 3xl:bottom-[-35px] bottom-[-14px] sm:bottom-[-16px] md:bottom-[-18px] rounded-3xl" style={{zIndex: 0}}></div>
                                </div>
                            </Pop>

                                {/*<div className="flex-grow py-10 pt-3 sm:py-20 lg:py-30 w-full">
                                    <Pop>
                                        <div className="mt-10 group rounded-3xl bg-custom-blue mx-auto shadow-lg p-7 sm:p-12 w-3/4 h-3/4 sm:w-2/3 sm:h-2/3 transition-transform duration-500 ease-in-out">
                                            <Reveal2>
                                                <p className="text-2xl md:text-3xl text-custom-header font-pureMilk transition-transform duration-500 ease-in-out">Contact Us Form&nbsp;&nbsp;</p>
                                            </Reveal2>
                                            <form method="POST" name="ContactUs" onSubmit={handleFormSubmit} className="pl-0 sm:pl-4 pt-3">
                                                <Reveal>
                                                    <div>
                                                        <label htmlFor="fullName">Full Name</label>
                                                        <input type="text" id="fullName" name="fullName" placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                                    </div>
                                                </Reveal>
                                                <Reveal>
                                                    <div>
                                                        <label htmlFor="user_message">Your Queries</label>
                                                        <textarea id="user_message" name="user_message" placeholder="Please Write Your Queries Here..." style={{ height: '200px' }} value={userMessage} onChange={(e) => setUserMessage(e.target.value)}></textarea>
                                                    </div>
                                                </Reveal>
                                                <br></br>
                                                <Reveal>
                                                    <div className="flex items-center justify-center">
                                                        <input type="submit" value="Submit" name="ContactUs" />
                                                    </div>
                                                </Reveal>
                                            </form>
                                        </div>
                                    </Pop>
                                </div>*/}
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


export default ContactUs;

