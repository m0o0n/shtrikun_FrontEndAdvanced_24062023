import { Footer } from "./common/Footer"
import { Header } from "./common/Header"
import { NavBar } from "./common/NavBar"

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="wrapper">
                <NavBar />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}