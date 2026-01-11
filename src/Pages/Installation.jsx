import React from "react";
import InstallCommand from "./InstallCommand";
function Installation() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-light text-white mb-4">
                        Installation & Setup
                    </h1>
                    <p className="text-lg  text-gray-300">
                        Get started with PRCRAFT in just a few steps
                    </p>
                </div>
                <section className="mb-6">
                    <h2 className="text-white text-2xl mb-4 font-light">
                        Install PRCRAFT
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Install the CLI tool via npm
                    </p>
                    <InstallCommand command={'npm i prcraft'} />
                </section>

                <section className="mb-16">
                    <h2 className="text-white text-2xl mb-4 font-light">
                        Get Your Groq API Key
                    </h2>
                    <p className="text-gray-300 mb-6">
                        PRCRAFT uses Groq internally . Get your free API key from Groq's console
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Get the key from here :</span>
                        <a href="https://console.groq.com/home" rel="noopener noreferrer" target="_blank" className="text-orange-300 hover:text-orange-400 cursor-pointer underline">console.groq.com</a>

                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-light text-white mb-4">
                        Configure Your API Key
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Set the key as an environment variable , according to your OS:
                    </p>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                                <span className="text-orange-500 ">-</span>
                                Windows (Powershell)
                            </h3>
                            <InstallCommand command={'setx GROQ_API_KEY "your-key-here"'} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                                <span className="text-orange-500 ">-</span>
                                Windows (CMD)
                            </h3>
                            <InstallCommand command={'setx GROQ_API_KEY "your-key-here"'} />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                                <span className="text-orange-500 ">-</span>
                                macOS / Linux
                            </h3>
                            <InstallCommand command={'echo export GROQ_API_KEY = your-key-here >> ~/.zshrc\nsource ~/.zshrc'} />
                        </div>
                    </div>
                </section>

                <section className="mt-16 ">
                    <h3 className="text-xl font-medium text-white mb-3">
                        Thats it !
                    </h3>
                    <ul className="list-disc pl-4 text-gray-300 mb-2">
                        <li>Make changes in your code</li>
                        <li>Commit the chamges.</li>
                        <li>Run:</li>
                    </ul>
                    <InstallCommand command={'prgen'} />
                </section>

            </div>
        </div>
    )
}

export default Installation;
