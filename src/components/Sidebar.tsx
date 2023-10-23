import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import SidebarLink from "@/components/SideBarLink";
import SidebarLinkGroup from "@/components/SidebarLinkGroup";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({sidebarOpen, setSidebarOpen}) => {
    const pathname = usePathname();

    const trigger = useRef<HTMLButtonElement>(null);
    const sidebar = useRef<HTMLDivElement>(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(
        storedSidebarExpanded === 'true'
    );

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', String(sidebarExpanded));
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <div>
            {/* Sidebar backdrop (mobile only) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden="true"
            ></div>

            {/* Sidebar */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen border-r w-60 lg:w-20 lg:sidebar-expanded:!w-60 2xl:!w-52 shrink-0 bg-gray-100 opacity-100 p-4 transition-all duration-200 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-64'
                }`}
            >
                {/* Sidebar header */}
                <div className="flex flex-col items-center mb-10 pr-3 sm:px-2">
                    {/* Close button */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"/>
                        </svg>
                    </button>
                    {/* Logo */}
                    <Link href="/" className="flex-1 justify-center items-center">
                        <Image src={'/logo-mdoetech.svg'} alt={"NextJs"} width={100} height={100}/>
                    </Link>
                </div>
                {/* Links */}
                <div className="space-y-14">
                    <div>
                        <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                          <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                                aria-hidden="true">
                            •••
                          </span>
                            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
                        </h3>
                        <ul className="mt-3">
                            <SidebarLink
                                href="/"
                                active={pathname === '/home' || pathname.includes('home')}
                                text="Home"
                                iconPath="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM19 18.9997V9.97791L12 4.53346L5 9.97791V18.9997H19Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/' || pathname.includes('dashboard')}
                                text="Dashboard"
                                iconPath="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/projects' || pathname.includes('projects')}
                                text="Projects"
                                iconPath="M20.0833 15.1998L21.2854 15.9211C21.5221 16.0632 21.5989 16.3703 21.4569 16.6071C21.4146 16.6774 21.3557 16.7363 21.2854 16.7786L12.5144 22.0411C12.1977 22.2311 11.8021 22.2311 11.4854 22.0411L2.71451 16.7786C2.47772 16.6365 2.40093 16.3294 2.54301 16.0926C2.58523 16.0222 2.64413 15.9633 2.71451 15.9211L3.9166 15.1998L11.9999 20.0498L20.0833 15.1998ZM20.0833 10.4998L21.2854 11.2211C21.5221 11.3632 21.5989 11.6703 21.4569 11.9071C21.4146 11.9774 21.3557 12.0363 21.2854 12.0786L11.9999 17.6498L2.71451 12.0786C2.47772 11.9365 2.40093 11.6294 2.54301 11.3926C2.58523 11.3222 2.64413 11.2633 2.71451 11.2211L3.9166 10.4998L11.9999 15.3498L20.0833 10.4998ZM12.5144 1.30852L21.2854 6.57108C21.5221 6.71315 21.5989 7.02028 21.4569 7.25707C21.4146 7.32745 21.3557 7.38635 21.2854 7.42857L11.9999 12.9998L2.71451 7.42857C2.47772 7.2865 2.40093 6.97937 2.54301 6.74258C2.58523 6.6722 2.64413 6.6133 2.71451 6.57108L11.4854 1.30852C11.8021 1.11851 12.1977 1.11851 12.5144 1.30852ZM11.9999 3.33221L5.88723 6.99983L11.9999 10.6674L18.1126 6.99983L11.9999 3.33221Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/tasks' || pathname.includes('dashboard')}
                                text="Tasks"
                                iconPath="M21 4H7C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8H21V21C21 21.5523 20.5523 22 20 22H7C4.79086 22 3 20.2091 3 18V6C3 3.79086 4.79086 2 7 2H20C20.5523 2 21 2.44772 21 3V4ZM5 18C5 19.1046 5.89543 20 7 20H19V10H7C6.27143 10 5.58835 9.80521 5 9.46487V18ZM20 7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H20V7Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/user' || pathname.includes('portfolio')}
                                text="Portfolio"
                                iconPath="M7.5 11.5C5.01472 11.5 3 9.48528 3 7C3 4.51472 5.01472 2.5 7.5 2.5C9.98528 2.5 12 4.51472 12 7C12 9.48528 9.98528 11.5 7.5 11.5ZM7.5 21.5C5.01472 21.5 3 19.4853 3 17C3 14.5147 5.01472 12.5 7.5 12.5C9.98528 12.5 12 14.5147 12 17C12 19.4853 9.98528 21.5 7.5 21.5ZM17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5ZM17.5 21.5C15.0147 21.5 13 19.4853 13 17C13 14.5147 15.0147 12.5 17.5 12.5C19.9853 12.5 22 14.5147 22 17C22 19.4853 19.9853 21.5 17.5 21.5ZM7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5ZM7.5 19.5C8.88071 19.5 10 18.3807 10 17C10 15.6193 8.88071 14.5 7.5 14.5C6.11929 14.5 5 15.6193 5 17C5 18.3807 6.11929 19.5 7.5 19.5ZM17.5 9.5C18.8807 9.5 20 8.38071 20 7C20 5.61929 18.8807 4.5 17.5 4.5C16.1193 4.5 15 5.61929 15 7C15 8.38071 16.1193 9.5 17.5 9.5ZM17.5 19.5C18.8807 19.5 20 18.3807 20 17C20 15.6193 18.8807 14.5 17.5 14.5C16.1193 14.5 15 15.6193 15 17C15 18.3807 16.1193 19.5 17.5 19.5Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/user' || pathname.includes('calender')}
                                text="Calender"
                                iconPath="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/settings' || pathname.includes('settings')}
                                text="Settings"
                                iconPath="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5148L3.51578 12.0001L6.00106 14.4854V18.0001H9.51578L12.0011 20.4854L14.4863 18.0001H18.0011V14.4854L20.4863 12.0001L18.0011 9.5148V6.00008H14.4863L12.0011 3.5148L9.51578 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z"
                            />
                            <SidebarLink
                                href="/"
                                active={pathname === '/analytics' || pathname.includes('analytics')}
                                text="Analytics"
                                iconPath="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM7 13H9V17H7V13ZM11 7H13V17H11V7ZM15 10H17V17H15V10Z"
                            />
                            <SidebarLinkGroup activecondition={pathname.includes('profile')}>
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <a
                                                href="#0"
                                                className={`block text-slate-200 truncate transition duration-150 ${
                                                    pathname.includes('profile') ? 'hover:text-slate-200' : 'hover:text-white'
                                                }`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                                                            <path
                                                                className={`fill-current ${pathname.includes('profile') ? 'text-indigo-700' : 'text-slate-400'}`}
                                                                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z">
                                                            </path>
                                                        </svg>
                                                        <span className="text-sm font-medium ml-3 text-gray-900">
                                                        Profile
                                                      </span>
                                                    </div>
                                                    {/* Icon */}
                                                    <div className="flex shrink-0 ml-2">
                                                        <svg
                                                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'rotate-180'}`}
                                                            viewBox="0 0 12 12">
                                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                                <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                                                    <li className="mb-1 last:mb-0">
                                                        <Link
                                                            href="/"
                                                            className='block transition duration-150 truncate'

                                                        >
                                                          <span className="text-sm font-medium ml-3 text-gray-900 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                            View
                                                          </span>
                                                        </Link>
                                                    </li>
                                                    <li className="mb-1 last:mb-0">
                                                        <Link
                                                            href="/"
                                                            className='block transition duration-150 truncate'

                                                        >
                                                          <span
                                                              className="text-sm font-medium ml-3 text-gray-900 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                            Logout
                                                          </span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    );
                                }}
                            </SidebarLinkGroup>
                        </ul>
                    </div>
                </div>
                {/* Expand / collapse button */}
                <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-center mt-auto">
                    <div className="px-3 py-2">
                        <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span className="sr-only">Expand / collapse sidebar</span>
                            <svg className="w-6 h-6 fill-current text-gray-500 sidebar-expanded:rotate-180"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M21 17.9996V19.9996H3V17.9996H21ZM6.94975 3.5498V13.4493L2 8.49955L6.94975 3.5498ZM21 10.9996V12.9996H12V10.9996H21ZM21 3.99955V5.99955H12V3.99955H21Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
