import React, {useCallback, useRef, useState} from 'react';
import { TextField } from "@mui/material";

export const Search = () => {
    const highlightedEl = useRef(null);

    const [value, setValue] = useState('')

    const handleChange = useCallback((e) => setValue(e.target.value), [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        highlightedEl.current?.classList.remove("highlight")

        const clearValue = value.toLowerCase().replace(/\s+/, ' ').trim()

        if (clearValue) {
            highlightedEl.current = document.querySelector(`[data-product*="${clearValue}"]`)

            if (highlightedEl.current) {
                highlightedEl.current.scrollIntoView({
                    behavior: 'smooth',
                    block: "center"
                })

                highlightedEl.current.classList.add('highlight');

                setTimeout(() => {
                    highlightedEl.current.classList.remove('highlight');
                }, 5000)
            }
        }
    }, [value])

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                size='small'
                label="Поиск по названию"
                variant="outlined"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
}
