import React from 'react'
import { Block } from "../../../../components/ui/Block"
import interviewsIcon from '../../../../assets/interviewsIcon.svg'
import Image from '../../../../components/ui/Img'
import Span from '../../../../components/ui/Span'

export const Interviews = () => {

    return (
        <Block display='flex'
            flexDirection='column'
            padding='40px 0px 0px 40px'>

            <Block display='flex' alignItems='center'>
                <Image src={interviewsIcon} marginRight='5px' />
                <Span text='Подготовка к собеседованию' fontSize='16px' fontFamily='Nunito' />
            </Block>

            <Block display='flex' marginTop='25px' alignItems='center'>
                <Image src={interviewsIcon} marginRight='5px' />
                <Span text='Рассказ о себе' fontSize='16px' fontFamily='Nunito' />
            </Block>

            <Block display='flex' marginTop='25px' alignItems='center'>
                <Image src={interviewsIcon} marginRight='5px' />
                <Span text='Возможные вопросы для компании' fontSize='16px' fontFamily='Nunito' />
            </Block>

        </Block>
    )
}
