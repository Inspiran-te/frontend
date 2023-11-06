import React, { useState } from 'react'
import { theme } from '../../../../../theme/theme'
import { Block } from '../../../../../components/ui/Block'
import Span from '../../../../../components/ui/Span'
import { TextArea } from '../../../../../components/ui/Textarea'
import Image from '../../../../../components/ui/Img'
import Smile from '../../../../../assets/smile.png'
import { Line } from '../../../../../components/ui/Line/styles'
import Label from '../../../../../components/ui/Label'
import { Input } from '../../../../../components/ui/Input'

export const WorkBlock = () => {

    return (<>
        <Line marginTop='40px' marginBottom='40px' width='100%' />

        <Block display='flex' marginTop='-20px'>
            <Block display='flex' flexDirection='column'>
                <Label text='Название компании' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                <Input type='text'
                    placeholder='Название компании'
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
                <Label text='Должность' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                <Input type='text'
                    placeholder='Ваша должность'
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

        <Block display='flex' alignItems='center'>

            <Block display='flex' flexDirection='column'>
                <Label text='Дата начала работы' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                <Input type='text'
                    placeholder='месяц / год'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    outline='none'
                    width='225px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='16px 24px 16px 24px'
                    borderRadius='50px'
                />
            </Block>

            <Block display='flex' flexDirection='column' marginLeft='20px'>
                <Label text='Дата окончания' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                <Input type='text'
                    placeholder='месяц / год'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    outline='none'
                    width='225px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='16px 24px 16px 24px'
                    borderRadius='50px'
                />
            </Block>

            <Block display='flex' marginLeft='20px' marginTop='40px'>
                <Input type='checkbox' marginTop='5px' />
                <Span text='По настоящее время' />
            </Block>

        </Block>


        <Block display='flex' justifyContent='center' marginTop='40px'>
            <TextArea
                rows="3"
                cols="100"
                placeholder='Опишите, чем вы занимались на данном месте работы'
                backgroundColor={theme.colors.grey_Light}
                border='none'
                height='130px'
                fontFamily='Nunito'
                fontSize='18px'
                padding='24px 24px 24px 24px'
                borderRadius='24px'
            />

            <Block backgroundColor='#EFEFF9'
                display='flex'
                justifyContent='center'
                marginLeft='50px'
                borderRadius='20px'
                padding='26px 20px 26px 20px'
                height='40px'
                width='370px'
            >
                <Image width='24px' height='24px' src={Smile} alt="" />

                <Span marginLeft='20px'
                    padding='0px 0px -20px 0px'
                    fontFamily='Nunito'
                    fontSize='16px'
                    color={theme.colors.black}
                    text='Не больше 6 буллет поинтов, пожалуйста.'
                />

            </Block>

        </Block>

    </>)
}













