import React, {useCallback, useMemo, useState} from 'react';
import {InputAdornment, TextField} from "@mui/material";

export const WeightInput = ({ product, meal, onChange }) => {
    const [value, setValue] = useState('');

    const slotProps = useMemo(() => ({
        input: {
            endAdornment: <InputAdornment position="end">гр.</InputAdornment>,
        }
    }), [])

    const handleChange = useCallback((e) => setValue(e.target.value.replaceAll(/\D/g, '')), [])

    const handleBlur = useCallback(() => onChange(product, meal, value), [product, meal, value, onChange])

    return (
        <TextField
            fullWidth
            size='small'
            label='Вес'
            slotProps={slotProps}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
}
