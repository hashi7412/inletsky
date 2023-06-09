import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { GV } from "../../../../utils/style.util";

import { Flex, Heading, P } from "../../../../components/basic";
import { Badge } from "../../../../components/custom";

import "swiper/css";
import "swiper/css/pagination";

import Avatar from "../../../../assets/img/avatar.png";
import SlideNavigate from "../../../../components/slide-navigate";
import Subsection from "../../../../components/layout/subsection";

const PrevButton = styled.div`
    position: relative;
    cursor: pointer;

    &:after {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
        transform: translate(-40%, -50%);
        width: 30px;
        height: 30px;
        background: ${GV("danger")};
        border-radius: 50%;
        content: "";
    }
`

const NextButton = styled.div`
    position: relative;
    cursor: pointer;

    &:after {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -1;
        transform: translate(40%, -50%);
        width: 30px;
        height: 30px;
        background: ${GV("danger")};
        border-radius: 50%;
        content: "";
    }
`

const SwiperContainer = styled.div`
    width: 100%;
    height: 100%;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        width: 250px;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: #22262E;
    border-radius: 20px;
`

const TestimonialsSection = () => {

    const sliderRef = React.useRef<HTMLDivElement>(null);

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
        <Subsection $style={{
            bg: GV("bg-sub"),
            p: "2rem 0"
        }}>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "3rem"
            }}>
                <Flex $style={{
                    fDirection: "column",
                    vAlign: "center",
                    gap: "1rem"
                }}>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                    >
                        <Badge>Tell us what to explore</Badge>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <Heading level={1}>Testimonials</Heading>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, translateY: 50 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <P>Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.</P>
                    </motion.div>
                </Flex>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{ width: "100%" }}
                >
                    <SwiperContainer ref={sliderRef}>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={20}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            grabCursor={true}
                            navigation={true}
                            loop={true}
                            dir="rtl"
                        >
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card>
                                    <Flex $style={{
                                        vAlign: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <img src={Avatar} />
                                        <Heading level={5}>Joe Smith</Heading>
                                    </Flex>
                                    <P $style={{
                                        align: "left",
                                        size: "12px"
                                    }}>global community is proof that you can be a successful freelancer no matter where you live. Collaborate, network,</P>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </SwiperContainer>
                </motion.div>
                <SlideNavigate sliderRef={sliderRef} />
            </Flex>
        </Subsection >
    )
}

export default TestimonialsSection;
