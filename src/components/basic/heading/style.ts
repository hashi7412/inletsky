import styled from 'styled-components';
import variables from '../../../style/variable';
import { GV } from '../../../utils/style.util';

interface InlineHeadingPropsType {
	color?: string
	mb?: string
	align?: 'left' | 'center' | 'right'
	w?: string
	minW?: string
	maxW?: string
	h?: string
	minH?: string
	maxH?: string
	txtTransform?: 'uppercase' | 'lowercase' | 'capitalize'
}

type QueryType = { [key: string]: Partial<InlineHeadingPropsType> };

export interface HeadingPropsType extends InlineHeadingPropsType {
	level: HeadingLevelType
	queries?: QueryType
}

const setStyle = (
	{
		color,
		mb,
		align,
		w,
		minW,
		maxW,
		h,
		minH,
		maxH,
		txtTransform
	}: Partial<InlineHeadingPropsType>,
	level?: HeadingLevelType,
) => {
	return `
    	${color ? `color:			var(--${color});` : ``}
        ${align ? `text-align:      ${align};` : ``}
		${mb ? `margin-bottom:		${mb};` : ``}
		${w ? `width:				${w};` : ``}
		${minW ? `min-width:		${minW};` : ``}
		${maxW ? `max-width:		${maxW};` : ``}
		${h ? `height:				${h};` : ``}
		${minH ? `max-height:		${minH};` : ``}
		${maxH ? `max-height:		${maxH};` : ``}
        ${level ? `font-size:       var(--font-size-${level});` : ``}
        ${txtTransform ? `text-transform: ${txtTransform};` : ``}
	`
}

export const HeadingContainer = styled.p<HeadingPropsType>`
    ${({ level }) => level ? `font-size: var(--font-size-${level});` : ``}

    font-weight: 700;
    line-height: ${GV('line-height')};

    ${({ level, queries, ...rest }: HeadingPropsType) => `
        ${setStyle(rest, level)}
		${queries
			? Object.keys(queries).reverse()?.map((breakpoint: string) => {
				return `@media (max-width: ${breakpoint}px) {
							${setStyle(queries[breakpoint], level)}
						}`;
			}).join('')
			: ``
		}
    `}
`
