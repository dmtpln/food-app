import React from 'react';
import { TableCell, TableHead, TableRow } from "@mui/material";

export const ProductsTableHead = ({ meals }) => {
    return (
        <TableHead>
            <TableRow>
                {meals.map((meal) => (
                    <TableCell key={meal} width='33%' align="center">{meal}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
