export const FORMAT_MAP = {
    image: {
        input: ['png', 'jpg', 'jpeg'],
        output: ['png', 'jpg']
    },
    audio: {
        input: ['mp3', 'wav'],
        output: ['mp3', 'wav']
    },
    video: {
        input: ['mp4', 'webm'],
        output: ['mp4', 'webm']
    }
} as const

export type MediaType = keyof typeof FORMAT_MAP

export type InputFormat<T extends MediaType> = typeof FORMAT_MAP[T]['input'][number]

export type OutputFormat<T extends MediaType> = typeof FORMAT_MAP[T]['output'][number]