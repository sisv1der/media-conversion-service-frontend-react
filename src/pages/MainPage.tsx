import Header from "../components/common/Header.tsx"
import Footer from "../components/common/Footer.tsx"
import UploadSection from "../components/upload/UploadSection.tsx"

const TITLE = 'Media Conversion Service';

const App = () => {
    return (
        <>
            <Header
                links={[
                    {children: <>Загрузить</>, href: '#upload'},
                    {children: <>О нас</>, href: '#about'}
                ]}
            >{TITLE}</Header>

            <UploadSection/>

            <Footer>{TITLE}</Footer>
        </>
    )
}

export default App
