import FileDropSection from "./FileDropSection.tsx";
import UploadHeader from "./UploadHeader.tsx";
import {useState} from "react";
import SelectFormatSection from "./SelectFormatSection.tsx";
import {type FormatKey, type FormatLabel, formats} from "../../types/MediaFormat.ts";
import {createJob} from "../../api/jobs.ts";
import type {Job} from "../../types/Job.ts";

const UploadSection = () => {
    const [ UPLOAD, SELECT_FORMAT, CONFIRM ] = ['UPLOAD', 'SELECT_FORMAT', 'CONFIRM'] as const
    type Step = 'UPLOAD' | 'SELECT_FORMAT' | 'CONFIRM'

    const [step, setStep] = useState<Step>('UPLOAD')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [selectedFormat, setSelectedFormat] = useState<FormatLabel | null>(null)
    const [jobs, setJobs] = useState<Job[]>([])

    const moveForward = () => {
        setStep(prev => {
            switch (prev) {
                case UPLOAD:
                    return SELECT_FORMAT
                case SELECT_FORMAT:
                    return CONFIRM
                default:
                    return prev
            }
        })
    }

    const handleReset = () => {
        setSelectedFile(null)
        setSelectedFormat(null)
        setStep(UPLOAD)
    }

    const handleConfirmation = async () => {
        if (!selectedFile || !selectedFormat) return;

        const job = await createJob(selectedFile, selectedFormat)
        setJobs(prev => [...prev, job])

        handleReset()
    }

    const getInputFormat = (file: File | null): FormatLabel | null => {
        if (!file) return null
        const ext: FormatKey = file.name.split('.').pop() as keyof typeof formats

        return formats[ext]
    }

    return (
        <section className="flex flex-col items-center min-h-max">
            <div className="py-10">
                <UploadHeader/>
            </div>
            <div className="flex flex-col py-30 px-4 bg-gray-50 items-center justify-center">
                {step === UPLOAD && (
                    <FileDropSection
                        onFileSelect={(file: File) => setSelectedFile(file)}
                        moveForward={moveForward}
                    />
                )}

                {step === SELECT_FORMAT && selectedFile && (
                    <SelectFormatSection
                        inputFormat={getInputFormat(selectedFile)!}
                        onSelect={(format) => {
                            setSelectedFormat(format)
                            moveForward()
                        }}
                        onReset={handleReset}
                    />
                )}

                {step === CONFIRM && selectedFormat && selectedFile && (
                    <SelectFormatSection
                        inputFormat={getInputFormat(selectedFile)!}
                        selectedFormat={selectedFormat}
                        onSelect={(format) => setSelectedFormat(format)}
                        onReset={handleReset}
                        onConfirm={handleConfirmation}
                    />
                )}

                {jobs.length > 0 && (
                    <>
                        {/* тут будет компонент списка задач6 */}
                    </>
                )}
            </div>
        </section>
    )
}

export default UploadSection