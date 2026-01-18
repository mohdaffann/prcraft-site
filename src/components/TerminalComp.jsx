import React, { useState, useRef, useEffect } from "react";
import Typed from "typed.js";

function TerminalComp() {
    const el = useRef(null);
    useEffect(() => {
        if (!el.current) return;
        const typed = new Typed(el.current, {
            contentType: "html",
            strings: [
                "&gt; npm install <span class='text-orange-400'>prcraft</span><br/>" +
                "<span class='text-green-400'>✔</span>&nbsp;" +
                "<span class='text-gray-200'>Installed</span><br/>" +
                "<span class='text-green-400'>✔</span>&nbsp;" +
                "<span class='text-gray-200'>Ready to use</span><br/>"
                ,

                "&gt;  <span class='text-orange-400'>prcraft</span><br/>" +
                '<span class="text-gray-400">Analyzing changes...</span> <br/>' +
                '<span class="text-green-300">Title :</span><br/>' +
                '<span class="text-gray-200">Add Redis caching for API responses.</span><br/>' +
                '<span class="text-green-300">Description :</span><br/>' +
                '<span class="text-gray-200">This change introduces Redis as a caching layer for frequently accessed API responses.</span><br/>' +
                '<span class="text-gray-200">Cached data reduces repeated database queries and improves overall response time.</span><br/>' +
                '<span class="text-gray-200">Cache keys are scoped per route and parameters.</span><br/>'


            ],
            typeSpeed: 35,
            backSpeed: 18,
            backDelay: 1400,
            smartBackspace: false,
            loop: true,
            showCursor: false,


        })
        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <div className="w-full max-w-xl min-h-60 rounded-xl bg-[#202121]  text-white border border-orange-400/70
        ">
            {/* header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-gray-400 ml-4">~/dev</span>
            </div>

            {/* body */}
            <pre ref={el} className="p-4 m-0 font-mono text-gray-200 text-sm whitespace-pre-wrap">

            </pre>


        </div>
    )
}

export default TerminalComp;
