import { useEffect, useState } from "react";
import { debounce } from "../utils/debounce.util";

type UseResizeHookType = () => [number, number]

const useResize = () => {

	const [offsetWidth, setOffsetWidth] = useState(window.innerWidth);
	const [offsetHeight, setOffsetHeight] = useState(window.innerHeight);

	// const resizeFunc = debounce(((e: any) => {
	// 	setOffsetWidth(window.innerWidth);
	// 	setOffsetHeight(window.innerHeight);
	// }), 100)

	const resizeFunc = ((e: any) => {
		setOffsetWidth(window.innerWidth);
		setOffsetHeight(window.innerHeight);
	})

	useEffect(() => {
		window.addEventListener("resize", resizeFunc);

		return () => window.removeEventListener("resize", resizeFunc)
	})

	return [offsetWidth, offsetHeight]
}

export default useResize;
