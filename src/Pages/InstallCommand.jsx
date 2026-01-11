import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function InstallCommand({ command }) {
    const [copied, setCopied] = useState(false);

    const copyToClip = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex items-center justify-between max-w-md">
            <code className="text-gray-300 font-mono text-sm">
                {command}
            </code>
            <button
                onClick={copyToClip}
                className="text-gray-400 hover:text-white transition-colors ml-4 cursor-pointer"
                aria-label="Copy command"

            >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>
        </div>
    );
}

export default InstallCommand;