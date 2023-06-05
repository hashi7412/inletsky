import styled from 'styled-components';

interface InlineFlexPropsType {
	flex?:					string
	fDirection?:			'column' | 'row' | 'row-reverse' | 'column-reverse'
	fWrap?:					'wrap' | 'no-wrap';
	vAlign?:				string
	hAlign?:				string
	gap?:					string
	count?:					number
	p?:						string
	mb?:					string
	w?:						string
	minW?:					string
	maxW?:					string
	h?:						string
	minH?:					string
	maxH?:					string
	between?:				string
}

type QueryType = { [key: string]: InlineFlexPropsType };

export interface StyledFlexPropsType extends InlineFlexPropsType {
	queries?: QueryType
}

export interface StyledFlexChildPropsType {
	w?: string
	h?: string
}

const setStyle = ({
	flex: flex,
	fDirection: fDirection,
	fWrap: fWrap,
	vAlign,
	hAlign,
	gap,
	count,
	p,
	mb,
	w,
	minW,
	maxW,
	h,
	minH,
	maxH,
	between
}: InlineFlexPropsType) => {
	return `
		${flex				? `flex:			${flex};` : ``}
		${fDirection		? `flex-direction:	${fDirection};` : ``}
		${fWrap				? `flex-wrap:		${fWrap};` : ``}
		${vAlign			? `align-items:		${vAlign};` : ``}
		${hAlign			? `justify-content:	${hAlign};` : ``}
		${gap				? `gap:				${gap};` : ``}
		${p					? `padding:			${p};` : ``}
		${mb				? `margin-bottom:	${mb};` : ``}
		${w					? `width:			${w};` : ``}
		${minW				? `min-width:		${minW};` : ``}
		${maxW				? `max-width:		${maxW};` : ``}
		${h					? `height:			${h};` : ``}
		${minH				? `max-height:		${minH};` : ``}
		${maxH				? `max-height:		${maxH};` : ``}
		${between ? `
			margin: 0 calc(-${between} * 2) 0 -${between};
			&>* {
				padding: 0 ${between};
			}
		` : ``}
	`
}

export const FlexContainer = styled.div<StyledFlexPropsType>`
	display: flex;

	${({ queries, ...rest }: StyledFlexPropsType) => `
		${setStyle(rest)}
		${
			queries 
				? Object.keys(queries).reverse()?.map((breakpoint: string) => {
						return `@media (max-width: ${breakpoint}px) {
							${setStyle(queries[breakpoint])}
						}`;
					}).join('') 
				: ``
		}
	`}
`

export const FlexChildContainer = styled.div<StyledFlexChildPropsType>`
	${({ w }) => w ? `width: ${w};` : ``}
	${({ h }) => h ? `height: ${h};` : ``}
`
