import axios from "axios";
import type {CreateJobResponse, Job, ReadBatchJobStatusResponse} from "../types/Job.ts";
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

export const fetchJobs = async (
    ids: string[]
): Promise<ReadBatchJobStatusResponse> => {
    if (ids.length === 0) {
        return {
            jobs: []
        }
    }
    const { data } = await apiClient.get(
        `/jobs`,
        { params: { ids } }
    )

    return data
}

export const downloadJob = async (jobId: string) => {
    const response = await apiClient.get(
        `/jobs/${jobId}/file`,
        {
            responseType: 'blob',
        },
    )

    const blob = response.data
    const disposition = response.headers['content-disposition']
    let filename = 'result'

    if (disposition) {
        const match = disposition.match(/filename="(.+)"/)
        if (match) filename = match[1]
    }

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()

    URL.revokeObjectURL(url)
}