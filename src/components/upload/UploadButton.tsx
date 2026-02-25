import type {ReactNode} from "react";

interface UploadButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const UploadButton = ({
                          children = 'Выбрать файл',
                          onClick,
                          disabled = false,
                          className = '',
                          type = 'button'
}: UploadButtonProps) => {
    return (
        <button
            className={
                `rounded-lg px-6 py-3 w-48
                transition-colors duration-200
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}
                font-medium text-lg shadow-md
                focus:outline-none focus:ring-offset-2 ${className}`
            }
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default UploadButton