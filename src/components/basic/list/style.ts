import styled from "styled-components";
import variables from "../../../style/variable";
import { GV } from "../../../utils/style.util";

interface InlineListPropsType {
	dir?:                    'column' | 'row' | 'row-reverse' | 'column-reverse',
	vAlign?:				string
	hAlign?:				string
}

type QueryType = { [key: string]: InlineListPropsType };

export interface StyledListPropsType extends InlineListPropsType {
	queries?: QueryType
}

const setStyle = ({
	dir,
	vAlign,
	hAlign
}: StyledListPropsType) => {
	return `
		${dir				? `flex-direction:	${dir};`	: ``}
		${vAlign			? `align-items:		${vAlign};` : ``}
		${hAlign			? `justify-content:	${hAlign};` : ``}
	`
}

export const ListContainer = styled.ul<StyledListPropsType>`
	display: flex;

	${({ queries, ...rest }: StyledListPropsType) => `
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



interface InlineListItemPropsType {
	size?: string
}

type ListItemQueryType = { [key: string]: InlineListItemPropsType };

export interface StyledListItemPropsType extends InlineListItemPropsType {
	queries?: ListItemQueryType
}

const setListItemStyle = ({
	size
}: InlineListItemPropsType) => {
	return `
		${size				? `font-size:		${size};`	: ``}
	`
}

export const StyledListItem = styled.li<StyledListItemPropsType>`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	line-height: 1.5;

	${({ queries, ...rest }: StyledListItemPropsType) => `
		${setListItemStyle(rest)}
		${
			queries 
				? Object.keys(queries).reverse()?.map((breakpoint: string) => {
						return `@media (max-width: ${breakpoint}px) {
							${setListItemStyle(queries[breakpoint])}
						}`;
					}).join('') 
				: ``
		}
	`}
`

export const Dot = styled.span`
	display: inline-block;
	width: 10px;
	height: 10px;
	background: ${GV("danger")};
	border-radius: 50%;
`
