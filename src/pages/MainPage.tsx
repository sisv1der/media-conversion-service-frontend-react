import Header from "../components/common/Header.tsx"
import Footer from "../components/common/Footer.tsx"
import Upload from "../components/upload/Upload.tsx"

const TITLE = 'Media Conversion Service';

const App = () => {
    return (
        <>
            <Header
                title={TITLE}
                links={[
                    {text: 'Загрузить', href: '#upload'},
                    {text: 'О нас', href: '#about'}
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
