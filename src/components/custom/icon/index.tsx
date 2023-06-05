import React from "react";
import { IconWrapper, IconWrapperType } from "./style";

const icons = {
    'Plus': (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 0.5H7V7.5H0V9.5H7V16.5H9V9.5H16V7.5H9V0.5Z" fill="#007AFC" />
        </svg>
    ),
    'ArrowLeft': (
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8535 18.236L4.56185 25.5277L11.8535 32.8193L13.3264 31.3464L8.54935 26.5693L46.2285 26.5693L46.2285 24.486L8.54935 24.486L13.3264 19.7089L11.8535 18.236Z" fill="white" />
        </svg>
    ),
    'ArrowRight': (
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.9375 32.8187L46.2292 25.527L38.9375 18.2354L37.4646 19.7083L42.2417 24.4854L4.5625 24.4854L4.5625 26.5687L42.2417 26.5687L37.4646 31.3458L38.9375 32.8187Z" fill="white" />
        </svg>
    ),
    'ChevronArrowDown': (
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.01 7.71211L12.02 1.70211L10.607 0.287109L6.01 4.88711L1.414 0.287109L0 1.70111L6.01 7.71211Z" fill="white" />
        </svg>
    )
}

interface IconType extends IconWrapperType {
    icon: keyof typeof icons
}

const Icon: React.FC<IconType> = ({
    icon,
    ...rest
}) => {
    return (
        <IconWrapper {...rest}>
            {icons[icon]}
        </IconWrapper>
    )
}

export default Icon;