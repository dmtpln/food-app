import React from 'react';
import {Box, Typography} from "@mui/material";

import products from './products.json'

export const Result = ({ data }) => {
    const result = Object.keys(data).reduce((acc, product) => {
        return Object.values(data[product]).reduce((acc2, weight) => {
            const factor = weight / 100;

            return {
                ccal: acc2.ccal + Math.round(products[product] * factor),
                carbs: acc2.carbs + 0,
                fats: acc2.fats + 0,
                proteins: acc2.proteins + 0
            }
        }, acc)
    }, {
        ccal: 0,
        carbs: 0,
        fats: 0,
        proteins: 0
    })

    if (!result.ccal) {
        return null
    }

    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant='h6'>
                Результат
            </Typography>
            <Typography>ККал: {result.ccal}</Typography>
            <Typography>Б/Ж/У: {result.proteins}/{result.fats}/{result.carbs}</Typography>
        </Box>
    );
}
