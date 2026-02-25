import type React from "react"
import type {NavLinkProps} from './NavLink'
import NavLink from "./NavLink"

interface HeaderProps {
    title: string
    links: NavLinkProps[]
}

const Header: React.FC<HeaderProps> = ({title, links}: HeaderProps) => {
    return (
        <header className="flex bg-gray-800 px-[15%] pb-[1%] pt-[1%] justify-between items-center" id="header">
            <div>
                <a className="text-white no-underline text-xl font-bold" href="#header">
                    {title}
                </a>
            </div>
            <nav className="flex gap-8 "> {
                links.map((link) => (
                    <NavLink
                        key={link.id}
                        id={link.id}
                        text={link.text}
                        href={link.href}
                    />
                ))
            }
            </nav>
        </header>
    )
}

export default Header