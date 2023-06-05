import React, { useState } from "react";
import { SpinContainer, StatusPanel } from "./style";
import Spin from "../../../components/spin";
import Flex from "../../../components/flex";
import Button from "../../../components/button";
import Icon from "../../../components/icon";
import Input from "../../../components/input";
import Slidebar from "../../../components/slidebar";

const SpinSection = () => {

    const [percentValue, setPercentValue] = useState<number>();
    const [price, setPrice] = useState<number>();

    return (
        <SpinContainer>
            <Spin />
            <Flex $fDirection="column" $gap="2rem">
                <Flex $hAlign="center" $gap="0.5rem">
                    <Button $bg="#3D9D43" $color="#FFFFFF">
                        <Icon icon="Deals" $color="#FFFFFF" />
                        Deal For $967,546.67
                    </Button>
                    <Button $bg="#3d789d">
                        <Icon icon="Refresh" $color={"#FFFFFF"} />
                    </Button>
                    <Button $bg="#FFFFFF">
                        <small>Quick Spin</small>
                    </Button>
                </Flex>
                <StatusPanel>
                    <Flex $fDirection="column">
                        <Input
                            label={"Chance"}
                            value={percentValue?.toString() ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPercentValue(parseFloat(e.target.value))}
                            helpSide={(
                                <Flex $vAlign="center" $gap="0.3rem">
                                    <Button $h="1.2rem" $p="0.5rem" $bg="#000000" $color="#FFFFFF" $fsize="0.7rem">Min</Button>
                                    <Button $h="1.2rem" $p="0.5rem" $bg="#000000" $color="#FFFFFF" $fsize="0.7rem">10%</Button>
                                    <Button $h="1.2rem" $p="0.5rem" $bg="#000000" $color="#FFFFFF" $fsize="0.7rem">25%</Button>
                                    <Button $h="1.2rem" $p="0.5rem" $bg="#000000" $color="#FFFFFF" $fsize="0.7rem">50%</Button>
                                    <Button $h="1.2rem" $p="0.5rem" $bg="#000000" $color="#FFFFFF" $fsize="0.7rem">Max</Button>
                                </Flex>
                            )}
                        />
                        <Input
                            label={"Price"}
                            value={price?.toString() ?? ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(parseFloat(e.target.value))}
                        />
                        <Slidebar
                            max={1000}
                            min={50}
                            leftLabel={'$' + 50}
                            rightLabel={'$' + 1000}
                        />
                    </Flex>
                </StatusPanel>
            </Flex>
        </SpinContainer>
    )
}

export default SpinSection;
