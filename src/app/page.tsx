"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="bg-background dark:bg-dark-background min-h-screen text-text dark:text-dark-text font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-9 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold font-serif border-b">Alex </h1>
        <div className="flex items-center border-b pb-3">
          <ul className="hidden md:flex space-x-6 text-lg mr-6">
            <li>
              <Link
                href="#experience"
                className="hover:text-accent dark:hover:text-dark-accent transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:text-accent dark:hover:text-dark-accent transition-colors"
              >
                My Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-accent dark:hover:text-dark-accent transition-colors"
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section with Fixed Left Column and Scrollable Right Column */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Column - Fixed Content (Bio and Image) */}
        <div className="md:w-1/2 bg-background dark:bg-dark-background p-6 md:p-10 md:sticky md:top-0 md:h-screen flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <div className="w-48 h-48 rounded-3xl overflow-hidden shadow-lg relative mb-8 mx-auto md:mx-0">
              <Image
                src="/pfp.jpg"
                alt="Profile Picture"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <h2 className="text-4xl font-bold font-serif mb-4">
              I'm Alex Wangwe
            </h2>
            <p className="text-xl text-text-primary mb-6 font-[CutiveMono]">
              Software Developer🕺.
            </p>
            <p className="text-text-primary mb-8">
              I'm passionate about software development as both a creative craft
              and a way to solve problems. I love turning ideas into
              user-centered products and enjoy every step of it. For me, writing
              code isn't just about features; it's about crafting digital
              experiences that make life simpler and technology feel seamless.
            </p>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h3 className="text-4xl font-serif font-bold mb-8 leading-tight">
            Passionate about creating exceptional digital product experiences
          </h3>
          <div className="mb-16">
            <a
              href="mailto:alexanderwangwe@gmail.com"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Talk to me
              </span>
            </a>

            <a
              href="https://github.com/alexanderwangwe"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                See my work
              </span>
            </a>
          </div>

          {/* Spacer */}
          <div className="my-16 border-t border-gray-300"></div>

          {/* Work Experience Section */}
          <div id="experience" className="mb-10">
            <h3 className="text-2xl font-bold font-serif mb-6">
              Featured experiences :
            </h3>

            <div className="space-y-5">
              <div className="p-4 bg-card dark:bg-dark-card rounded-2xl shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="w-24 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/ptechlogo.png"
                      alt="Company Logo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Software Developer</h4>
                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                      PTech Systems
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Present - FreeLance
                    </p>
                    <p className="mt-2 text-sm">
                      Collaborate in designing, developing, and maintaining
                      dynamic company websites and e-commerce platforms.
                      {/* <Link
                        href="https://www.ssatte.com/"
                        className="text-accent hover:underline cursor-pointer text-purple-400"
                      >
                        Check it out here
                      </Link> */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card dark:bg-dark-card rounded-2xl shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="w-24 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/krayo.png"
                      alt="Company Logo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Mobile Developer</h4>
                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                      Krayo Africa
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Nov 2023 - May 2024
                    </p>
                    <p className="mt-2 text-sm">
                      Developed and maintained the Krayo App’s chat feature
                      using Kotlin and Jetpack Compose, ensuring a smooth,
                      reliable user experience through close collaboration with
                      designers and backend teams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card dark:bg-dark-card rounded-2xl shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="w-24 h-10 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/norwa.png"
                      alt="Company Logo"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Web Developer Intern</h4>
                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                      Norwa Africa
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Jan 2023 - Mar 2023
                    </p>
                    <p className="mt-2 text-sm">
                      Assisted in developing and maintaining the company website
                      and CRM system, enhancing usability and backend processes
                      while gaining practical experience with web technologies
                      in an agile environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="my-16 border-t border-gray-300"></div>

          {/*Projects Section */}
          <div id="projects" className="max-w-6xl mx-auto px-3 py-16">
            <h3 className="text-2xl font-serif font-bold mb-10 border-b pb-4 inline-block">
              More of my projects
            </h3>
            <div>
              <p className="text-text-primary  mb-4">
                I have worked on various projects, both personal and
                professional, that showcase my skills in software development.
                Check them out in my{" "}
                <Link
                  href="https://github.com/alexanderwangwe"
                  className="text-green-600 hover:underline text-2xl"
                >
                  {" "}
                  GitHub
                </Link>
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="text-2xl font-serif font-bold mb-10 border-b pb-4 inline-block">
              My Toolbox:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 max-w-4xl">
              {/* Frontend Development */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-text-primary">
                  Tech Stack 🎨
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>TypeScript</li>
                  <li>React Native</li>
                  <li>React.js / Next.js</li>
                  <li>Kotlin / Jetpack Compose</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              {/* Other Skills */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-text-primary">
                  Tools 🛠️
                </h4>
                <ul className="space-y-3 text-text-secondary">
                  <li>Git / GitHub</li>
                  <li>Wordpress/Joomla</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div
            id="contact"
            className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-100"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 inline-block">
              Get in Touch
            </h3>
            <p className="text-text-primary mb-8 max-w-2xl">
              I'm always open to new projects, creative ideas or opportunities .
              Feel free to reach out!
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div>
                <a
                  href="mailto:alexanderwangwe@gmail.com"
                  className="text-accent hover:underline text-green-600 text-2xl"
                >
                  alexanderwangwe@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 font-mono">
        <div className="max-w-6xl mx-auto px-4 md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left mb-6 md:mb-0 font-[CutiveMono]">
            <h4 className="text-xl font-bold">Alex Wangwe</h4>
            <p className="mt-2 text-text-secondary">Front-End Developer</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="https://github.com/alexanderwangwe"
              className="text-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-wangwe/"
              className="text-text-secondary hover:text-accent dark:hover:text-dark-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.strava.com/athletes/95879820"
              className="text-text-secondary  hover:text-accent dark:hover:text-dark-accent transition-colors"
            >
              Strava
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 text-center">
          <p className="text-gray-600 ">
            © {new Date().getFullYear()} Alex Wangwe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
