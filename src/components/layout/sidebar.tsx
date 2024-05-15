import {Squeeze as Hamburger} from "hamburger-react";
import {MoreVertical} from "lucide-react";
import {createContext, useContext} from "react";

import {useClickOutside} from "@/hooks/useClickOutside";
import {cn} from "@/lib/utils";
import {SiberItemProps, SidebarProps, SidebarProviderProps} from "@/types/sidebar/types";

const initialState: SidebarProviderProps = {
    expanded: false,
    setExpanded: () => {},
};

const SidebarContext = createContext<SidebarProviderProps>(initialState);

export function Sidebar({children}: SidebarProps) {
    const {divRef: sidebarRef, expanded, setExpanded} = useClickOutside();

    return (
        <aside ref={sidebarRef} className="h-screen">
            <nav className="h-full flex flex-col bg-neutral-950 shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <div className={cn("overflow-hidden transition-all duration-500", expanded ? "w-32" : "w-0")}>
                        <img alt="" src="https://img.logoipsum.com/243.svg" />
                    </div>
                    <Hamburger color="white" toggled={expanded} onToggle={() => setExpanded((curr) => !curr)} />
                </div>

                <SidebarContext.Provider value={{expanded, setExpanded}}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img
                        alt=""
                        className="w-10 h-10 rounded-md"
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                    />
                    <div
                        className={cn(
                            "flex justify-between items-center overflow-hidden transition-all duration-500",
                            expanded ? "w-52 ml-3" : "w-0",
                        )}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({icon, text, active, alert}: SiberItemProps) {
    const {expanded, setExpanded} = useContext(SidebarContext);

    return (
        <li
            className={cn(
                "relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group",
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600",
            )}
            onClick={() => setExpanded(false)}
        >
            {icon}
            <span className={cn("overflow-hidden transition-all", expanded ? "w-52 ml-3" : "w-0")}>{text}</span>
            {alert && <div className={cn("absolute right-2 w-2 h-2 rounded bg-indigo-400", expanded ? "" : "top-2")} />}
            {!expanded && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                    {text}
                </div>
            )}
        </li>
    );
}
