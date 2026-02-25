import type {ReactNode} from "react";

interface FooterProps {
    children?: ReactNode;
}

const Footer= ({children}: FooterProps) => {
    return (
        <footer className="flex justify-center py-3 bg-gray-800 fixed bottom-0 left-0 w-full">
            <p className="text-gray-200 text-center">
                Copyright © {children ?? 'Media Conversion Service'} 2026
            </p>
        </footer>
    )
}

export default Footer;