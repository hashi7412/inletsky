import styled from "styled-components";
import Flex from "../../basic/flex";

interface InlineStyledHeroContainerPropsType {
    bg?: string
    mb?: string
}

type QueryType = { [key: string]: InlineStyledHeroContainerPropsType };

export interface StyledHeroContainerPropsType extends InlineStyledHeroContainerPropsType {
    $style?: InlineStyledHeroContainerPropsType & {
        queries?: QueryType
    }
}

const setInlineStyle = ({
    bg,
    mb
}: InlineStyledHeroContainerPropsType) => {
    return `
		${mb ? `margin-bottom:		    ${mb};` : ``}
	`
}

const setStyle = ({ $style }: StyledHeroContainerPropsType) => {
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


export const StyledHeroContainer = styled(Flex) <StyledHeroContainerPropsType>`
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-bottom: 7rem;

    ${({ $style }: StyledHeroContainerPropsType) => setStyle({ $style })}
`