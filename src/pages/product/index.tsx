import React, { Fragment, useState } from "react";
import { ProductSection } from "./style";
import Flex from "../../components/flex";
import Card from "../../components/card";
import _PRODUCTS from "../../mockdata/product";
import Grid from "../../components/grid";
import SpinSection from "./spin-section";

const ProductPage: React.FC = () => {

    const [activeProduct, setActiveProduct] = useState<number | null>();

    return (
        <Fragment>
            <h1 style={{ marginBottom: '0.5em' }}>Available Items</h1>
            <Flex $gap="2rem">
                <ProductSection>
                    <Grid $count={3} $gap="1rem">
                        {_PRODUCTS.map((item: ProductType, key: number) => (
                            <Card {...item} active={activeProduct === key} onClick={() => setActiveProduct(key)} />
                        ))}
                    </Grid>
                </ProductSection>
                <SpinSection />
            </Flex>
        </Fragment>
    )
}

export default ProductPage;
