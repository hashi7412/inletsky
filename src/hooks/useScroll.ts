import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce.util";

type ScrollDirectionType = "up" | "" | "down"

type UseScrollHookType = () => [number, number, ScrollDirectionType]

const useScroll: UseScrollHookType = () => {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [bodyOffset, setBodyOffset] = useState<DOMRect>(
        document.body.getBoundingClientRect()
    );

    const [scrollX, setScrollX] = useState<number>(bodyOffset.top);
    const [scrollY, setScrollY] = useState<number>(bodyOffset.left);
    const [direction, setDirection] = useState<ScrollDirectionType>("");

    // const scrollFunc = debounce(((e: any) => {
    //     setBodyOffset(document.body.getBoundingClientRect());
    //     setScrollY(-bodyOffset.top);
    //     setScrollX(bodyOffset.left);
    //     setDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    //     setLastScrollTop(-bodyOffset.top);
    // }))

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
