import type {NavLinkProps} from './NavLink.tsx'
import NavLink from "./NavLink.tsx"

interface HeaderProps {
    title: string
    links: NavLinkProps[]
}

const Header = ({title, links}: HeaderProps) => {
    return (
        <header className="flex bg-gray-800 px-[15%] pb-[1%] pt-[1%] justify-between items-center" id="header">
            <div>
                <a className="text-white no-underline text-xl font-bold" href="#header">
                    {title}
                </a>
            </div>
            <nav className="flex gap-8 "> {
                links.map((link, index) => <NavLink key={index} text={link.text} href={link.href}/>)
            }
            </nav>
        </header>
    )
}

export default Header