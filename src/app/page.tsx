"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../components/ThemeToggle";

const NAV_LINKS = [
  ["#experience", "Experience"],
  ["#projects", "My Projects"],
  ["#contact", "Contact Me"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-background dark:bg-dark-background min-h-screen text-text dark:text-dark-text font-sans">
      {/* Navbar */}
      <nav className="max-w-6xl mx-auto px-6 md:px-10 pt-6">
        <div className="flex justify-between items-center pb-4 border-b border-black/10 dark:border-white/10">
          <p className="text-2xl font-bold font-serif">Alex</p>
          <div className="flex items-center gap-2">
            <ul className="hidden md:flex space-x-6 text-lg mr-4">
              {NAV_LINKS.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-accent dark:hover:text-dark-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden p-3 rounded-lg bg-gray-200 dark:bg-gray-700 transition-transform duration-150 ease-out active:scale-[0.97]"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path
                  d={
                    menuOpen
                      ? "M5 5l10 10M15 5L5 15"
                      : "M3 6h14M3 10h14M3 14h14"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <ul id="mobile-menu" className="md:hidden flex flex-col py-2 text-lg">
            {NAV_LINKS.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
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
            <h1 className="text-4xl font-bold font-serif mb-4">
              I&apos;m Alex Wangwe
            </h1>
            <p className="text-xl text-text-primary mb-6">
              Software Developer🕺.
            </p>
            <p className="text-text-primary mb-8">
              I&apos;m passionate about software development as both a creative
              craft and a way to solve problems. I love turning ideas into
              user-centered products and enjoy every step of it. For me, writing
              code isn&apos;t just about features; it&apos;s about crafting
              digital experiences that make life simpler and technology feel
              seamless.
            </p>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h2 className="text-4xl font-serif font-bold mb-8 leading-tight tracking-tight text-balance">
            Passionate about creating exceptional digital product experiences
          </h2>
          <div className="mb-16 flex flex-wrap gap-3">
            <a
              href="mailto:alexanderwangwe@gmail.com"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white dark:hover:text-gray-900 focus-visible:ring-4 focus:outline-none focus-visible:ring-lime-200 dark:focus-visible:ring-lime-800 transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              <span className="relative px-5 py-2.5 transition-colors ease-out duration-150 bg-card dark:bg-dark-card rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Talk to me
              </span>
            </a>

            <a
              href="https://github.com/alexanderwangwe"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 dark:text-white dark:hover:text-gray-900 focus-visible:ring-4 focus:outline-none focus-visible:ring-lime-200 dark:focus-visible:ring-lime-800 transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              <span className="relative px-5 py-2.5 transition-colors ease-out duration-150 bg-card dark:bg-dark-card rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                See my work
              </span>
            </a>
          </div>

          {/* Spacer */}
          <div className="my-16 border-t border-black/10 dark:border-white/10"></div>

          {/* Work Experience Section */}
          <div id="experience" className="mb-10">
            <h2 className="text-2xl font-bold font-serif mb-6">
              Featured experiences :
            </h2>

            <div className="space-y-5">
              <div className="p-4 bg-card dark:bg-dark-card rounded-2xl shadow-card dark:shadow-none border border-transparent dark:border-white/10 transition-[transform,box-shadow] duration-200 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="w-24 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/ptechlogo.png"
                      alt="Company Logo"
                      fill
                      className="p-1"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Software Developer</h3>
                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                      PTech Systems
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      Present - Freelance
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

              <div className="p-4 bg-card dark:bg-dark-card rounded-2xl shadow-card dark:shadow-none border border-transparent dark:border-white/10 transition-[transform,box-shadow] duration-200 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="w-24 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/krayo.png"
                      alt="Company Logo"
                      fill
                      className="p-1"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Mobile Developer</h3>
                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                      Krayo Africa
                    </p>
                    <p className="text-text-muted text-sm mt-1">
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

              <div className="p-4 bg-card dark:bg-dark-card rounded-2xl shadow-card dark:shadow-none border border-transparent dark:border-white/10 transition-[transform,box-shadow] duration-200 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="w-24 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/norwa.png"
                      alt="Company Logo"
                      fill
                      className="p-1"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Web Developer Intern</h3>
                    <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                      Norwa Africa
                    </p>
                    <p className="text-text-muted text-sm mt-1">
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
          <div className="my-16 border-t border-black/10 dark:border-white/10"></div>

          {/*Projects Section */}
          <div id="projects" className="py-16">
            <h2 className="text-2xl font-serif font-bold mb-10 border-b pb-4 inline-block">
              More of my projects
            </h2>
            <div>
              <p className="text-text-primary  mb-4">
                I have worked on various projects, both personal and
                professional, that showcase my skills in software development.
                Check them out in my{" "}
                <Link
                  href="https://github.com/alexanderwangwe"
                  className="text-green-600 dark:text-green-400 underline underline-offset-4"
                >
                  {" "}
                  GitHub
                </Link>
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="py-16">
            <h2 className="text-2xl font-serif font-bold mb-10 border-b pb-4 inline-block">
              My Toolbox:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 max-w-4xl">
              {/* Frontend Development */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-text-primary">
                  Tech Stack 🎨
                </h3>
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
                <h3 className="text-lg font-medium mb-4 text-text-primary">
                  Tools 🛠️
                </h3>
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
            className="py-16 border-t border-black/10 dark:border-white/10"
          >
            <h2 className="text-2xl font-serif font-bold mb-6 inline-block">
              Get in Touch
            </h2>
            <p className="text-text-primary mb-8 max-w-2xl">
              I&apos;m always open to new projects, creative ideas or
              opportunities . Feel free to reach out!
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div>
                <a
                  href="mailto:alexanderwangwe@gmail.com"
                  className="text-green-600 dark:text-green-400 underline underline-offset-4 text-xl"
                >
                  alexanderwangwe@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-black/10 dark:border-white/10 font-mono">
        <div className="max-w-6xl mx-auto px-4 md:flex md:justify-between md:items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Alex Wangwe</h3>
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
          <p className="text-text-muted">
            © {new Date().getFullYear()} Alex Wangwe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
