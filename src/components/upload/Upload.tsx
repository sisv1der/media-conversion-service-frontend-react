const Upload = () => {
    return (
        <section className="flex flex-col items-center min-h-max">
            <div className="flex flex-col py-30 px-4 bg-gray-50">
                <div className="text-center">
                    <p className="text-4xl text-gray-900">
                        Конвертер файлов
                    </p>
                    <p className="text-lg text-gray-600">
                        Загрузите и сконвертируйте ваши файлы в любой формат
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-20 w-full h-96">
                    <div
                        className="flex flex-col border-2 border-dashed border-gray-300 rounded-xl p-8 min-h-full justify-center items-center gap-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-upload w-16 h-16 mx-auto mb-4 text-gray-400"
                            data-darkreader-inline-stroke=""
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                        <p className="text-center text-gray-500">
                            Перетащите файлы сюда или нажмите для выбора
                        </p>
                        <button className="bg-blue-600 text-white rounded-lg px-6 py-3 w-48
                            hover:bg-blue-700 transition-colors duration-200 
                            font-medium text-lg shadow-md hover:shadow-lg 
                            focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Выбрать файл
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Upload;