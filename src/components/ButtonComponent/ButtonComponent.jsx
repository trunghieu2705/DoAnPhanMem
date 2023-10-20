import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, disabled, ...rests }) => {
    return (
        <Button
            size={size}
            style={{
                ...styleButton,
                background: styleButton && disabled ? '#ccc' : styleButton && styleButton.background
            }}
            {...rests}
        >
            <span style={{ color: styleTextButton }}>{textButton}</span>
        </Button>
    );
}

export default ButtonComponent;