import React from "react";
import Flex from "../../../../components/basic/flex";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styled from "styled-components";
import Icon from "../../../../components/custom/icon";
import { GV } from "../../../../utils/style.util";
import Heading from "../../../../components/basic/heading";
import { P } from "../../../../components/basic/text";
import Badge from "../../../../components/custom/badge";

import "swiper/css";
import "swiper/css/pagination";

import Avatar from "../../../../assets/img/avatar.png";

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
        <Flex $style={{
            fDirection: "column",
            vAlign: "center",
            mb: "7rem",
            gap: "3rem"
        }}>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "1rem"
            }}>
                <Badge>Tell us what to explore</Badge>
                <Heading level={1}>Testimonials</Heading>
                <P>Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.</P>
            </Flex>
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
            <Flex>
                <PrevButton onClick={onSlideNext}>
                    <Icon icon="ArrowLeft" />
                </PrevButton>
                <NextButton onClick={onSlidePrev}>
                    <Icon icon="ArrowRight" />
                </NextButton>
            </Flex>
        </Flex>
    )
}

export default TestimonialsSection;
