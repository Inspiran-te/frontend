import React from 'react'
import { Block } from '../../components/ui/Block'
import { theme } from '../../theme/theme'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import Span from '../../components/ui/Span'
import TitleH2 from '../../components/ui/Text/TitleH2'
import { TextArea } from '../../components/ui/Textarea'
import { Input } from '../../components/ui/Input'
import Label from '../../components/ui/Label'
import { Button } from '../../components/ui/Button'
import Image from '../../components/ui/Img'
import imageHelp from '../../assets/ImageHelpPage.png'
import Arrow from '../../assets/arrowRightGrey.svg'

export const Help = () => {

    return (
        <Container backgroundColor={theme.colors.grey_Light}>
            <Block width='100%'
                display='flex'
                flexDirection='column'
                border='none'
                boxSizing='border-box'
                padding='0px 40px 20px 40px'
                marginBottom='149px'
                >

                <Header />

                <Block display='flex'
                    flexDirection='column'>

                    <TitleH2
                        text='Помощь'
                        fontFamily='Unbounded'
                        fontWeight='400'
                        fontSize='36px' />
                    <Span width='100%' text='В случае проблем или пожеланий, пожалуйста, пищите на почту 123456@gmail.com или отправьте сообщение в форме обратной связи'
                        fontSize='18px'
                        fontFamily='Nunito'
                        fontWeight='400' />
                </Block>

                <Block display='flex'
                    justifyContent='space-between'
                    marginTop='40px'>
                    <Block display='flex' flexDirection='column'
                        backgroundColor={theme.colors.white}
                        borderRadius='20px'
                        padding='40px 40px 40px 40px'
                        width='75%'>
                        <Label text='Ваш Telegram' marginTop='16px' fontFamily='Nunito' marginBottom='10px' />
                        <Input type='text'
                            placeholder='https://t.me/'
                            backgroundColor={theme.colors.grey_Light}
                            border='none'
                            outline='none'
                            width='328px'
                            fontFamily='Nunito'
                            fontSize='18px'
                            padding='16px 24px 16px 24px'
                            borderRadius='50px' />


                        <Label text='Ваш комментарий' marginTop='20px' fontFamily='Nunito' marginBottom='10px' />
                        <TextArea
                            rows="3"
                            cols="50"
                            placeholder='Опишите свою проблему или пожелание'
                            backgroundColor={theme.colors.grey_Light}
                            border='none'
                            height='130px'
                            fontFamily='Nunito'
                            fontSize='18px'
                            padding='24px 24px 24px 24px'
                            borderRadius='24px'
                        />

                        <Button display='flex'
                            justifyContent='center'
                            alignItems='center'
                            border='none'
                            borderRadius='50px'
                            padding='20px 40px 20px 40px'
                            marginTop='40px'
                            backgroundColor={theme.colors.disable_grey}
                            width='400px'>
                            <Span marginLeft='5px' fontFamily='Nunito' fontSize='18px'
                                text='Отправить' color={theme.colors.grey} />
                                <Image src={Arrow} marginLeft='5px' />
                        </Button>
                    </Block>


                    <Block marginLeft='-50px' marginTop='50px'>
                        <Image src={imageHelp} />
                    </Block>
                </Block>

            </Block>
        </Container>
    )
}
