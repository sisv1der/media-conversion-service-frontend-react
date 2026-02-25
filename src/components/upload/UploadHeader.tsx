import type {ReactNode} from "react";

interface UploadHeaderProps {
    children?: ReactNode;
}

const UploadHeader = ({children}: UploadHeaderProps) => {
    return (
        <div className="text-center">
            <p className="text-4xl text-gray-900">
                {children ?? 'Конвертер файлов'}
            </p>
            <p className="text-lg text-gray-600">
                Загрузите и сконвертируйте ваши файлы в любой формат
            </p>
        </div>
    )
}

export default UploadHeader