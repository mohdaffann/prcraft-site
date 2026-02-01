import React from "react";
import { cn } from "../lib/utils.js";
import TerminalComp from "../components/TerminalComp";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";
function Home() {
    return (
        <section className={cn(
            "min-h-screen bg-[#18181b] flex  justify-center px-6 ",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"

        )}>
            <div className="max-w-3xl w-full text-center mt-36 md:mt-28">
                <div className="inline-flex mb-3 items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    {/* Pulsing dot */}
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>

                    {/* Text */}
                    <span className="text-sm text-white/80">
                        Powered by <span className="font-semibold text-white">Groq AI</span>
                    </span>
                </div>
                <h1 className="text-4xl  font-bold  md:text-5xl leading-snug  md:leading-[1.1] text-white tracking-tight">
                    Let your git diff write better pull requests
                    <br className="md:hidden" /> with -{' '}
                    <span className="font-medium tracking-wide text-orange-500">
                        PRCRAFT
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-sm md:text-base font-pri px-4 mb-4 mx-auto text-gray-300">
                    An AI-powered CLI that analyzes your git diff and writes
                    <br className="hidden md:block" />
                    PR titles and descriptions for you.
                </p>
                <div className="items-center flex justify-center gap-4 mt-2">
                    <Link className=" cursor-pointer flex justify-center items-center gap-1 rounded bg-gray-300 hover:bg-gray-300/95 transition duration-200 ease-in-out text-black text-sm sm:text-base px-4 py-2"
                        to={'/installation'}
                    >
                        Get Started <MoveRight />
                    </Link>
                    <a className="cursor-pointer" target="_blank" href="https://www.npmjs.com/package/prcraft" rel="noopener noreferrer" >
                        <img src="https://res.cloudinary.com/dfmtemqoz/image/upload/Npm-logo_ogfe0x.png" alt="npm" className="w-16" />

                    </a>

                </div>


                <div className="flex mt-6 md:mt-10 w-full justify-center text-left">
                    <TerminalComp />
                </div>
            </div>
        </section>
    )
}

export default Home;
