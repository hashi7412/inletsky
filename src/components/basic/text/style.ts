import styled from 'styled-components'

export interface InlineTextPropsType {
    color?:				string
    size?:				string
    weight?:			string
    mb?:				string
    align?:				'left' | 'center' | 'right'
}

type QueryType = { [key: string]: Partial<InlineTextPropsType> };

export interface TextPropsType extends InlineTextPropsType{
	queries?: QueryType
}

const setStyle = ({
    color,
    size,
    weight,
    mb,
    align
}: Partial<InlineTextPropsType>) => {
	return `
		${ color		? `color:				var(--${color});` 		: ``}
		${ size			? `font-size:			${size};` 				: ``}
		${ weight		? `font-weight:			${weight};` 			: ``}
		${ mb			? `margin-bottom:		${mb};` 				: ``}
		${ align		? `text-align:			${align};` 				: ``}
	`
}

export const TextWrapper = styled.p<TextPropsType>`
    line-height: 1.5;

	${({ queries, ...rest }: TextPropsType) => `
		${setStyle(rest)}
		${
			queries 
				? Object.keys(queries).reverse()?.map((endpoint: string) => {
						return `@media (max-width: ${endpoint}px) {
							${setStyle(queries[endpoint])}
						}`;
					}).join('') 
				: ``
		}
	`}
`

export const SpanWrapper = styled(TextWrapper)`
    display: inline-block;
`
