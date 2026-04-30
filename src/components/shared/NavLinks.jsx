"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavLinks = ({ href, children }) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
        <Link href={href} className={`hover:text-indigo-600 ${isActive ? "text-indigo-600" : ""}`}>
        {children}
        </Link>
    );
};

export default NavLinks;
