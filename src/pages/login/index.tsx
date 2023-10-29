import React from 'react'
import { ButtonsWrapper, Container, Image, Wrapper, WrapperLeft, WrapperRight } from './styles'
import Logo from '../../assets/logo.svg'
import ImageLoginPage from '../../assets/svg-pic.png'
import TitleInSection from '../../ui-components/Text/TitleInSection';
import Google from '../../assets/GoogleIcon.svg'
import Github from '../../assets/GithubIcon.svg'
import LinkedIN from '../../assets/LinkedINicon.svg'
import Letter from '../../assets/letterInput.svg'
import { Button } from '../../ui-components/Button';
import { Block } from '../../ui-components/Block';

export const Login = () => {

    return (
        <Container>
            <Wrapper >
                <WrapperLeft>
                    <TitleInSection title='Вход'
                        fontSize='50px'
                        fontWeight='400'
                        fontFamily='Unbounded' />
                    <div>Еще нет аккаунта? Регистрация</div>

                    <span>Войти через</span>
                    <ButtonsWrapper>
                        <Button display='flex' alignItems='center' flexDirection='column'>
                            <img src={Google} alt="" />
                            <span>Google</span>
                        </Button>
                        <Button display='flex' alignItems='center' flexDirection='column'>
                            <img src={Github} alt="" />
                            <span>Github</span>
                        </Button>
                        <Button display='flex' alignItems='center' flexDirection='column'>
                            <img src={LinkedIN} alt="" />
                            <span>Linkedin</span>
                        </Button>
                    </ButtonsWrapper>

                    <span>Или с помощью почты и пароля</span>

                    <div>
                        <label htmlFor="">E-mail</label>
                        <Block backgroundColor='#F7F7F8' 
                            display='flex' 
                            alignItems='center' 
                            borderRadius='50px'
                            padding='16px 24px 16px 24px'>
                            <img src={Letter} alt="" />
                            <input type="text" placeholder='example@gmail.com' />
                        </Block>
                        <label htmlFor="">Пароль</label>
                        <Block backgroundColor='#F7F7F8' 
                            display='flex' 
                            alignItems='center' 
                            borderRadius='50px'
                            padding='16px 24px 16px 24px'>
                            <img src={Letter} alt="" />
                            <input type="text" placeholder='example@gmail.com' />
                        </Block>
                        <Button>Войти</Button>
                        <span>Забыли пароль?</span><span>Восстановить здесь</span>
                    </div>
                </WrapperLeft>

                <WrapperRight>
                    <Image src={Logo} alt="Logo" />
                    <TitleInSection title='Name' fontSize='60px' fontBold='500' />
                    <TitleInSection title='Одна система для всех ваших вакансий'
                        fontSize='22px'
                        fontBold='400'
                        marginBottom='36px'
                        fontWeight='400'
                    />

                    <img src={ImageLoginPage} alt="" />
                </WrapperRight>
            </Wrapper>
        </Container>
    );
};