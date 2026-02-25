import type React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Upload from "../components/Upload"

const TITLE = 'Media Conversion Service';

const App: React.FC = () => {
    return (
        <>
            <Header
                title={TITLE}
                links={[
                    {id: 1, text: 'Загрузить', href: '#upload'},
                    {id: 2, text: 'О нас', href: '#about'}
                ]}
            />

            <Upload/>

            <Footer
                title={TITLE}
            />
        </>
    )
}

export default App
