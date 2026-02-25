import type React from "react";

export interface NavLinkProps {
    id: number
    text: string
    href: string
}

const NavLink: React.FC<NavLinkProps> = ({id, text, href}: NavLinkProps) => {
    return (
        <a
            key={id}
            href={href}
            className="no-underline text-lg text-gray-200 hover:text-white transient-colors duration-200"
        >
            {text}
        </a>
    )
}

export default NavLink