import {useEffect, useRef, useState} from "react";

export function useClickOutside() {
    const [expanded, setExpanded] = useState(false);
    const divRef = useRef<null | HTMLDivElement>(null);

    const clickOutside = (event: MouseEvent) => {
        if (!divRef.current?.contains(event.target as Node)) setExpanded(false);
    };

    useEffect(() => {
        expanded ? window.addEventListener("click", clickOutside) : window.removeEventListener("click", clickOutside);

        () => window.removeEventListener("click", clickOutside);
    }, [expanded]);

    return {
        divRef,
        expanded,
        setExpanded,
    };
}
