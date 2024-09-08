import React from 'react';
import { TableCell, TableHead, TableRow } from "@mui/material";

export const ProductsTableHead = ({ meals }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Продукт</TableCell>
                {meals.map((meal) => (
                    <TableCell key={meal} align="center">{meal}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
