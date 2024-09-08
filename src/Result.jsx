import React from 'react';
import {Box, Typography} from "@mui/material";


export const Result = ({ data, products }) => {
    const result = Object.keys(data).reduce((acc, productName) => {
        const product = products.find((product) => product.name === productName);

        return Object.values(data[productName]).reduce((acc2, weight) => {
            const factor = weight / 100;

            return {
                ccal: acc2.ccal + Math.round(product.ccal * factor),
                carbs: acc2.carbs + Math.round(product.carbs * factor),
                fats: acc2.fats + Math.round(product.fats * factor),
                proteins: acc2.proteins + Math.round(product.proteins * factor)
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
