import React from 'react'
import { Block } from '../../../../components/ui/Block'
import { theme } from '../../../../theme/theme'
import Span from '../../../../components/ui/Span'
import Image from '../../../../components/ui/Img'
import { VerticalBarChart } from '../../../../components/Charts/VerticalBar'
import { DoughnutChart } from '../../../../components/Charts/Doughnut'
import menuImage from '../../../../assets/Menu.svg'
import arrowLeft from '../../../../assets/arrowLeftDisable.svg'
import arrowRight from '../../../../assets/arrowRight.svg'

export const Analytics = () => {

    return (
        <Block
            backgroundColor={theme.colors.white}
            borderRadius='24px'
            marginLeft='20px'
            marginTop='28px'
            padding='20px 20px 20px 20px'
            marginBottom='20px'>
            <Block display='flex' justifyContent='space-between'>
                <Span text='Аналитика' fontSize='18px'
                    fontFamily='Nunito' />
                <Image src={menuImage} />
            </Block>
            <Block border='1px solid #DFE1EB'
                borderRadius='8px'
                padding='20px 20px 20px 20px'
                marginTop='20px'>
                <Block display='flex' justifyContent='space-between'
                    marginBottom='32px'>
                    <Span text='Всего откликов' fontSize='18px'
                        fontFamily='Nunito' />
                    <Span text='56' fontSize='18px'
                        fontFamily='Nunito'
                        color={theme.colors.Primary_Purple} />
                </Block>
                <VerticalBarChart />
                <Block display='flex' justifyContent='space-between'
                    marginTop='31px'>
                    <Span text='Февраль' fontSize='18px'
                        fontFamily='Nunito' />
                    <Block display='flex'>
                        <Image src={arrowLeft}
                            marginRight='10px'
                            marginTop='1px' />
                        <Image src={arrowRight} />
                    </Block>
                </Block>
            </Block>
            <Block display='flex'
                justifyContent='center'
                marginTop='20px'
                >
                <Block border='1px solid #DFE1EB'
                    borderRadius='8px'
                    width='100px'
                    padding='8px 35px 8px 35px'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'>
                    <DoughnutChart />
                    <Span text='Собеседований'
                        fontSize='12px'
                        fontFamily='Nunito'
                        marginTop='10px'
                    />
                </Block>
                <Block border='1px solid #DFE1EB'
                    borderRadius='8px'
                    width='100px'
                    padding='8px 35px 8px 35px'
                    marginLeft='20px'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center' >
                    <DoughnutChart />
                    <Span text='Тестовые'
                        fontSize='12px'
                        fontFamily='Nunito'
                        marginTop='10px' />
                </Block>
            </Block>
        </Block>
    )
}