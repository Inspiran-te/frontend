import React from 'react'
import { Block } from '../../../components/ui/Block'
import { theme } from '../../../theme/theme'
import Span from '../../../components/ui/Span'
import Image from '../../../components/ui/Img'
import imageExample from '../../../assets/exampleImage.png'
import { Button } from '../../../components/ui/Button'

export const ConsultantCard = () => {

    return (

        <Block width='300px'
            display='flex'
            flexDirection='column'
            border='none'
            borderRadius='20px'
            boxSizing='border-box'
            padding='20px 20px 20px 20px'
            backgroundColor={theme.colors.white}
            boxShadow='0px 4px 20px 0px rgba(9, 13, 34, 0.08)'
            
            >

            <Block display='flex' justifyContent='space-between'>
                <Image src={imageExample}/>
                <Block backgroundColor={theme.colors.light_purple} padding='8px 12px 8px 12px'
                borderRadius='6px' height='35%'>
                    <Span text='3500 ₽/ч'/>
                </Block>
            </Block>

            <Block marginTop='24px'>
                <Span text='Имя Фамилия' 
                fontSize='18px' 
                fontFamily='Nunito' 
                fontWeight='500'/>
            </Block>

            <Block marginTop='16px'>
                <Span fontSize='16px' 
                fontFamily='Nunito' 
                fontWeight='400' 
                text='Описание консультанта, описание консультанта, описание консультанта на 6 строк на 6 строк на 6 строк  на 6 строк  на 6 строк  на 6 строк на 6 строк  на 6 строк  на 6 строк на 6 строк  на 6 строк  на 6 строк '/>
            </Block>

            <Button marginTop='24px' 
            borderRadius='50px' 
            display='flex' 
            justifyContent='center'
            padding='15px 40px 15px 40px'
            border='2px solid #7400FF'
            fontSize='18px' 
            fontFamily='Nunito'
            color={theme.colors.Primary_Purple}
            backgroundColor={theme.colors.white} 
            >
              Записаться  
            </Button>

        </Block>
    )
}
