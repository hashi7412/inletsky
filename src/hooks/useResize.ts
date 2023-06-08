import { useEffect } from "react";

const useResize = () => {

	const resizeFunc = ((e: any) => {
		// 
	})

	useEffect(() => {
		window.addEventListener("resize", resizeFunc);

		return () => window.removeEventListener("resize", resizeFunc)
	})

	return []
}

export default useResize;
