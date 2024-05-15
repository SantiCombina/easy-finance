import {Outlet} from "react-router-dom";

import {Sidebar, SidebarItem} from "./sidebar";

export function Layout() {
    return (
        <main className="w-screen">
            <div className="min-h-screen flex justify-between items-center">
                <Sidebar>
                    <SidebarItem
                        active={false}
                        alert={false}
                        icon={<i className="fa-regular fa-check" />}
                        text="Check"
                    />
                </Sidebar>
                <div className="min-h-screen h-full w-full grid text-white">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}
