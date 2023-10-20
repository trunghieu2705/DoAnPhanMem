//import {Image} from 'antd'
//import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import {StarFilled} from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px'}}
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <WrapperImageStyle src={logo} style={{width: '68px', height: '14px', position: 'absolute', top: 0, left: 0 }}/>
            <StyleNameProduct>Iphone</StyleNameProduct>
            <WrapperReporText>
                <span style={{marginRight: '4px'}}>
                <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }}/>
                </span>
                <WrapperStyleTextSell>
                    | Đã bán 100+
                </WrapperStyleTextSell>
                </WrapperReporText>
                <WrapperPriceText>
                    <span style={{marginRight: '8px'}}>1.000.000d </span>
                    <WrapperDiscountText>
                        -5%
                    </WrapperDiscountText>
                </WrapperPriceText>
        </WrapperCardStyle>
    )
}
export default CardComponent