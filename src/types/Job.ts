import type {FormatLabel} from "./MediaFormat.ts";

export interface Job {
    id: string;
    status: string;
    inputFormat: FormatLabel;
    outputFormat: FormatLabel;
    filename: string;
}

export interface CreateJobResponse {
    jobId: string;
    jobStatus: string;
}