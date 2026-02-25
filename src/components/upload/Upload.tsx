import FileDropSection from "./FileDropSection.tsx";
import UploadHeader from "./UploadHeader.tsx";

const Upload = () => {
    return (
        <section className="flex flex-col items-center min-h-max">
            <div className="flex flex-col py-30 px-4 bg-gray-50">
                <UploadHeader/>
                <FileDropSection/>
            </div>
        </section>
    )
}

export default Upload