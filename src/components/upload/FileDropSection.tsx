import UploadSvg from "./UploadSvg.tsx";
import UploadButton from "./UploadButton.tsx";
import {useRef} from "react";
import type {DragEvent} from "react";

interface FileDropSectionProps {
    onFileSelect: (file: File) => void;
}

const FileDropSection = ({onFileSelect}: FileDropSectionProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleDrop = (e: DragEvent<HTMLDivElement>)=> {
        e.preventDefault()
        if (e.dataTransfer.files.length) {
            onFileSelect(e.dataTransfer.files[0])
        }
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 w-full h-96">
            <div
                className={
                    `flex flex-col border-2 border-dashed
                    border-gray-300 rounded-xl p-8
                    min-h-full justify-center items-center gap-6`
                }
                onClick={() => inputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <UploadSvg/>

                <p className="text-center text-gray-500">
                    Перетащите файлы сюда или нажмите для выбора
                </p>

                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => e.target.files && onFileSelect(e.target.files[0])}
                />

                <UploadButton
                    className={'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}
                    onClick={() => inputRef.current?.click()}
                />
            </div>
        </div>
    )
}

export default FileDropSection