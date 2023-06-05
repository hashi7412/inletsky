import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Badge from "../../../../components/custom/badge";
import Flex from "../../../../components/basic/flex";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Icon from "../../../../components/custom/icon";

import "swiper/css";
import "swiper/css/pagination";

const PortfolioSection = () => {
    
    return (
        <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem", mb: "7rem" }}>
            <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                <Badge>Our Recent Work</Badge>
                <Heading level={1} $style={{ align: "center" }}>Portfolio</Heading>
                <P $style={{ align: "center" }}>Build. Launch. Grow</P>
            </Flex>
            <Flex>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    virtual
                >
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 1</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 2</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 3</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 4</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 5</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 6</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 7</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 8</SwiperSlide>
                    <SwiperSlide style={{height:"10rem", width: "10rem"}}>Slide 9</SwiperSlide>
                </Swiper>
            </Flex>
            <Flex>
                <Icon icon="ArrowLeft" />
                <Icon icon="ArrowRight" />
            </Flex>
        </Flex>
    )
}

export default PortfolioSection;
