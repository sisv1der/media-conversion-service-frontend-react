import axios from "axios";
import type { CreateJobResponse, Job} from "../types/Job.ts";
import {type FormatKey, type FormatLabel, formats} from "../types/MediaFormat.ts";

const apiClient = axios.create({
    baseURL: 'https://localhost:8080/api/v2',
    headers: {
        'Content-Type': 'application/json',
    },
})

const getInputFormat = (file: File | null): FormatLabel | null => {
    if (!file) return null
    const ext: FormatKey = file.name.split('.').pop() as keyof typeof formats

    return formats[ext]
}

export const createJob = async (
    file: File, outputFormat: FormatLabel
    ): Promise<Job> => {

    const formData = new FormData()
    formData.append('file', file)
    formData.append('outputFormat', outputFormat)

    const { data } = await apiClient.post<CreateJobResponse>(
        '/jobs',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    )

    return {
        id: data.jobId,
        status: data.jobStatus,
        inputFormat: getInputFormat(file)!,
        outputFormat: outputFormat,
        filename: file.name
    }
}