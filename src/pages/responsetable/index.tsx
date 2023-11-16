import React from 'react'
import { Block } from '../../components/ui/Block'
import { theme } from '../../theme/theme'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import Span from '../../components/ui/Span'
import { Button } from '../../components/ui/Button'
import Image from '../../components/ui/Img'
import TitleH2 from '../../components/ui/Text/TitleH2'
import { ElementsTable } from './components/ElementTable'
import firstImage from '../../assets/firstImage.svg'
import secondImage from '../../assets/secondImage.svg'
import thirdImage from '../../assets/thirdImage.svg'
import fourImage from '../../assets/fourImage.svg'
import fiveImage from '../../assets/fiveImage.svg'
import sixImage from '../../assets/sixImage.svg'
import arrow from '../../assets/arrowRightWhite.svg'
import Label from '../../components/ui/Label'
import { Input } from '../../components/ui/Input'
import Check from '../../assets/Check.svg'
import LinePurple from '../../assets/Line.svg'
import LinePurple2 from '../../assets/LineTwo.svg'
const DATA = [
    {
        id: "1",
        nameCompany: 'Рога и копыта',
        linkVakansy: 'https://1234556',
        postVacansy: 'ux/ui designer',
        contactsRecruiter: '+33757005467',
        commets: 'Комментарий, комментарий, комме ткооодлод'
    },
    {
        id: "2",
        nameCompany: 'Рога и копыта',
        linkVakansy: 'https://1234556',
        postVacansy: 'ux/ui designer',
        contactsRecruiter: '+33757005467',
        commets: 'Комментарий, комментарий, комме ткооодлод'
    },
    {
        id: "3",
        nameCompany: 'Рога и копыта',
        linkVakansy: 'https://1234556',
        postVacansy: 'ux/ui designer',
        contactsRecruiter: '+33757005467',
        commets: 'Комментарий, комментарий, комме ткооодлод'
    },
    {
        id: "4",
        nameCompany: 'Рога и копыта',
        linkVakansy: 'https://1234556',
        postVacansy: 'ux/ui designer',
        contactsRecruiter: '+33757005467',
        commets: 'Комментарий, комментарий, комме ткооодлод'
    },

]
export const ResponseTable = () => {

    return (
        <Container backgroundColor={theme.colors.grey_Light}>
            <Block width='100%'
                display='flex'
                flexDirection='column'
                border='none'
                boxSizing='border-box'
                padding='0px 40px 0px 40px'>

                <Header />

                <Block border='none'
                    display='flex'
                    justifyContent='space-between'
                    width='100%'
                    marginTop='10px'
                >
                    <TitleH2
                        text='Таблица откликов'
                        fontFamily='Unbounded'
                        fontWeight='400'
                        fontSize='36px' />


                    <Block color={theme.colors.white}>

                        <Button display='flex'
                            justifyContent='center'
                            alignItems='center'
                            border='2px solid #7400FF'
                            borderRadius='50px'
                            width='242px'
                            height='52px'
                            marginTop='24px'
                            marginBottom='5px'
                            backgroundColor={theme.colors.Primary_Purple}
                            color={theme.colors.white}>

                            <Span fontFamily='Nunito' fontSize='18px'
                                text='Добавить отклик' />
                            <Image marginLeft='10px' src={arrow} />
                        </Button>
                    </Block>
                </Block>

                <Block backgroundColor={theme.colors.white}
                    borderRadius='28px'
                    height='255px'
                    marginTop='10px'
                    padding='27px 40px 27px 40px'

                >
                    <Block display='flex'
                        justifyContent='space-between'
                        marginTop='30px'>
                        <Image src={firstImage} />
                        <Image src={secondImage} />
                        <Image src={thirdImage} />
                        <Image src={fourImage} />
                        <Image src={fiveImage} />
                        <Image src={sixImage} />
                    </Block>

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
                                marginTop='56px' />
                            <Span text='150'
                            fontSize='18px'
                            color={theme.colors.Primary_Purple}
                            fontFamily='Nunito' 
                            padding='10px 0px 0px 0px'/>
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
                                marginTop='56px' />
                            <Span text='150'
                            fontSize='18px'
                            color={theme.colors.Primary_Purple}
                            fontFamily='Nunito' 
                            padding='10px 0px 0px 0px'/>
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
                                marginTop='56px' />
                            <Span text='150'
                            fontSize='18px'
                            color={theme.colors.Primary_Purple}
                            fontFamily='Nunito' 
                            padding='10px 0px 0px 0px'/>
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
                                marginTop='56px' />
                            <Span text='150'
                            fontSize='18px'
                            color={theme.colors.Primary_Purple}
                            fontFamily='Nunito' 
                            padding='10px 0px 0px 0px'/>
                            <Span text='Откликов'
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
                                marginTop='56px' />
                            <Span text='150'
                            fontSize='18px'
                            color={theme.colors.Primary_Purple}
                            fontFamily='Nunito' 
                            padding='10px 0px 0px 0px'/>
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
                                marginTop='56px' />
                            <Span text='150'
                            fontSize='18px'
                            color={theme.colors.Primary_Purple}
                            fontFamily='Nunito' 
                            padding='10px 0px 0px 0px'/>
                            <Span text='Откликов'
                            fontSize='16px'
                            fontFamily='Nunito' 
                            />
                        </Block>
                    </Block>
                </Block>

                <Block marginTop='36px'
                    display='flex'
                    justifyContent='space-around'
                    alignItems='center'
                >

                    <Span text='Название компании'
                        fontSize='12px'
                        fontWeight='400'
                        fontFamily='Nunito'
                    />


                    <Span text='Вакансия (ссылка)'
                        fontSize='12px'
                        fontWeight='400'
                        fontFamily='Nunito'

                    />


                    <Span text='Должность'
                        fontSize='12px'
                        fontWeight='400'
                        fontFamily='Nunito'

                    />


                    <Span text='Контакты рекрутера'
                        fontSize='12px'
                        fontWeight='400'
                        fontFamily='Nunito'
                        marginRight='50px' />




                    <Span text='Статус'
                        fontSize='12px'
                        fontWeight='400'
                        fontFamily='Nunito'
                        padding='0px 200px 0px 0px' />


                    <Span text='Комментарии'
                        fontSize='12px'
                        fontWeight='400'
                        fontFamily='Nunito'
                        padding='0px 150px 0px 0px' />

                </Block>

                <ElementsTable data={DATA} />
            </Block>

        </Container>
    )
}
