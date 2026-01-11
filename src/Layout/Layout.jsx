import React from "react";
import { Outlet } from "react-router";
import Header from "../Pages/Header";
import ScrollTop from "../components/ScrollTop";
function Layout() {
    return (
        <div className="min-h-screen">
            <ScrollTop />
            <Header />
            <main>
                <Outlet />
            </main>


        </div>
    )
}

export default Layout;
