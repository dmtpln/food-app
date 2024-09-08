import React, { memo } from 'react';
import {Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import { isEqual } from "lodash";

import { WeightInput } from "./WeightInput";

export const ProductsTableBody = memo(({ products, meals, onChangeWeight }) => (
    <TableBody>
        {products.map((product) => (
            <TableRow key={product} data-product={product.toLowerCase()}>
                <TableCell colSpan={meals.length} sx={{ paddingX: 0 }}>
                    <Table>
                        <TableRow>
                            <TableCell colSpan={meals.length} sx={{ border: 0, paddingTop: 0 }}>
                                <Typography variant='subtitle1'>{product}</Typography>
                                <Typography variant='caption' component='p'>К/Б/Ж/У: 0/0/0/0</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {meals.map((meal) => (
                                <TableCell width='33%' key={meal} align="left" sx={{ border: 0, paddingY: 0 }}>
                                    <WeightInput product={product} meal={meal} onChange={onChangeWeight} />
                                </TableCell>
                            ))}
                        </TableRow>
                    </Table>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
), isEqual)
