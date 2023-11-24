import React from 'react'
import { Block } from '../../../../components/ui/Block'
import { theme } from '../../../../theme/theme'
import Span from '../../../../components/ui/Span'
import Image from '../../../../components/ui/Img'
import TitleH2 from '../../../../components/ui/Text/TitleH2'
import Label from '../../../../components/ui/Label'
import { Input } from '../../../../components/ui/Input'
import { Button } from '../../../../components/ui/Button'
import Arrow from '../../../../assets/arrowRightGrey.svg'

export const MainLinks = () => {

    return (
        <Block border='none'
            display='block'
            textAlign='left'
            borderRadius='24px'
            backgroundColor={theme.colors.white}
            padding='40px 0px 62px 40px'
            marginTop='28px'>
            <Block>
                <TitleH2
                    text='Основные ссылки'
                    fontFamily='Unbounded'
                    fontWeight='400'
                    fontSize='24px' />
                <Span text='Сохраните основные ссылки для быстрого доступа'
                    fontFamily='Nunito'
                    fontSize='18px'
                    fontWeight='400'
                    marginTop='24px' />
            </Block>

            <Block display='flex' padding='40px 40px 0px 0px'>

                <Block display='flex' flexDirection='column'>
                    <Label text='Linkedin'
                        fontFamily='Nunito'
                        marginBottom='5px' />
                    <Input type='text'
                        placeholder='https://'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        outline='none'
                        width='328px'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='16px 24px 16px 24px'
                        borderRadius='50px' />
                </Block>

                <Block display='flex' flexDirection='column' marginLeft='20px'>
                    <Label text='Github'

                        fontFamily='Nunito'
                        marginBottom='5px'
                    />
                    <Input type='text'
                        placeholder='https://'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        outline='none'
                        width='328px'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='16px 24px 16px 24px'
                        borderRadius='50px'
                    />
                </Block>
            </Block>

            <Block display='flex' marginTop='20px'>
                <Block display='flex' flexDirection='column'>
                    <Label text='Behance'
                        fontFamily='Nunito'
                        marginBottom='5px' />
                    <Input type='text'
                        placeholder='https://'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        outline='none'
                        width='328px'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='16px 24px 16px 24px'
                        borderRadius='50px' />
                </Block>

                <Block display='flex'
                    flexDirection='column'
                    marginLeft='20px'
                    >
                    <Label text='Сайт'
                        fontFamily='Nunito'
                        marginBottom='5px'
                    />
                    <Input type='text'
                        placeholder='https://'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        outline='none'
                        width='328px'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='16px 24px 16px 24px'
                        borderRadius='50px'
                    />
                </Block>
            </Block>
            <Button display='flex'
                justifyContent='center'
                alignItems='center'
                border='none'
                borderRadius='50px'
                padding='20px 40px 20px 40px'
                marginTop='32px'
                backgroundColor={theme.colors.disable_grey}
                width='400px'>
                <Span marginLeft='5px' fontFamily='Nunito' fontSize='18px'
                    text='Сохранить' color={theme.colors.grey} />
                <Image src={Arrow} marginLeft='5px' />
            </Button>
        </Block>
    )
}