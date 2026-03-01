import {type FormatLabel, getCompatibleFormats} from "../../types/MediaFormat.ts";
import MediaFormatButton from "./MediaFormatButton.tsx";
import UploadButton from "./UploadButton.tsx";

interface SelectFormatSectionProps {
    inputFormat: FormatLabel;
    selectedFormat?: FormatLabel;
    onSelect: (format: FormatLabel) => void;
    onReset: () => void;
    onConfirm?: () => void;
}

const SelectFormatSection = ({
    inputFormat,
    selectedFormat,
    onSelect,
    onReset,
    onConfirm
}: SelectFormatSectionProps) => {
    const outputs = getCompatibleFormats(inputFormat)

    return (
        <div className="flex flex-col">
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
            <div className="flex gap-4 py-10">
                <UploadButton
                    className={'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}
                    onClick={onReset}
                >
                    Назад
                </UploadButton>
                <UploadButton
                    className={'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}
                    disabled={!selectedFormat}
                    onClick={onConfirm}
                >
                    Подтвердить
                </UploadButton>
            </div>
        </div>
    )
}

export default SelectFormatSection