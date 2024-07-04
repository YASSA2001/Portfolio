"use client";

import { Roboto_Slab } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import profile from "./images/profile.png";
import backend_icon from "@/app/images/backend_icon.png";
import frontend_icon from "@/app/images/fontend_icon.png";
import background from "@/app/images/background.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import facebook from "@/app/icons/facebook.png";
import linkedin from "@/app/icons/linkedin.png";
import inster from "@/app/icons/inster.png";
import github from "@/app/icons/github.png";
import html from "@/app/icons/html.png";
import react from "@/app/icons/react.png";
import js from "@/app/icons/js.png";
import css from "@/app/icons/css.png";
import nextjs from "@/app/icons/nextjs.png";
import mongodb from "@/app/icons/mongodb.png";
import sql from "@/app/icons/sql.png";
import nodejs from "@/app/icons/nodejs.png";
import java from "@/app/icons/java.png";
import php from "@/app/icons/php.png";
import go_agro from "@/app/images/go_agro.png";
import news from "@/app/images/news.png";
import seo from "@/app/icons/seo.png"
import { motion } from "framer-motion"
import { useState } from "react";


const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {

  const [darkmode , setDarkMode] = useState(false)
  const [text] = useTypewriter({
    words: ["Yasindu Pasanjith"],
    loop: true,
    typeSpeed: 120,
    delaySpeed: 2000,
  });

  const [text1] = useTypewriter({
    words: ["Web Developer"],
    loop: true,
    typeSpeed: 120,
  });

  return (
    <div className={darkmode? "dark:bg-black": "max-w-full  "}>
      
      <main className="max-w-fit">
        {/* Navigation bar */}
        <section>
          <nav className="flex flex-row justify-between items-center gap-10 p-4">
            <h1 className={roboto_slab.className}>Yasindu Pasanjith</h1>
            <ul className="flex flex-row gap-5 ml-auto">
              <li>
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkmode)} size={25} />
              </li>
              <li className="bg-sky-600 px-4 py-1 text-xl text-white rounded-md">
                <a href="https://drive.google.com/file/d/1BK84RVcEUOAlyr3WdJCR6IllgYfGkQhT/view?usp=sharing">
                  Resume
                </a>
              </li>
              
              <li>
                <h1 className="bg-sky-600 px-4 py-1 text-xl text-white rounded-md">Contact</h1>
              </li>
              
            </ul>
          </nav>
        </section>

        {/* About me */}
        <section
          style={{ position: "relative" }}
          className="relative w-full flex justify-center items-center "
        >
          <Image
            src={background}
            alt="Background"
            className="background w-full h-3/5 object-cover backdrop-blur-md lg:h-1/5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center lg:flex-row xl:flex-row">
          
           <Image
              src={profile}
              alt="Profile Picture"
              className="w-56 h-auto sm:w-40 sm:h-auto lg:w-5/12 lg:h-auto -mt-20 mb-16"
            />
           
            <div className="flex flex-col items-center -mt-36">
              <h1 className="text-3xl text-white lg:text-6xl">{text}</h1>
              <h2 className="text-yellow-500 font-bold lg:text-3xl">
                {text1}
                <Cursor />
              </h2>
            </div>
          </div>
        </section>

        {/* Social */}
        <section className="social flex justify-center items-center mt-5   ">
          <div className="flex flex-raw gap-4 justify-center items-center ">
           
           <motion.div
            whileHover={{scale:1.3}}
           >
           <a href="">
              <Image src={facebook} className="w-10" alt="" />
            </a>
           </motion.div>
           <motion.div
            whileHover={{scale:1.3}}
           >
           <a href="">
              <Image src={inster} className="w-10" alt="" />
            </a>
           </motion.div>
           <motion.div
            whileHover={{scale:1.3}}
           >
           <a href="">
              <Image src={linkedin} className="w-10" alt="" />
            </a>
           </motion.div>
           <motion.div
            whileHover={{scale:1.3}}
           >
           <a href="">
              <Image src={github} className="w-10" alt="" />
            </a>
           </motion.div>
           
          </div>
        </section>

        {/* Services */}
        <section className="service flex flex-col items-center mt-28 lg:h-screen   ">
          <div className="w-full px-4">
            <h1 className="text-2xl bg-black text-white w-full text-center py-3 font-bold">SERVICES</h1>
          </div>
          
          <div className="p-5 grid grid-rows-3 gap-4 lg:grid-cols-3">
            
            <div className="bg-amber-400 px-4 py-4 w-full flex flex-col items-center rounded-xl">
              <Image
                src={frontend_icon}
                alt="Backend Icon"
                className="w-20 sm:w-40 lg:w-40"
              />
              <h1 className="text-2xl font-bold p-4">Frontend Developing</h1>
              <p>
                I am a frontend developer specializing in HTML, CSS, JavaScript,
                React.js, and Next.js. I create modern, responsive web
                applications that are interactive and user-friendly. My work
                focuses on building structured, styled web pages and performant
                user interfaces, leveraging server-side rendering and static
                site generation for optimal performance and SEO. Explore my
                projects to see my skills in action.
              </p>
            </div>
           

          
           <div className="bg-amber-400 px-4 py-4 w-full flex flex-col items-center rounded-xl">
              <Image
                src={backend_icon}
                alt="Frontend Icon"
                className="w-20 sm:w-40 lg:w-40 "
              />
              <h1 className="text-2xl font-bold p-4">Backend Developing</h1>
              <p>
                I am a full-stack developer skilled in HTML, CSS, JavaScript,
                React.js, Next.js, Node.js, PHP, and Java. I create modern,
                responsive web applications and work with SQL and MongoDB
                databases. Explore my projects to see my work in action.
              </p>
            </div>

  
          
         
          <div className="bg-amber-400 px-4 py-4 w-full flex flex-col items-center rounded-xl">
            <Image
                src={seo}
                alt="Backend Icon"
                className="w-20 sm:w-40 lg:w-40"
              />
              <h1 className="text-2xl font-bold p-4">SEO Optimization</h1>
              <p>
                I specialize in SEO optimization, enhancing the visibility and
                ranking of web applications on search engines. By implementing
                best practices and effective strategies, I ensure websites are
                user-friendly, fast, and search engine optimized. Explore my
                projects to see my expertise in action.
              </p>
            </div>
         
          </div>
        </section>

        {/* projects */}
        <section className="flex flex-col justify-center items-center mb-5 ">
        <div className="w-full px-4 mb-4">
            <h1 className="text-2xl bg-black text-white w-full text-center py-3 font-bold">PROJECTS</h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 px-4 lg:flex-row xl:flex-row">
            <div className="flex flex-col items-center justify-center bg-slate-300 w-full h-72 rounded-lg lg:px-2 xl:px-2">
              <Image
                src={go_agro}
                alt="Frontend Icon"
                className="w-11/12 sm:w-40 lg:w-96"
              />
              <h1 className="text-lg mt-5">Go Agro</h1>
            </div>

            <div className="flex flex-col items-center justify-center bg-slate-300 w-full h-72 rounded-lg lg:px-2 xl:px-2">
              <Image
                src={news}
                alt="Frontend Icon"
                className="w-11/12 sm:w-40 lg:w-96"
              />
              <h1 className="text-lg mt-5">News blog</h1>
            </div>
          </div>
        </section>

        {/*Technologies*/}
        <section className=" flex flex-col items-center  mt-20 mb-6">
        <div className="w-full px-4 mb-8">
            <h1 className="text-2xl bg-black text-white w-full text-center py-3 font-bold">TECHNOLOGIES</h1>
          </div>
          <div className="grid grid-cols-4 gap-x-10 gap-y-6 lg:gap-x-28">
            <Image src={react} className="w-16" />
            <Image src={nextjs} className="w-16" />
            <Image src={html} className="w-16" />
            <Image src={js} className="w-16" />
            <Image src={css} className="w-16" />
            <Image src={nodejs} className="w-16" />
            <Image src={java} className="w-16" />
            <Image src={php} className="w-16" />
            <Image src={mongodb} className="w-16" />
            <Image src={sql} className="w-16" />
          </div>
        </section>
      </main>
    </div>
  );
}
