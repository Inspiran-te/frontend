import React, { useState } from 'react'
import { Block } from '../../components/ui/Block'
import { theme } from '../../theme/theme'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import { Routes, Route } from 'react-router-dom';
import Span from '../../components/ui/Span'
import Image from '../../components/ui/Img'
import TitleH2 from '../../components/ui/Text/TitleH2'
import yandexMusic from '../../assets/YandexMusic.png'
import applePodcast from '../../assets/Apple-Podcast_Logo.png'
import youtube from '../../assets/youtube.png'
import { CareerAdvices } from '../careeradvices'
import Link from '../../components/ui/Route/RouteKnowledge'
import resumeIcon from '../../assets/resumeIcon.svg'
import verticalLine from '../../assets/verticalLine.svg'
import sobesIcon from '../../assets/sobesIcon.svg'
import LinkedIcon from '../../assets/linknIcon.svg'
import sourceIcon from '../../assets/sourcesIcon.svg'
import portfIcon from '../../assets/PortfIcon.svg'

export const KnowledgeBase = () => {
    const [isLinkActive, setIsLinkActive] = useState(false);
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

                    <Block backgroundColor={theme.colors.white}
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        padding='16px 24px 16px 24px'
                        borderRadius='16px'
                        marginTop='32px'>

                        <Block marginBottom='12px'>
                            <Span text='Слушайте наши подкасты:'
                                fontSize='16px'
                                fontFamily='Nunito'
                            />
                        </Block>

                        <Block display='flex'
                            justifyContent='center'
                        >
                            <Image src={yandexMusic}
                                boxShadow='0px 3.6px 18px 0px rgba(9, 13, 34, 0.08)'
                                marginRight='10px' />
                            <Block backgroundColor={theme.colors.white}
                                padding='0px 15px 0px 15px'
                                borderRadius='5px'
                                boxShadow='0px 3.6px 18px 0px rgba(9, 13, 34, 0.08)'>
                                <Image src={applePodcast} />
                            </Block>
                            <Block backgroundColor={theme.colors.white}
                                padding='0px 25px 0px 25px'
                                borderRadius='5px'
                                boxShadow='0px 3.6px 18px 0px rgba(9, 13, 34, 0.08)'
                                marginLeft='10px'
                            >
                                <Image src={youtube} />
                            </Block>
                        </Block>
                    </Block>
                </Block>
                

                <Block backgroundColor={theme.colors.white}
                borderRadius='24px 24px 0px 0px'
                marginTop='37px'>
                    <Block
                        display='flex'
                        alignItems='center'
                        fontSize='18px'
                        fontFamily='Unbounded'
                        justifyContent='space-around'
                        padding='20px 16px 20px 16px'
                        borderBottom='1px solid #CBCDD7'
                    >
                        <>
                            <Link to='nested-page1'  textDecoration='none'
                                display='flex'
                                padding='12px 60px 12px 60px'
                                fontSize='14px'
                                fontFamily='Unbounded'
                                borderRadius='40px'
                                alignItems='center'>
                            <Image src={resumeIcon} marginRight='5px'/>
                                Резюме
                            </Link>
                        </>

                        <Image src={verticalLine} />

                        <>
                            <Link to='nested-page1'  textDecoration='none'
                                display='flex'
                                padding='12px 40px 12px 40px'
                                fontSize='14px'
                                fontFamily='Unbounded'
                                borderRadius='40px'
                                alignItems='center'
                                >
                            <Image src={sobesIcon} marginRight='5px'/>
                            Собеседования
                            </Link>
                        </>
                         
                        <Image src={verticalLine} />
                        
                        <>
                            <Link to='nested-page1' textDecoration='none'
                                display='flex'
                                padding='12px 60px 12px 60px'
                                fontSize='14px'
                                fontFamily='Unbounded'
                                borderRadius='40px'
                                alignItems='center'>
                            <Image src={LinkedIcon} marginRight='5px'/>
                            LinkedIn
                            </Link>
                        </>

                        <Image src={verticalLine} />

                        <>
                            <Link to='nested-page1'  textDecoration='none'
                                display='flex'
                                padding='12px 40px 12px 40px'
                                fontSize='14px'
                                fontFamily='Unbounded'
                                borderRadius='40px'
                                alignItems='center'>
                            <Image src={sourceIcon} marginRight='5px'/>
                            Источники вакансий
                            </Link>
                        </>

                        <Image src={verticalLine}/>
                        
                        <>
                            <Link to='nested-page1' marginRight='24px' textDecoration='none'
                                display='flex'
                                padding='12px 60px 12px 60px'
                                fontSize='14px'
                                fontFamily='Unbounded'
                                borderRadius='40px'
                                alignItems='center'>
                            <Image src={portfIcon} marginRight='5px'/>
                            Портфолио
                            </Link>
                        </>
                        
                    </Block>
                    
                </Block>

                <Routes>
                    <Route path="nested-page1" element={<CareerAdvices />} />
                    <Route path="nested-page2" element={<CareerAdvices />} />
                    <Route path="nested-page3" element={<CareerAdvices />} />
                    <Route path="nested-page2" element={<CareerAdvices />} />
                    <Route path="nested-page3" element={<CareerAdvices />} />
                </Routes>
                
            </Block>

        </Container>
    )
}

