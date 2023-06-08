import styled from "styled-components";

interface InlineSubsectionPropsType {
	p?: string,
	mb?:string
}

type QueryType = { [key: string]: InlineSubsectionPropsType };

export interface StyledSubsectionPropsType extends InlineSubsectionPropsType {
	$style?: InlineSubsectionPropsType & {
		queries?: QueryType
	}
}

const setInlineStyle = ({
	p,
	mb
}: InlineSubsectionPropsType) => {
	return `
		${p ? `padding:				${p};` : ``}
		${mb ? `margin-bottom:		${mb};` : ``}
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

	${({ $style }: StyledSubsectionPropsType) => setStyle({ $style })}
`
