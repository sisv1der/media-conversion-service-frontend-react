import type {NavLinkProps} from './NavLink.tsx'
import type {ReactNode} from "react";
import NavLink from "./NavLink.tsx"

interface HeaderProps {
    children?: ReactNode;
    links: NavLinkProps[];
}

const Header = ({children, links}: HeaderProps) => {
    return (
        <header className="flex bg-gray-800 px-[15%] pb-[1%] pt-[1%] justify-between items-center" id="header">
            <div>
                <a className="text-white no-underline text-xl font-bold" href="#header">
                    {children ?? 'Media Conversion Service'}
                </a>
            </div>
            <nav className="flex gap-8"> {
                links.map(
                    (link, index) =>
                        <NavLink key={index} href={link.href}>{link.children}</NavLink>
                )
            }
            </nav>
        </header>
    )
}

export default Header