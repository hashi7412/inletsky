import variables from "../style/variable";

export const declearStyleVariables = (variables: { [key: string]: string }, suffix?: string) => {
	let css = '';
	Object.keys(variables).map((key: string) => {
		css += `--${key}: ${variables[key]} ${suffix ?? ""};`;
	})
	return css;
}

export const GV = (key: keyof typeof variables) => {
	return `var(--${key})`
}