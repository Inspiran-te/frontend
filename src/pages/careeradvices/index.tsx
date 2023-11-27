import React from 'react'
import { Block } from '../../components/ui/Block'
import { theme } from '../../theme/theme'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import Span from '../../components/ui/Span'
import TitleH2 from '../../components/ui/Text/TitleH2'
import { ConsultantCard } from './СonsultantСard'

export const CareerAdvices = () => {

    return (
        <Container backgroundColor={theme.colors.grey_Light}>
            <Block width='100%'
                display='flex'
                flexDirection='column'
                border='none'
                boxSizing='border-box'
                padding='0px 40px 20px 40px'>

                <Header />

                <Block display='flex'
                    flexDirection='column'>

                    <TitleH2
                        text='Карьерные консультанты'
                        fontFamily='Unbounded'
                        fontWeight='400'
                        fontSize='36px' />
                    <Span width='70%' text='Мы собираем лучших карьерных консультантов, коучей и менторов, чтобы ваш процесс поиска работы и онбординга на новом месте проходил легко и приятно :)'
                        fontSize='18px'
                        fontFamily='Nunito' />
                </Block>

                <Block display='flex' flexWrap='wrap' marginTop='40px' //здесь будет map когда будем получать базу данных
                    gap='20px'>
                    <ConsultantCard />
                    <ConsultantCard />
                    <ConsultantCard />
                    <ConsultantCard />
                    <ConsultantCard />
                    <ConsultantCard />
                    <ConsultantCard />
                    <ConsultantCard />
                </Block>

            </Block>
        </Container>
    )
}
