import { Outlet } from "react-router-dom"
import { MainNavBar } from "../nav"

export function RootLayout() {
    return <>
        <MainNavBar />
        <Outlet />
    </>
}