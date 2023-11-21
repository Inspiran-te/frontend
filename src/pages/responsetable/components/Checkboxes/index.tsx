import React from 'react'
import { Block } from '../../../../components/ui/Block'
import Image from '../../../../components/ui/Img'
import { theme } from '../../../../theme/theme'
import Span from '../../../../components/ui/Span'
import Check from '../../../../assets/Check.svg'
import LinePurple from '../../../../assets/Line.svg'
import LinePurple2 from '../../../../assets/LineTwo.svg'

export const CheckBoxComponent = () => {

    return (

        <Block display='flex'
            alignItems='center'
            padding='0px 0px 0px 30px'>
            <Block display='flex'
                flexDirection='column'
                justifyContent='center'
                width='16px'
                height='16px'
                alignItems='center'
                marginLeft='10px'
            >
                <Image src={Check}
                    marginTop='54px' />
                <Span text='150'
                    fontSize='18px'
                    color={theme.colors.Primary_Purple}
                    fontFamily='Nunito'
                    padding='10px 0px 0px 0px' />
                <Span text='Откликов'
                    fontSize='16px'
                    fontFamily='Nunito'
                />
            </Block>

            <Image src={LinePurple} />

            <Block display='flex'
                flexDirection='column'
                justifyContent='center'
                width='16px'
                height='16px'
                alignItems='center'
            >
                <Image src={Check}
                    marginTop='78px' />
                <Span text='150'
                    fontSize='18px'
                    color={theme.colors.Primary_Purple}
                    fontFamily='Nunito'
                    padding='10px 0px 0px 0px' />
                <Block display='flex'
                    textAlign='center'>

                    <Span text='Собеседования c HR'
                        fontSize='16px'
                        fontFamily='Nunito'
                    />
                </Block>
            </Block>

            <Image src={LinePurple} />

            <Block display='flex'
                flexDirection='column'
                justifyContent='center'
                width='16px'
                height='16px'
                alignItems='center'
            >
                <Image src={Check}
                    marginTop='76px' />
                <Span text='150'
                    fontSize='18px'
                    color={theme.colors.Primary_Purple}
                    fontFamily='Nunito'
                    padding='10px 0px 0px 0px' />
                <Block display='flex'
                    textAlign='center'
                    flexDirection='column'>
                    <Span text='Техническое '
                        fontSize='16px'
                        fontFamily='Nunito'
                    />
                    <Span text='собеседование'
                        fontSize='16px'
                        fontFamily='Nunito'
                    />
                </Block>
            </Block>

            <Image src={LinePurple} />

            <Block display='flex'
                flexDirection='column'
                justifyContent='center'
                width='16px'
                height='16px'
                alignItems='center'
            >
                <Image src={Check}
                    marginTop='56px' />
                <Span text='150'
                    fontSize='18px'
                    color={theme.colors.Primary_Purple}
                    fontFamily='Nunito'
                    padding='10px 0px 0px 0px' />
                <Span width='115px' text='Кейс интервью'
                    fontSize='16px'
                    fontFamily='Nunito'
                />
            </Block>

            <Image src={LinePurple2} />

            <Block display='flex'
                flexDirection='column'
                justifyContent='center'
                width='16px'
                height='16px'
                alignItems='center'
            >
                <Image src={Check}
                    marginTop='78px' />
                <Span text='150'
                    fontSize='18px'
                    color={theme.colors.Primary_Purple}
                    fontFamily='Nunito'
                    padding='10px 0px 0px 0px' />
                <Block display='flex'
                    textAlign='center'
                    flexDirection='column'
                >
                    <Span text='Собеседование '
                        fontSize='16px'
                        fontFamily='Nunito'
                    />
                    <Span text='с менеджером'
                        fontSize='16px'
                        fontFamily='Nunito'
                    />
                </Block>
            </Block>

            <Image src={LinePurple} />

            <Block display='flex'
                flexDirection='column'
                justifyContent='center'
                width='16px'
                height='16px'
                alignItems='center'
            >
                <Image src={Check}
                    marginTop='56px' />
                <Span text='150'
                    fontSize='18px'
                    color={theme.colors.Primary_Purple}
                    fontFamily='Nunito'
                    padding='10px 0px 0px 0px' />
                <Span text='Оффер'
                    fontSize='16px'
                    fontFamily='Nunito'
                />
            </Block>
        </Block>

    )
}