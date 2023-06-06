import styled from 'styled-components';

interface InlineGridPropsType {
	flex?:						string
	fDirection?:				'column' | 'row' | 'row-reverse' | 'column-reverse'
	fWrap?:						'wrap' | 'no-wrap';
	vAlign?:					string
	hAlign?:					string
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

export interface GridPropsType extends InlineGridPropsType {
	$queries?: QueryType
}

export interface StyledGridChildPropsType {
	w?: string
	h?: string
}

const setStyle = ({
	flex,
	fDirection,
	fWrap,
	vAlign,
	hAlign,
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
		${vAlign            ? `align-items:			${vAlign};`         : ``}
		${hAlign            ? `justify-content:		${hAlign};`         : ``}
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

export const GridContainer = styled.div<GridPropsType>`
	display: grid;

	${({ $queries, ...rest }: GridPropsType) => `
		${setStyle(rest)}
		${
			$queries 
				? Object.keys($queries).reverse()?.map((breakpoint: string) => {
						return `@media (max-width: ${breakpoint}px) {
							${setStyle($queries[breakpoint])}
						}`;
					}).join('') 
				: ``
		}
	`}
`

export const GridChildContainer = styled.div<StyledGridChildPropsType>`
	${({ w }) => w ? `width: ${w};` : ``}
	${({ h }) => h ? `height: ${h};` : ``}
`
