import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logologin.png'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'
import { Image } from 'antd'
import { useNavigate } from 'react-router-dom'
 

const SignUpPage = () => {
    const navigate = useNavigate() 

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }

    const handleSignUp = () => {
        console.log(email,password,confirmPassword);
    }
    const handleOnChangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnChangePassword = (value) => {
        setPassword(value)
    }

    const handleOnChangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
            <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
            <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập vào tạo tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder="Abc@gmail.com" value= {email} handleOnChange={handleOnChangeEmail}/>
                <div style={{position: 'relative'}}>
                    <span
                    onClick={() => setIsShowPassword(!isShowPassword)}
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}
                    >{
                        isShowPassword ? (
                            <EyeFilled />
                        ) : (
                            <EyeInvisibleFilled />
                        )
                    }
                    </span>
                    <InputForm placeholder="password" style={{marginBottom: '10px'}} type= {isShowPassword ? "text" : "password"}
                    value= {password} onChange={handleOnChangePassword}/>
                </div>
                <div style={{position: 'relative'}}>
                    <span
                    onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            top: '4px',
                            right: '8px'
                        }}
                    >{
                        isShowConfirmPassword ? (
                            <EyeFilled />
                        ) : (
                            <EyeInvisibleFilled />
                        )
                    }
                    </span>
                    <InputForm placeholder="password" type= {isShowConfirmPassword ? "text" : "confirm password"}
                    value= {confirmPassword} onChange={handleOnChangeConfirmPassword}/>
                </div>
                <ButtonComponent

                            disabled={!email.length || !password.length || !confirmPassword.length}
                            onClick={handleSignUp}
                            border={false}
                            size={40} 
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '26px 0 10px'
                            }} 
                            textButton={'Đăng ký'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700'}}
                        ></ButtonComponent>
                             <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
                        </WrapperContainerLeft>
                        <WrapperContainerRight>
                            <Image src={imageLogo} preview={false} alt='iamge-logo' height="203px" width="203px" />
                            <h4>Mua sắm</h4> 
            </WrapperContainerRight>
        </div>
        </div>
    )
}
export default SignUpPage