import styled from 'styled-components';

interface InlineHeadingPropsType {
    color?:             string
    level:              1 | 2 | 3 | 4 | 5 | 6
    mb?:                string
    align?:             'left' | 'center' | 'right'
	w?:					string
	minW?:				string
	maxW?:				string
	h?:					string
	minH?:				string
	maxH?:				string
}

type QueryType = { [key: string]: Partial<InlineHeadingPropsType> };

export interface HeadingPropsType extends InlineHeadingPropsType{
	queries?: QueryType
}

const setStyle = ({
    color,
    level,
    mb,
    align,
	w,
	minW,
	maxW,
	h,
	minH,
	maxH,
}: Partial<InlineHeadingPropsType>) => {
	return `
    	${ color			? `color:			var(--${color});`	: `` }
        ${ align            ? `text-align:      ${align};`          : `` }
		${ mb				? `margin-bottom:	${mb};`				: `` }
		${ w				? `width:			${w};`				: `` }
		${ minW				? `min-width:		${minW};`			: `` }
		${ maxW				? `max-width:		${maxW};`			: `` }
		${ h				? `height:			${h};`				: `` }
		${ minH				? `max-height:		${minH};`			: `` }
		${ maxH				? `max-height:		${maxH};`			: `` }
        ${ level            ? `font-size:       var(--font-size-${level});` : ``}
	`
}

export const HeadingContainer = styled.p<HeadingPropsType>`
    ${({ level }) => level ? `font-size: var(--font-size-${level});` : ``}

    font-weight: 700;
    line-height: 1.3;

    ${({ queries, ...rest }: HeadingPropsType) => `
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
