import React from "react";
import { IconWrapper, IconWrapperType } from "./style";

const icons = {
    'Plus': (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.5H7V7.5H0V9.5H7V16.5H9V9.5H16V7.5H9V0.5Z" fill="#007AFC" />
        </svg>
    ),
    'Refresh': (
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M5.943 13.881a5.47 5.47 0 01-1.6-4.788l1.995.647-1.476-5.838L.104 7.74l2.078.667a7.6 7.6 0 002.16 7.03c2.349 2.283 5.798 2.828 8.666 1.677l-.54-2.162c-2.12 1.01-4.759.647-6.525-1.07zM17.766 11.518a7.6 7.6 0 00-2.16-7.03C13.256 2.204 9.807 1.658 6.94 2.81l.54 2.161c2.12-1.01 4.759-.646 6.525 1.07a5.47 5.47 0 011.6 4.789l-1.995-.647 1.476 5.839 4.758-3.839-2.078-.666z"></path>
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