import React, { useState } from 'react'
import { theme } from '../../../../theme/theme'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import Image from '../../../../components/ui/Img'
import CrossIcon from '../../../../assets/crossIcon.svg'
import resumeIcon from '../../../../assets/CVResume.svg'
import uploadedResume from '../../../../assets/uploadResumeIcon.svg'


interface UploadedResumeProps {
    deleteUploadUserResume: ()=> void;
}
export const UploadedResume: React.FC<UploadedResumeProps> = ({deleteUploadUserResume}) => {
 
    return (
        <Block display='flex'
            justifyContent='space-between'
            boxSizing='border-box'
            backgroundColor={theme.colors.white}
            borderRadius='20px'
            padding='26px 40px 26px 26px'
            marginTop='44px'
            boxShadow='0px 4px 20px 0px rgba(9, 13, 34, 0.08)'>

            <Block display='flex'
                alignItems='center'>

                <Image src={resumeIcon}/>

                <Block marginLeft='40px' display='flex' flexDirection='column' >
                    <Span text='Резюме' fontSize='24px'
                    fontFamily='Unbounded'/>
                    <Block marginTop='28px' display='flex' alignItems='center'>
                        <Image src={uploadedResume}/>
                        <Span text='Resume' fontSize='16px' fontFamily='Nunito' 
                        color={theme.colors.Primary_Purple}
                        marginLeft='5px'
                        fontWeight='500'/>
                    </Block>
                </Block>
            </Block>
           
            <Block display='flex' alignItems='center' onClick={deleteUploadUserResume}>
                <Image src={CrossIcon} marginRight='5px'/>
                <Span text='Удалить' fontSize='16px' fontFamily='Nunito' color={theme.colors.grey}/>
            </Block>
        </Block>
    )
}