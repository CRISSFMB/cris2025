
import { Footer } from "../components/layoutComponents/Footer"
import { Header } from "../components/layoutComponents/Header"

import { Main } from "../components/layoutComponents/Main"

export const AppRouter = () => {
    return (
        <div className="gridGlobalStyles">
            <Header />
            <Main />
            <Footer />
        </div >
    )
}
