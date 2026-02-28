import FileDropSection from "./FileDropSection.tsx";
import UploadHeader from "./UploadHeader.tsx";
import {useState} from "react";
import SelectFormatSection from "./SelectFormatSection.tsx";
import {type FormatKey, type FormatLabel, formats} from "./MediaFormat.ts";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [selectedFormat, setSelectedFormat] = useState<FormatLabel | null>(null)

    const getInputFormat = (file: File | null): FormatLabel => {
        if (file == null) {
            throw Error("err")
        }
        const ext: FormatKey = file.name.split('.').pop() as keyof typeof formats

        return formats[ext]
    }

    return (
        <section className="flex flex-col items-center min-h-max">
            <div className="py-10">
                <UploadHeader/>
            </div>
            <div className="flex flex-col py-30 px-4 bg-gray-50 items-center justify-center">

                {!selectedFile ? (
                    <FileDropSection
                        onFileSelect={(file: File) => setSelectedFile(file)}/>
                ) : !selectedFormat ? (
                    <SelectFormatSection
                        inputFormat={getInputFormat(selectedFile)}
                        onSelect={(format) => setSelectedFormat(format)} />
                ) : (
                    <p className="text-green-600 mt-4">
                        {/* Placeholder */}
                        Выбран формат: <b>{selectedFormat}</b>
                    </p>
                )}
            </div>
        </section>
    )
}

export default Upload