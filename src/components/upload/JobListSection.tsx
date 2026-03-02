import type {Job} from "../../types/Job.ts";
import UploadButton from "./UploadButton.tsx";
import {downloadJob} from "../../api/jobs.ts";

interface JobListSectionProps {
    jobs: Job[];
}

const JobListSection = ({jobs}: JobListSectionProps) => {
    const handleDownload = (jobId: string) => {
        downloadJob(jobId)
    }

    return (
        <section>
            <table className="w-full mt-8 border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">Имя</th>
                        <th className="text-left p-2">Исходный формат</th>
                        <th className="text-left p-2">Выходной формат</th>
                        <th className="text-left p-2">Статус</th>
                        <th className="text-left p-2">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job.id}>
                            <td className="p-2">{job.filename}</td>
                            <td className="p-2">{job.inputFormat}</td>
                            <td className="p-2">{job.outputFormat}</td>
                            <td className="p-2">{job.status}</td>
                            <td className="p-2">
                                <UploadButton
                                    className={'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}
                                    disabled={job.status !== 'DONE'}
                                    onClick={() => handleDownload(job.id)}
                                >Скачать</UploadButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default JobListSection