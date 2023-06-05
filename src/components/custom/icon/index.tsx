import React from "react";
import { IconWrapper, IconWrapperType } from "./style";

const icons = {
    'Deals': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5721 12L20.8001 12C20.8001 7.58172 17.135 4 12.614 4C8.09296 4 4.42794 7.58172 4.42794 12H8.52101V12C8.52101 9.79085 10.3535 7.99999 12.614 7.99999C14.8746 7.99999 16.7071 9.79085 16.7071 12L19.5721 12ZM19.5721 12C19.5721 16.4183 15.9071 20 11.386 20C6.86501 20 3.19998 16.4183 3.19998 12L7.29301 12C7.29301 14.2091 9.12552 16 11.386 16C13.6466 16 15.4791 14.2091 15.4791 12L19.5721 12Z" fill="currentColor"></path>
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