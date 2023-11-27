import React from 'react'
import { Block } from '../../../../components/ui/Block'
import { theme } from '../../../../theme/theme'
import Span from '../../../../components/ui/Span'
import Image from '../../../../components/ui/Img'
import adviceIcon from '../../../../assets/adviceIcon.svg'

export const Advice = () => {

    return (
        <Block backgroundColor='#EFEFF9'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            marginLeft='20px'
            borderRadius='20px'
            padding='24px 20px 24px 20px'
            height='118px'
            width='370px'
            marginTop='28px'>

            <Block display='flex'>
                <Image src={adviceIcon} />
                <Span text='Совет дня' marginLeft='10px' />
            </Block>

            <Span
                fontFamily='Nunito'
                fontSize='16px'
                color={theme.colors.black}
                text='Текст совета дня для пользователя, текст совета дня для пользователя. Текст совета дня для пользователя, текст совета дня для пользователя.'
            />

        </Block>
    )
}