import React from 'react'
import { ButtonsWrapper, Container, Image, Line, Wrapper, WrapperLeft, WrapperRight } from './styles'
import Logo from '../../assets/logo.svg'
import ImageLoginPage from '../../assets/svg-pic.png'
import TitleInSection from '../../ui-components/Text/TitleInSection';
import Google from '../../assets/GoogleIcon.svg'
import Github from '../../assets/GithubIcon.svg'
import LinkedIN from '../../assets/LinkedINicon.svg'
import Letter from '../../assets/letterInput.svg'
import LockIcon from '../../assets/lockIcon.svg'
import Arrow from '../../assets/arrow.svg'
import PasswordEye from '../../assets/EyeOn.png'
import { Button } from '../../ui-components/Button';
import { Block } from '../../ui-components/Block';
import { Input } from '../../ui-components/Input';
import Label from '../../ui-components/Label';
import Span from '../../ui-components/Span';
import TitleH1 from '../../ui-components/Text/TitleH1';
import { theme } from '../../theme/theme'

export const Login = () => {

    return (
        <Container>
            <Wrapper >
                <WrapperLeft>
                    <TitleH1 text='Вход'
                        fontSize='50px'
                        fontWeight='500'
                        fontBold='700'
                        fontFamily='Unbounded'
                        marginBottom='16px' />
                    <Span>
                        <Span text='Еще нет аккаунта?  '
                            color={theme.colors.grey}
                            fontSize='16px' />
                        <Span text='Регистрация'
                            cursor='pointer'
                            color={theme.colors.Primary_Purple}
                            fontWeight='500' />
                    </Span>

                    <Span text='Войти через'
                        fontSize='16px'
                        fontWeight='500'
                        fontFamily='Nunito'
                        marginTop='40px' />

                    <ButtonsWrapper>
                        <Button display='flex'
                            alignItems='center'
                            flexDirection='column'
                            borderRadius='16px'
                            width='141px'
                            height='68px'
                            backgroundColor={theme.colors.white}
                            padding='6px 8px 12px 8px'>
                            <img src={Google} alt="" />
                            <span>Google</span>
                        </Button>
                        
                        <Button display='flex'
                            alignItems='center'
                            flexDirection='column'
                            borderRadius='16px'
                            width='141px'
                            height='68px'
                            backgroundColor={theme.colors.black}
                            padding='6px 8px 12px 8px'>
                            <img src={Github} alt="" />
                            <Span text='Github' color='white' />
                        </Button>

                        <Button display='flex'
                            alignItems='center'
                            flexDirection='column'
                            borderRadius='16px'
                            width='141px'
                            height='68px'
                            backgroundColor={theme.colors.blue}
                            padding='6px 8px 12px 8px'
                            border='none'>
                            <img src={LinkedIN} alt="" />
                            <Span text='Linkedin' color='white' />
                        </Button>

                    </ButtonsWrapper>

                    <Line />

                    <Span text='Или с помощью почты и пароля'
                        marginBottom='16px'
                    />

                    <div>
                        <Label text='E-mail' marginTop='16px' />
                        <Block backgroundColor={theme.colors.grey_Light}
                            display='flex'
                            alignItems='center'
                            borderRadius='50px'
                            padding='16px 24px 16px 24px'
                            width='440px'
                            marginBottom='16px'
                            border='none'
                            marginTop='5px'>
                            <img src={Letter} alt="" />
                            <Input type="text"
                                placeholder='example@gmail.com'
                                backgroundColor={theme.colors.grey_Light}
                                border='none'
                                outline='none'
                                width='328px' />
                        </Block>
                        <Label text='Пароль' />
                        <Block backgroundColor={theme.colors.grey_Light}
                            display='flex'
                            alignItems='center'
                            borderRadius='50px'
                            padding='16px 24px 16px 24px'
                            width='440px'
                            marginBottom='28px'
                            border='none'
                            marginTop='5px'
                        >
                            <img src={LockIcon} alt="" />
                            <Input type="password"
                                placeholder='Введите пароль'
                                backgroundColor={theme.colors.grey_Light}
                                border='none'
                                outline='none'
                                width='328px'
                            />
                            <img src={PasswordEye} alt="" />
                        </Block>
                        <Button display='flex'
                            alignItems='center'
                            borderRadius='50px'
                            width='440px'
                            padding='20px 40px 20px 40px'
                            backgroundColor={theme.colors.Primary_Purple}
                            border='none'
                            justifyContent='center'>
                            <Span text='Войти' color='#FFFFFF' marginRight='10px' />
                            <img src={Arrow} alt="" />
                        </Button>
                    </div>
                    <Span marginTop='20px'>
                        <Span text='Забыли пароль? ' color={theme.colors.grey} fontSize='16px' />
                        <Span text='Восстановить здесь' cursor='pointer'
                            color={theme.colors.Primary_Purple}
                            fontWeight='500' />
                    </Span>

                </WrapperLeft>

                <WrapperRight>
                    <Image src={Logo} alt="Logo" />
                    <TitleInSection title='Name' fontSize='60px' fontBold='400' />
                    <Span text='Одна система для всех ваших вакансий'
                        fontSize='22px'
                        fontWeight='500'
                        marginBottom='36px'
                    />
                    <img src={ImageLoginPage} alt="" />
                </WrapperRight>
            </Wrapper>
        </Container>
    );
};