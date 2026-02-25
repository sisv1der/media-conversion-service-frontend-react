export interface NavLinkProps {
    text: string,
    href: string
}

const NavLink = ({text, href}: NavLinkProps) => {
    return (
        <a
            href={href}
            className="no-underline text-lg text-gray-200 hover:text-white transient-colors duration-200"
        >
            {text}
        </a>
    )
}

export default NavLink