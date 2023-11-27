import React from 'react'
import { Block } from '../../../../components/ui/Block'
import Image from '../../../../components/ui/Img'
import firstImage from '../../../../assets/firstImage.svg'
import secondImage from '../../../../assets/secondImage.svg'
import thirdImage from '../../../../assets/thirdImage.svg'
import fourImage from '../../../../assets/fourImage.svg'
import fiveImage from '../../../../assets/fiveImage.svg'
import sixImage from '../../../../assets/sixImage.svg'

export const ImagesComponent = () => {

    return (

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

    )
}