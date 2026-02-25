interface FooterProps {
    title: string;
}

const Footer= ({title}: FooterProps) => {
    return (
        <footer className="flex justify-center py-3 bg-gray-800 fixed bottom-0 left-0 w-full">
            <p className="text-gray-200 text-center">
                Copyright © {title}
            </p>
        </footer>
    )
}

export default Footer;