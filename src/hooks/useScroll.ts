import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce.util";

export type ScrollPosType = {
    x: number
    y: number
}

type ScrollDirectionType = "up" | "" | "down"

const useScroll: () => [number, number, ScrollDirectionType] = () => {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [bodyOffset, setBodyOffset] = useState<DOMRect>(
        document.body.getBoundingClientRect()
    );

    const [scrollX, setScrollX] = useState<number>(bodyOffset.top);
    const [scrollY, setScrollY] = useState<number>(bodyOffset.left);
    const [direction, setDirection] = useState<ScrollDirectionType>("");

    const scrollFunc = ((e: any) => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top);
    })

    useEffect(() => {
        window.addEventListener("scroll", scrollFunc);

        return () => window.removeEventListener("scroll", scrollFunc)
    })

    return [scrollX, scrollY, direction];
}

export default useScroll;
