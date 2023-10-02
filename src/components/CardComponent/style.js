import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 200px;
    & img {
        height: 200px;
        width: 200px;
    },
    position: relative;

`

export const WrapperImageStyle = styled.img`
    top: -1px;
    left: -1px;
    border-top-left-radius: 3px;
    postition: absolute;
    height: 14px !important;
    width: 68px !important;
`
export const StyleNameProduct = styled.div`
    font-weight:400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56, 56, 61);
    font-weight: 400;
`

export const WrapperReporText = styled.div`
    font-size: 11px;
    color: rbg(128, 128, 137);
    display:flex;
    align-items: center;
    margin: 6px 0 0px;
`
export const WrapperPriceText = styled.div`
    font-size: 16px;
    color: rgb(255, 66, 78);
    font-weight:500;
    
`

export const WrapperDiscountText = styled.div`
    font-size: 12px;
    color: rgb(255, 66, 78);
    font-weight:500;
`