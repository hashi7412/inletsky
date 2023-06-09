import React from "react";
import { Flex } from "../basic";
import { NextButton, PrevButton } from "./style";
import { Icon } from "../custom";

type SlideNavigatePropsType = {
    sliderRef: any
}

const SlideNavigate: React.FC<SlideNavigatePropsType> = ({
    sliderRef
}) => {
    const onSlidePrev = () => {
        if (!sliderRef.current) return
        const prevBtn = sliderRef.current.querySelector('.swiper-button-prev') as HTMLElement;
        prevBtn?.click();
    }

    const onSlideNext = () => {
        if (!sliderRef.current) return
        const nextBtn = sliderRef.current.querySelector('.swiper-button-next') as HTMLElement;
        nextBtn?.click();
    }

    return (
        <Flex $style={{
            gap: "0.5rem"
        }}>
            <PrevButton onClick={onSlidePrev}>
                <Icon icon="ArrowLeft" />
            </PrevButton>
            <NextButton onClick={onSlideNext}>
                <Icon icon="ArrowRight" />
            </NextButton>
        </Flex>
    )
}

export default SlideNavigate;
