import React from 'react'
import { Block } from "../../../../components/ui/Block"
import interviewsIcon from '../../../../assets/interviewsIcon.svg'
import Image from '../../../../components/ui/Img'
import Span from '../../../../components/ui/Span'

export const JobSources = () => {

    return (
        <Block display='flex'
            flexDirection='column'
            padding='40px 0px 0px 40px'>
            <Block display='flex' alignItems='center'>
                <Image src={interviewsIcon} marginRight='5px' />
                <Span text='Источники вакансий' fontSize='16px' fontFamily='Nunito' />
            </Block>
        </Block>
    )
}