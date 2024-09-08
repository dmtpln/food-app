import React, { memo } from 'react';
import { TableBody, TableCell, TableRow,  Typography } from "@mui/material";
import { isEqual } from "lodash";

import { WeightInput } from "./WeightInput";

export const ProductsTableBody = memo(({ products, meals, onChangeWeight }) => (
    <TableBody>
        {products.map((product) => (
            <TableRow
                key={product}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                data-product={product.toLowerCase()}
            >
                <TableCell component="th" scope="row">
                    {product}
                    <Typography variant='caption' component='p'>К/Б/Ж/У: 0/0/0/0</Typography>
                </TableCell>
                {meals.map((meal) => (
                    <TableCell key={meal} align="center">
                        <WeightInput product={product} meal={meal} onChange={onChangeWeight} />
                    </TableCell>
                ))}
            </TableRow>
        ))}
    </TableBody>
), isEqual)
