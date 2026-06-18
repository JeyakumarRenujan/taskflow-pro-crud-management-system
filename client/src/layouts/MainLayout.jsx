import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import { Outlet } from "react-router-dom";

function MainLayout() {

    return (

        <div className="flex">

            <Sidebar />

            <main
                className="
                flex-1
                ml-64
                bg-gray-50
                min-h-screen
                "
            >

                <Navbar />

                <div className="p-8">

                    <Outlet />

                </div>

            </main>

        </div>

    );

}

export default MainLayout;