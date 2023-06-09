import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { GV } from "../../../../utils/style.util";

import { Flex, Heading, P, Link } from "../../../../components/basic";
import { Icon, Badge } from "../../../../components/custom";

import Image1 from "../../../../assets/img/portfolio/1.png";
import Image2 from "../../../../assets/img/portfolio/2.png";
import Image3 from "../../../../assets/img/portfolio/3.png";

import "swiper/css";
import "swiper/css/pagination";
import SlideNavigate from "../../../../components/slide-navigate";
import useResize from "../../../../hooks/useResize";

const Card = styled.div<{ bg?: string }>`
    position: relative;
    ${({ bg }) => bg ? `background: url(${bg});` : ``}
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 60%;
    border-radius: 3rem;
    overflow: hidden;
    text-align: left;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1C1C1C;
        opacity: 0.5;
        content: "";
    }

    & > div {
        position: relative;
        z-index: 3;
    }

    @media (max-width: 768px) {
        border-radius: 1rem;
    }
`

const SwiperContainer = styled.div`
    width: 100%;
    height: 32vw;

    @media (max-width: 768px) {
        height: 50vw;
    }

    & .swiper-slide-active {
        z-index: 5;
    }

    .swiper-slide {
        > div:last-child {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            content: "";
        }

        &.swiper-slide-active {
            > div:first-child {
                transform: scale(1.4);
            }
        }
        &:not(.swiper-slide-active) {
            > div:last-child {
                display: none;
            }
        }
    }
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 7rem;

    @media (max-width: 1440px) {
        margin-left: 0;
    }

    @media (max-width: 600px) {
        > div:first-child {
            display: none;
        }
    }
`

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

const RecentWorkSection = () => {

    const sliderRef = useRef<HTMLDivElement>(null);

    const [isTablet, setIsTablet] = useState(false);

    const [w,] = useResize();

    useEffect(() => {
        if (w <= 768) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, [w])

    return (
        <Section>
            <Flex $style={{ fDirection: "column", vAlign: "center", gap: "1rem" }}>
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <Badge>Our Recent Work</Badge>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 30 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <Heading level={1} $style={{ align: "center" }}>Optimal performance</Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, translateY: 30 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 1 }}
                >
                    <Flex $style={{
                        maxW: "992px"
                    }}>
                        <P $style={{ align: "center" }}>With no need to restrict applications or workloads to one type of business cloud solution, organisations are adopting our Hybrid and Multi-Cloud model because it delivers a fluid mix of cloud computing solutions with exceptional business outcomes.</P>
                    </Flex>
                </motion.div>
            </Flex>
            <SwiperContainer ref={sliderRef}>
                <Swiper
                    slidesPerView={isTablet ? 1.7 : 2.5}
                    loop={true}
                    centeredSlides={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <Card bg={Image1}></Card>
                        <Flex
                            $style={{
                                fDirection: "column",
                                vAlign: "flex-start",
                                hAlign: "center",
                                gap: "2rem",
                                w: "65%",
                                queries: {
                                    767: {
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Heading level={3}>Digital Transformation</Heading>
                            <P
                                $style={{
                                    align: "left",
                                    queries: {
                                        768: {
                                            size: "0.5rem"
                                        }
                                    }
                                }}
                            >Develop a plan for the pace of digital. Inletsky drives digital transformation programs with a complete vision for change.</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read more  →</Link>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card bg={Image2}></Card>
                        <Flex
                            $style={{
                                fDirection: "column",
                                vAlign: "flex-start",
                                hAlign: "center",
                                gap: "2rem",
                                w: "65%",
                                queries: {
                                    767: {
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Heading level={3}>Digital Transformation</Heading>
                            <P
                                $style={{
                                    align: "left",
                                    queries: {
                                        768: {
                                            size: "0.5rem"
                                        }
                                    }
                                }}
                            >Develop a plan for the pace of digital. Inletsky drives digital transformation programs with a complete vision for change.</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read more  →</Link>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card bg={Image3}></Card>
                        <Flex
                            $style={{
                                fDirection: "column",
                                vAlign: "flex-start",
                                hAlign: "center",
                                gap: "2rem",
                                w: "65%",
                                queries: {
                                    767: {
                                        gap: "1rem"
                                    }
                                }
                            }}
                        >
                            <Heading level={3}>Digital Transformation</Heading>
                            <P
                                $style={{
                                    align: "left",
                                    queries: {
                                        768: {
                                            size: "0.5rem"
                                        }
                                    }
                                }}
                            >Develop a plan for the pace of digital. Inletsky drives digital transformation programs with a complete vision for change.</P>
                            <Link to="" $style={{
                                color: GV("danger"),
                                textTransform: "uppercase"
                            }}>Read more  →</Link>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </SwiperContainer>
            <SlideNavigate sliderRef={sliderRef} />
        </Section>
    )
}

export default RecentWorkSection;
