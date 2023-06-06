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
            <path d="M6.01 7.71211L12.02 1.70211L10.607 0.287109L6.01 4.88711L1.414 0.287109L0 1.70111L6.01 7.71211Z" fill="currentColor" />
        </svg>
    ),
    "Menu": (
        <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.75C0 1.36323 0.153645 0.992293 0.427136 0.718802C0.700626 0.445312 1.07156 0.291666 1.45833 0.291666H27.7083C28.0951 0.291666 28.466 0.445312 28.7395 0.718802C29.013 0.992293 29.1667 1.36323 29.1667 1.75C29.1667 2.13677 29.013 2.50771 28.7395 2.7812C28.466 3.05469 28.0951 3.20833 27.7083 3.20833H1.45833C1.07156 3.20833 0.700626 3.05469 0.427136 2.7812C0.153645 2.50771 0 2.13677 0 1.75ZM0 10.5467C0 10.1599 0.153645 9.78896 0.427136 9.51547C0.700626 9.24198 1.07156 9.08833 1.45833 9.08833H27.7083C28.0951 9.08833 28.466 9.24198 28.7395 9.51547C29.013 9.78896 29.1667 10.1599 29.1667 10.5467C29.1667 10.9334 29.013 11.3044 28.7395 11.5779C28.466 11.8514 28.0951 12.005 27.7083 12.005H1.45833C1.07156 12.005 0.700626 11.8514 0.427136 11.5779C0.153645 11.3044 0 10.9334 0 10.5467ZM1.45833 17.885C1.07156 17.885 0.700626 18.0386 0.427136 18.3121C0.153645 18.5856 0 18.9566 0 19.3433C0 19.7301 0.153645 20.101 0.427136 20.3745C0.700626 20.648 1.07156 20.8017 1.45833 20.8017H27.7083C28.0951 20.8017 28.466 20.648 28.7395 20.3745C29.013 20.101 29.1667 19.7301 29.1667 19.3433C29.1667 18.9566 29.013 18.5856 28.7395 18.3121C28.466 18.0386 28.0951 17.885 27.7083 17.885H1.45833Z" fill="#F8F8F8" />
        </svg>
    ),
    "Close": (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.20833L16.5833 16.7917M2 16.7917L16.5833 2.20833" stroke="currentColor" strokeWidth="2.91667" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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