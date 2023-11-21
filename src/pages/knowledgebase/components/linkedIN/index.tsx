import React from 'react'
import { Block } from "../../../../components/ui/Block"
import interviewsIcon from '../../../../assets/interviewsIcon.svg'
import Image from '../../../../components/ui/Img'
import Span from '../../../../components/ui/Span'

export const LinkedInComponent = () => {

    return (
        <Block display='flex' flexDirection='column' padding='40px 0px 0px 40px'
        >
            <Block display='flex' alignItems='center'>
                <Image src={interviewsIcon} marginRight='5px' />
                <Span text='LinkedIN' fontSize='16px' fontFamily='Nunito' />
            </Block>
        </Block>
    )
}