import React from "react";
import { SlidebarBoard, SlidebarContainer, SlidebarThumb, SlidebarTrack } from "./style";

type SlidebarPropsType = {
    min?: number
    max?: number
    leftLabel?: string
    rightLabel?: string
    value?: number
    onChange?: any
}

const Slidebar: React.FC<SlidebarPropsType> = ({
    min,
    max,
    leftLabel,
    rightLabel,
    value,
    onChange
}) => {
    return (
        <SlidebarContainer>
            <SlidebarBoard>
                {/* <SlidebarTrack value={value / (max - min)} /> */}
                <SlidebarThumb />
            </SlidebarBoard>
        </SlidebarContainer>
    )
}

export default Slidebar;
