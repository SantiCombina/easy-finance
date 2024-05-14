import {Outlet} from "react-router-dom";

import {Navbar} from "./navbar";
import {Footer} from "./footer";

export function Layout() {
    return (
        <main className="w-screen">
            <div className="min-h-screen flex justify-between flex-col items-center">
                <Navbar />
                <div className="min-h-[calc(100dvh-64px-96px)] h-full w-full grid text-white">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    );
}
