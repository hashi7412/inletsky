import styled from 'styled-components';

interface InlineGridPropsType {
	flex?:						string
	fDirection?:				'column' | 'row' | 'row-reverse' | 'column-reverse'
	fWrap?:						'wrap' | 'no-wrap';
	alignItems?:				string
	alignContent?:				string
	justifyContent?:			string
	justifyItems?:				string
	gap?:						string
	p?:							string
	mb?:						string
	w?:							string
	minW?:						string
	maxW?:						string
	h?:							string
	minH?:						string
	maxH?:						string
	columns?:					string
	rows?:						string
}

type QueryType = { [key: string]: InlineGridPropsType };

export interface StyledGridPropsType extends InlineGridPropsType {
	queries?: QueryType
}

const setStyle = ({
	flex,
	fDirection,
	fWrap,
	alignItems,
	justifyContent,
	justifyItems,
	gap,
	p,
	mb,
	w,
	minW,
	maxW,
	h,
	minH,
	maxH,
	columns,
	rows
}: InlineGridPropsType) => {
	return `
		${flex              ? `flex:				${flex};`           : ``}
		${fDirection        ? `flex-direction:		${fDirection};`     : ``}
		${fWrap             ? `flex-wrap:			${fWrap};`          : ``}
		${alignItems        ? `align-items:			${alignItems};`     : ``}
		${justifyContent    ? `justify-content:		${justifyContent};` : ``}
		${justifyItems    	? `justify-items:		${justifyItems};`   : ``}
		${gap               ? `gap:					${gap};`            : ``}
		${p                 ? `padding:				${p};`              : ``}
		${mb                ? `margin-bottom:		${mb};`             : ``}
		${w                 ? `width:				${w};`              : ``}
		${minW              ? `min-width:			${minW};`           : ``}
		${maxW              ? `max-width:			${maxW};`           : ``}
		${h                 ? `height:				${h};`              : ``}
		${minH              ? `max-height:			${minH};`           : ``}
		${maxH              ? `max-height:			${maxH};`           : ``}
		${columns           ? `grid-template-columns: repeat(${columns}, minmax(0, 1fr));` : ``}
		${rows             	? `grid-template-rows: repeat(${rows}, minmax(0, 1fr));` : ``}
	`
}

export const GridContainer = styled.div<StyledGridPropsType>`
	display: grid;

	${({ queries, ...rest }: StyledGridPropsType) => `
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
