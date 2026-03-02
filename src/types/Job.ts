import type {FormatLabel} from "./MediaFormat.ts";

export type JobStatus = 'PENDING' | 'PROCESSING' | 'DONE' | 'FAILED' | 'UNKNOWN'

export interface Job {
    id: string;
    status: JobStatus;
    inputFormat: FormatLabel;
    outputFormat: FormatLabel;
    filename: string;
}

export interface CreateJobResponse {
    jobId: string;
    jobStatus: JobStatus;
}

export interface ReadJobStatusResponse {
    jobId: string;
    jobStatus: JobStatus;
}

export interface ReadBatchJobStatusResponse {
    jobs: ReadJobStatusResponse[];
}