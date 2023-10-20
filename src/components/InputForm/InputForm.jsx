
import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputForm = (props) => {
    const {placeholder = 'Nhập text', ...rests } = props
    const handleOnChangeInput = (e) => {
        props.handleOnChange(e.target.value)
    }
    return (
        
        <WrapperInputStyle placeholder={placeholder} valueInput={props.value}  {...rests} onChange={handleOnChangeInput}/>
        
    )
}
export default InputForm
