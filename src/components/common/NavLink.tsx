import type {ReactNode} from "react";

export interface NavLinkProps {
    children: ReactNode;
    href: string;
}

const NavLink = ({children, href}: NavLinkProps) => {
    return (
        <a
            href={href}
            className="no-underline text-lg text-gray-200 hover:text-white transient-colors duration-200"
        >
            {children}
        </a>
    )
}

export default NavLink