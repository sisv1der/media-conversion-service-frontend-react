import type {FormatLabel} from "../../types/MediaFormat.ts";

interface MediaFormatButtonProps {
    format: FormatLabel;
    onSelect: (format: FormatLabel) => void;
}

const MediaFormatButton = ({format, onSelect}: MediaFormatButtonProps) => {
    return (
        <button onClick={() => onSelect(format)}
                className="p-4 rounded-lg border-2 transition-all duration-200
                            hover:scale-105 border-gray-200 bg-white hover:border-blue-300"
        >
            <p className="font-medium text-gray-700">{format}</p>
            <p className="text-xs text-gray-500">{`.${format.toLowerCase()}`}</p>
        </button>
    )
}

export default MediaFormatButton