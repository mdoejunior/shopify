'use client'

import React, { useState } from 'react';

interface SidebarLinkGroupProps {
    activecondition: boolean;
    children: (handleClick: () => void, open: boolean) => React.ReactNode;
}

const SidebarLinkGroup: React.FC<SidebarLinkGroupProps> = ({ activecondition, children }) => {
    const [open, setOpen] = useState(activecondition);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-slate-900'}`}>
            {children(handleClick, open)}
        </li>
    );
}

export default SidebarLinkGroup;
