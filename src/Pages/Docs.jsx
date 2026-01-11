import React from "react";
import InstallCommand from "./InstallCommand";
function Docs() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-light text-white mb-4">
                        Docs & API Options
                    </h1>
                    <p className="text-lg  text-gray-300">
                        Choose from different response styles using various flags
                    </p>
                </div>
                <div className="mb-12">
                    <h2 className="text-white text-2xl mb-4 font-light">
                        -t , --technical (Default)
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Provides technical descriptions with implementation details.Focuses on the changes made and approaches used
                    </p>
                    <p className="text-gray-300 mb-4">
                        This is the default mode , so just running 'prcraft' is enough
                    </p>
                    <InstallCommand command={'prcraft'} />
                </div>
                <div className="mb-12">
                    <h2 className="text-white text-2xl mb-4 font-light">
                        -d , --detailed
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Creates comprehensive PR descriptions woth context and explaination , including the impact and architectural considerations.
                    </p>

                    <InstallCommand command={'prcraft -d'} />
                </div>
                <div className="mb-12">
                    <h2 className="text-white text-2xl mb-4 font-light">
                        -b , --brief
                    </h2>
                    <p className="text-gray-300">
                        Generates accurate changes considering on what changed .

                    </p>
                    <p className="text-gray-300 mb-4 mt-3">
                        Perfect for small and minimalist changes where the code speaks for itself.
                    </p>

                    <InstallCommand command={'prcraft -b'} />
                </div>
            </div>
        </div>
    )
}

export default Docs;
