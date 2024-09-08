import React, { memo } from 'react';
import {Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import { isEqual } from "lodash";

import { WeightInput } from "./WeightInput";

export const ProductsTableBody = memo(({ products, meals, onChangeWeight }) => (
    <TableBody>
        {products.map((product) => (
            <TableRow key={product.name} data-product={product.name.toLowerCase()}>
                <TableCell colSpan={meals.length} sx={{ paddingX: 0 }}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={meals.length} sx={{ border: 0, paddingTop: 0 }}>
                                    <Typography variant='subtitle1'>{product.name}</Typography>
                                    <Typography variant='caption' component='p'>К/Б/Ж/У: {product.ccal}/{product.proteins}/{product.fats}/{product.carbs}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                {meals.map((meal) => (
                                    <TableCell width='33%' key={meal} align="left" sx={{ border: 0, paddingY: 0 }}>
                                        <WeightInput product={product.name} meal={meal} onChange={onChangeWeight} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
), isEqual)
