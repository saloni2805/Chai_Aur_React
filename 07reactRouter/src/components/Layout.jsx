import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

// U can make same this as App.jsx or u can use this in App.jsx

// Using Outlet you can do nesting of pages or data, Header and footer or other components will stay fixed,
//  All other components should be called user this layout 

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
