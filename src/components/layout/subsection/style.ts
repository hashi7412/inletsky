import styled from "styled-components";

interface InlineSubsectionPropsType {
	p?: string,
	mb?: string,
	bg?: string
}

type QueryType = { [key: string]: InlineSubsectionPropsType };

export interface StyledSubsectionPropsType extends InlineSubsectionPropsType {
	$style?: InlineSubsectionPropsType & {
		queries?: QueryType
	}
}

const setInlineStyle = ({
	p,
	mb,
	bg
}: InlineSubsectionPropsType) => {
	return `
		${p ? `padding:				${p};` : ``}
		${mb ? `margin-bottom:		${mb};` : ``}
		${bg ? `background:			${bg};` : ``}
	`
}

const setStyle = ({ $style }: StyledSubsectionPropsType) => {
	if (!$style) return;

	const { queries, ...rest } = $style;
	return `
		${setInlineStyle(rest)}
		${!queries
			? ``
			: Object.keys(queries).reverse()?.map((breakpoint: keyof typeof queries): string => {
				return `
					@media (max-width: ${breakpoint}px) {
						${setInlineStyle(queries[breakpoint])}
					}
				`;
			}).join('')
		}
	`
}

export const SubsectionContainer = styled.div<StyledSubsectionPropsType>`
	flex: 1;
	max-width: 1400px;
	margin: 0 auto;
	border-radius: 1.5rem;

	${({ $style }: StyledSubsectionPropsType) => setStyle({ $style })}
`
