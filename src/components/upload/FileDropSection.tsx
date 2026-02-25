import UploadSvg from "./UploadSvg.tsx";
import UploadButton from "./UploadButton.tsx";

const FileDropSection = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 w-full h-96">
            <div
                className={
                    `flex flex-col border-2 border-dashed
                    border-gray-300 rounded-xl p-8
                    min-h-full justify-center items-center gap-6`
                }
            >
                <UploadSvg/>

                <p className="text-center text-gray-500">
                    Перетащите файлы сюда или нажмите для выбора
                </p>

                <UploadButton
                    className={'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'}
                />
            </div>
        </div>
    )
}

export default FileDropSection