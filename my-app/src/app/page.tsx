import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 pt-16"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8 text-center lg:text-left">
                {/* Animated text */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    <span className="block">Hi, I&apos;m</span>
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300 animate-gradient">
                      Edgar
                    </span>
                  </h1>

                  {/* Subtitle with typing animation */}
                  <p className="text-xl md:text-2xl text-teal-100">
                    UI/UX Designer crafting beautiful and intuitive digital
                    experiences
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-semibold hover:opacity-90 transition-opacity transform hover:scale-105">
                    <span className="relative z-10">View Projects</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  <a
                    href="/Requillo Resume.pdf"
                    download
                    className="group relative px-8 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Download Resume</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column - Image/Animation */}
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[600px]">
                  {/* Decorative elements */}
                  <div className="absolute inset-0">
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
                  </div>

                  {/* Main image container with new design */}
                  <div className="relative w-full h-full">
                    {/* Background shapes */}
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/30 to-transparent rounded-bl-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-400/30 to-transparent rounded-tr-3xl"></div>
                    </div>

                    {/* Image frame with border effect */}
                    <div className="absolute inset-4 bg-slate-800/20 rounded-2xl backdrop-blur-sm border border-teal-500/20">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 border-2 border-teal-500/30 animate-pulse"></div>
                        <div className="absolute inset-0 border-2 border-emerald-400/20 animate-pulse delay-75"></div>
                      </div>

                      {/* Main image */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl"></div>
                          <Image
                            src="/profile.jpg"
                            alt="Edgar's Profile"
                            width={500}
                            height={500}
                            className="rounded-xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                            priority
                          />
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-3 -right-3 w-16 h-16 bg-teal-500/20 rounded-full backdrop-blur-sm border border-emerald-400/30 animate-float"></div>
                      <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-emerald-400/20 rounded-full backdrop-blur-sm border border-teal-500/30 animate-float-delayed"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Image and Quick Info */}
              <div className="lg:col-span-4">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-300/20 rounded-xl transform rotate-3"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-300/20 rounded-xl transform -rotate-3"></div>
                    <div className="absolute inset-0 bg-gray-800 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/about-profile.jpg"
                          alt="Edgar's Profile"
                          width={500}
                          height={500}
                          className="rounded-2xl object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-600">UI/UX Designer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Davao City, Philippines
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        edgar.requillo@hcdc.edu.ph
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Main Content */}
              <div className="lg:col-span-8 space-y-6">
                {/* Introduction */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-800 leading-relaxed">
                    A passionate UI/UX Designer with expertise in creating
                    intuitive and engaging digital experiences. Focused on
                    user-centered design principles and creating beautiful
                    interfaces that solve real user problems.
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Core Skills */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Core Skills
                    </h3>
                    <div className="space-y-4">
                      {[
                        { skill: "UI Design", level: "95%" },
                        { skill: "UX Research", level: "90%" },
                        { skill: "Prototyping", level: "92%" },
                        { skill: "User Testing", level: "90%" },
                      ].map((item) => (
                        <div key={item.skill} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">
                              {item.skill}
                            </span>
                            <span className="text-sm text-gray-500">
                              {item.level}
                            </span>
                          </div>
                          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
                              style={{ width: item.level }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Experience
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900">
                          Senior UI/UX Designer
                        </h5>
                        <p className="text-gray-800 text-sm">
                          Design Studio Inc. • 2022 - Present
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900">
                          UX Designer
                        </h5>
                        <p className="text-gray-800 text-sm">
                          Creative Solutions • 2020 - 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-semibold hover:opacity-90 transition-opacity transform hover:scale-105"
                  >
                    Let&apos;s Connect
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 bg-gradient-to-b from-white to-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto"></div>
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                A showcase of my recent work and design projects, demonstrating
                expertise in UI/UX design and development.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                    alt="E-commerce Redesign"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    E-commerce Platform Redesign
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete UI/UX redesign of an e-commerce platform focusing
                    on user experience and conversion optimization.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                      UI Design
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                      UX Research
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Figma
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80"
                    alt="Mobile App Design"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Fitness App Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mobile app design for a fitness tracking application with
                    focus on user engagement and motivation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                      Mobile UI
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                      Prototyping
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      Adobe XD
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                    alt="Dashboard Design"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complex data visualization dashboard design for business
                    analytics platform.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                      Dashboard
                    </span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                      Data Viz
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      Sketch
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    View Project
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* View All Projects Button */}
            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-semibold hover:opacity-90 transition-opacity transform hover:scale-105"
              >
                View All Projects
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto"></div>
              <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential
                opportunities? I&apos;d love to hear from you. Fill out the form
                below or reach out directly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-teal-400 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <h4 className="font-medium text-gray-100">Email</h4>
                          <a
                            href="mailto:your.email@example.com"
                            className="text-gray-300 hover:text-teal-400 transition-colors"
                          >
                            edgar.requillo@hcdc.edu.ph
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-teal-400 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <h4 className="font-medium text-gray-100">
                            Location
                          </h4>
                          <p className="text-gray-300">
                            Davao City, Philippines
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-teal-400 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div>
                          <h4 className="font-medium text-gray-100">Phone</h4>
                          <a
                            href="tel:+1234567890"
                            className="text-gray-300 hover:text-teal-400 transition-colors"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-teal-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <svg
                          className="w-6 h-6 text-teal-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section
          id="certificates"
          className="py-16 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Certificates
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto"></div>
              <p className="mt-6 text-teal-50 max-w-2xl mx-auto">
                A collection of professional certifications demonstrating
                expertise in cybersecurity and network security.
              </p>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Coursera Certification 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src="/Coursera Certification 1.png"
                    alt="Coursera Certification 1"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Coursera Professional Certificate
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Specialized training in network security and infrastructure
                  management
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Verified by Coursera
                  </span>
                </div>
              </div>

              {/* Coursera Certification 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src="/Coursera Certification 2.png"
                    alt="Coursera Certification 2"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Coursera Advanced Certificate
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Advanced professional certification in IT infrastructure and
                  networking
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Verified by Coursera
                  </span>
                </div>
              </div>

              {/* BitDegree Certificate */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src="/bitdegree-certificate-1594348.jpeg"
                    alt="BitDegree Certificate"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  BitDegree Professional Certificate
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Specialized training in web development and programming
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Verified by BitDegree
                  </span>
                </div>
              </div>

              {/* MCITS Certificate */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src="/mcits.jpg"
                    alt="MCITS Certificate"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  MCITS Professional Certificate
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Advanced certification in information technology and systems
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Verified by MCITS
                  </span>
                </div>
              </div>

              {/* PSITS Certificate */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src="/psits.jpg"
                    alt="PSITS Certificate"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  PSITS Professional Certificate
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Specialized training in information technology and systems
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Verified by PSITS
                  </span>
                </div>
              </div>

              {/* OJT Certificate */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src="/ojt.jpg"
                    alt="OJT Certificate"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  On-the-Job Training Certificate
                </h3>
                <p className="text-gray-800 text-sm mb-4">
                  Professional experience and practical training certification
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm text-gray-600">
                    Verified by Training Institution
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
