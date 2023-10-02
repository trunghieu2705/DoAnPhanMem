//import { Button } from "antd";
import React from "react";
import {SearchOutlined} from '@ant-design/icons'
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ButtonInputSearch = (props) => {
    const{ 
            size, placeholder, textButton, 
            bordered,backgroundColorInput ='#fff', 
            backgroundColorButton = 'rbg(13, 92, 182)',
            colorButton ='rbg(13, 92, 182)'
        } 
   = props
    return (
        <div style={{display: 'flex'}}>
            <InputComponent 
                    size={size} 
                    placeholder={placeholder} 
                    bordered={bordered} 
                    style={{backgroundColor: backgroundColorInput}}/>
            <ButtonComponent 
                    size={size} 
                    style={{background: backgroundColorButton, border: !bordered && 'none'}} 
                    icon={<SearchOutlined color={colorButton} style={{color: colorButton}} />}
                    textButton={textButton}
                    styleTextButton={{ color: colorButton}}
            />
        </div>
    )
}
export default ButtonInputSearch
