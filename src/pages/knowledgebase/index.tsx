import React from 'react'
import { Block } from '../../components/ui/Block'
import { theme } from '../../theme/theme'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import Span from '../../components/ui/Span'
import TitleH2 from '../../components/ui/Text/TitleH2'
import { Podcasts } from './components/podcasts'
import { Routing } from './components/routing'

export const KnowledgeBase = () => {

    return (
        <Container backgroundColor={theme.colors.grey_Light} >
            <Block width='100%' 
            
                display='flex'
                flexDirection='column'
                border='none'
                boxSizing='border-box'
                padding='0px 40px 20px 40px'>

                <Header />

                <Block border='none'
                    display='flex'
                    justifyContent='space-between'
                    width='100%'
                    marginTop='10px'
                    >
                    <Block display='flex'
                        flexDirection='column'>

                        <TitleH2
                            text='База знаний'
                            fontFamily='Unbounded'
                            fontWeight='400'
                            fontSize='36px' />
                        <Span text='Здесь собрана вся необходимая информация для соискателя по разделам.'

                            fontSize='18px'
                            fontFamily='Nunito' />
                    </Block>

                    <Podcasts />
                    
                </Block>

                <Routing />

            </Block>
        </Container>
    )
}

