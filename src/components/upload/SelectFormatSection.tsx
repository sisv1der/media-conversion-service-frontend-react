import {type FormatLabel, getCompatibleFormats} from "./MediaFormat.ts";
import MediaFormatButton from "./MediaFormatButton.tsx";

interface SelectFormatSectionProps {
    inputFormat: FormatLabel;
    onSelect: (format: FormatLabel) => void;
}

const SelectFormatSection = ({
    inputFormat,
    onSelect
}: SelectFormatSectionProps) => {
    const outputs = getCompatibleFormats(inputFormat)

    return (
        <div className="flex items-center justify-center gap-2"> {
            outputs.map(format => (
                <MediaFormatButton
                    key={format}
                    format={format}
                    onSelect={() => onSelect(format)}
                />
            ))
        }
        </div>
    )
}

export default SelectFormatSection