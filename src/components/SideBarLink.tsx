'use client'
import React from 'react';
import Link from 'next/link';

interface SidebarLinkProps {
    href: string;
    active: boolean;
    text: string;
    iconPath: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({href, active, text, iconPath}) => {
    return (
        <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${active ? 'relative bg-gray-300 rounded' : ''}`}
        >
            <Link href={href}>
                <div className="block transition duration-150 truncate">
                    <div className="flex items-center">
                        <svg
                            className="shrink-0 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path className={`fill-current ${active ? 'text-gray-900' : 'text-slate-400'}`}
                                  d={iconPath}/>
                        </svg>
                        <span className={`text-sm font-medium ml-3 ${active ? 'text-blue-500' : 'text-dark'}`}>{text}</span>
                    </div>
                </div>
            </Link>
            {active && (
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <svg
                        className="shrink-0 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            className="fill-current text-blue-700"
                            d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path>                    </svg>
                </div>
            )}
        </li>
    );
};

export default SidebarLink;
