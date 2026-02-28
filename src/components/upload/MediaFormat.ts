export const formats = {
    png: "PNG",
    mp3: "MP3",
    mp4: "MP4",
    webm: "WEBM",
    wav: "WAV",
    jpg: "JPG",
} as const

export type FormatKey = keyof typeof formats
export type FormatLabel = typeof formats[FormatKey]

const compatibleFormats: Record<FormatLabel, FormatLabel[]> = {
    PNG: ['JPG'],
    JPG: ['PNG'],
    MP3: ['WAV'],
    WAV: ['MP3'],
    MP4: ['WEBM'],
    WEBM: ['MP4'],
}

export const getCompatibleFormats = (inputFormat: FormatLabel): FormatLabel[] => {
    return compatibleFormats[inputFormat] ?? []
}