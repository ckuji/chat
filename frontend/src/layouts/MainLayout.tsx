import React from "react"
import Header from "../components/common/Header"

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    )
}

export default MainLayout