import variables from "../style/variable";

export const declearStyleVariables = (variables: CSSVariables) => {
	let css = '';
	Object.keys(variables).map((key: string) => {
		css += `--${key}: ${variables[key]};`;
	})
	console.log('declearStyleVariables', css);
	return css;
}

export const GV = (key: keyof typeof variables ) => {
	return `var(--${key})`
}