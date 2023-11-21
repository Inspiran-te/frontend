import React from 'react'
import { Block } from "../../../../components/ui/Block"
import Image from '../../../../components/ui/Img'
import Span from '../../../../components/ui/Span'
import { theme } from '../../../../theme/theme'
import yandexMusic from '../../../../assets/YandexMusic.png'
import applePodcast from '../../../../assets/Apple-Podcast_Logo.png'
import youtube from '../../../../assets/youtube.png'

export const Podcasts = () => {

    return (
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
    )
}