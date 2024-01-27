import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface TypeInput {
    name: string,
    placeholder: string
}

const Input = forwardRef(( props: TypeInput, ref) => {
    return(
        <TextField
        variant='standard'
        margin='dense'
        inputRef={ref}
        fullWidth
        type='text'
        {...props}
        >
        </TextField>
    )
})

export default Input