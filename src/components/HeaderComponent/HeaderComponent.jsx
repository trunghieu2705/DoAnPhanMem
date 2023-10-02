import {Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccout,WrapperTextHeaderSmall } from './style'
//import Search from 'antd/es/input/Search'
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
    return (
        <div>
        <WrapperHeader style={{backgroundColor: 'rgb(26, 148, 255)'}}>
            <Col span={6}>
                <WrapperTextHeader>Laptrinhvien</WrapperTextHeader>
            </Col>
            <Col span={12}>
            <ButtonInputSearch 
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="input search text" 
             />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px'}} >
               <WrapperHeaderAccout> 
                    <UserOutlined style={{fontSize: '30px'}}/>
                    <div>
                        <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                    <div>
                    <WrapperTextHeaderSmall>Tài khoản </WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                    </div>
                    </div>
                 </WrapperHeaderAccout>
                 <div>
                    <Badge count={4} size="small">
                         <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }}/>
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                 </div>
            </Col>
         </WrapperHeader>
        </div>
    )
}
export default HeaderComponent