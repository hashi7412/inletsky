import React from "react";
import Flex from "../../../../components/basic/flex";
import Badge from "../../../../components/custom/badge";
import Heading from "../../../../components/basic/heading";
import Panel from "../../../../components/custom/panel";

import Image1 from "../../../../assets/img/data-kind/1.png";
import Image2 from "../../../../assets/img/data-kind/2.png";
import Image3 from "../../../../assets/img/data-kind/3.png";
import List, { ListItem } from "../../../../components/basic/list";
import Link from "../../../../components/basic/link";
import Subsection from "../../../../components/layout/subsection";
import { GV } from "../../../../utils/style.util";

const DataKindSection = () => {
    return (
        <Subsection>
            <Flex $style={{
                fDirection: "column",
                vAlign: "center",
                gap: "3rem",
                queries: {
                    768: {
                        gap: "1rem"
                    }
                }
            }}>
                <Badge>any kind of data</Badge>
                <Flex $style={{
                    maxW: "900px"
                }}>
                    <Heading level={1} $style={{
                        align: "center"
                    }}>Analyze your Unique, Multidimensional data.</Heading>
                </Flex>
                <Flex $style={{
                    gap: "3.5rem",
                    queries: {
                        992: {
                            fDirection: "column"
                        },
                        768: {
                            w: "80%",
                            gap: "2rem"
                        }
                    }
                }}>
                    <Flex $style={{
                        hAlign: "center",
                        vAlign: "center",
                        p: "5rem 0 0",
                        queries: {
                            992: {
                                p: "0"
                            }
                        }
                    }}>
                        <Panel>
                            <Flex $style={{
                                fDirection: "column",
                                vAlign: "center",
                                gap: "3rem",
                                queries: {
                                    768: {
                                        gap: "1rem"
                                    }
                                }
                            }}>
                                <img src={Image1} />
                                <List>
                                    <ListItem $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "12px"
                                            }
                                        }
                                    }}>Full Motion Video</ListItem>
                                </List>
                            </Flex>
                        </Panel>
                    </Flex>
                    <Flex $style={{
                        hAlign: "center",
                        vAlign: "center",
                        p: "0 0 5rem",
                        queries: {
                            992: {
                                p: "0"
                            }
                        }
                    }}>
                        <Panel>
                            <Flex $style={{
                                fDirection: "column",
                                vAlign: "center",
                                gap: "3rem",
                                queries: {
                                    768: {
                                        gap: "1rem"
                                    }
                                }
                            }}>
                                <img src={Image2} />
                                <List>
                                    <ListItem $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "12px"
                                            }
                                        }
                                    }}>Geospatial Data</ListItem>
                                </List>
                            </Flex>
                        </Panel>
                    </Flex>
                    <Flex $style={{
                        hAlign: "center",
                        vAlign: "center",
                        p: "5rem 0 0",
                        queries: {
                            992: {
                                p: "0"
                            }
                        }
                    }}>
                        <Panel>
                            <Flex $style={{
                                fDirection: "column",
                                vAlign: "center",
                                gap: "3rem",
                                queries: {
                                    768: {
                                        gap: "1rem"
                                    }
                                }
                            }}>
                                <img src={Image3} />
                                <List>
                                    <ListItem $style={{
                                        size: "20px",
                                        queries: {
                                            768: {
                                                size: "12px"
                                            }
                                        }
                                    }}>Image Data</ListItem>
                                </List>
                            </Flex>
                        </Panel>
                    </Flex>
                </Flex>
                <Link to="" $style={{
                    color: GV("danger"),
                    textTransform: "uppercase"
                }}>Learn More  →</Link>
            </Flex>
        </Subsection>
    )
}

export default DataKindSection;
