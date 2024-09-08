import React, { useCallback, useDeferredValue, useMemo, useState } from 'react';
import { Box, Grid2 as Grid, Paper, Stack, Table, TableContainer } from "@mui/material";
import Sticky from 'react-sticky-el';
import sortBy from "lodash/sortBy";

import { Result } from "./Result";
import { ProductsTableBody } from "./ProductsTableBody";
import { ProductsTableHead } from "./ProductsTableHead";
import productsData from './products.json'
import {Search} from "./Search";

const products = Object.keys(productsData);
const MEALS_AMOUNT = 3;

export const ProductsTable = () => {
    const [data, setData] = useState({})
    const deferredData = useDeferredValue(data)

    const meals = useMemo(() => Array.from({ length: MEALS_AMOUNT }).map((_, index) => `Приём ${index + 1}`), [])

    const sortedProducts = useMemo(() => sortBy(products, [
        (product) => !deferredData[product],
        (product) => product
    ]), [deferredData])

    const handleChangeWeight = useCallback( (product, meal, value) => {
        setData((val) => ({
            ...val,
            [product]: {
                ...val[product],
                [meal]: value
            }
        }))
    }, [])

    return (
        <Stack spacing={2}>
            <Sticky stickyStyle={{ zIndex: 1000 }}>
                <Box sx={{ paddingY: 3, bgcolor: 'background.paper' }}>
                    <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'end' }}>
                        <Grid size={{
                            sm: 6,
                            md: 4
                        }}>
                            <Search />
                        </Grid>
                        <Grid
                            size={{
                                xs: 'grow',
                                sm: 3
                            }}
                        >
                            <Result data={deferredData} />
                        </Grid>
                    </Grid>
                </Box>
            </Sticky>
            <TableContainer component={Paper}>
                <Table>
                    <ProductsTableHead meals={meals} />
                    <ProductsTableBody
                        meals={meals}
                        products={sortedProducts}
                        onChangeWeight={handleChangeWeight}
                    />
                </Table>
            </TableContainer>
        </Stack>
    );
}
