import React from "react";
import TerminalComp from "../components/TerminalComp";
import { MoveRight } from "lucide-react";
import { Link } from "react-router";
function Home() {
    return (
        <section className="min-h-screen bg-[#18181b] flex  justify-center px-6 ">
            <div className="max-w-3xl w-full text-center mt-36 md:mt-28">
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
                <div className="items-center flex justify-center mt-2">
                    <Link className=" cursor-pointer flex justify-center items-center gap-1 rounded bg-gray-300 hover:bg-gray-300/95 transition duration-200 ease-in-out text-black text-sm sm:text-base px-4 py-2"
                        to={'/installation'}
                    >
                        Get Started <MoveRight />
                    </Link>

                </div>


                <div className="flex mt-6 md:mt-10 w-full justify-center text-left">
                    <TerminalComp />
                </div>
            </div>
        </section>
    )
}

export default Home;
