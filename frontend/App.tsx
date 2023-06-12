import TheHeader from "./components/TheHeader/TheHeader"

import { Outlet } from "react-router-dom"

export default function App() {
    return (
        <div className="app">
            <TheHeader />
            <Outlet />
        </div>
    )
}