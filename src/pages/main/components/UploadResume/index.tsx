import React from 'react'
import { Block } from '../../../../components/ui/Block'
import { theme } from '../../../../theme/theme'
import Span from '../../../../components/ui/Span'
import Image from '../../../../components/ui/Img'
import Label from '../../../../components/ui/Label'
import { Input } from '../../../../components/ui/Input'
import UploadResumeIcon from '../../../../assets/uploadResumeIcon.svg'
import TitleH2 from '../../../../components/ui/Text/TitleH2'

export const UploadResumeComp = () => {

    return (
        <Block border='none'
            display='block'
            textAlign='left'
            borderRadius='24px'
            backgroundColor={theme.colors.white}
            padding='20px 0px 40px 40px'
            marginTop='28px'>
            <TitleH2
                text='Резюме'
                fontFamily='Unbounded'
                fontWeight='400'
                fontSize='24px' />
            <Span text='Здесь лежат ваши самые актуальные резюме:'
                fontFamily='Nunito'
                fontSize='18px'
                fontWeight='400'
                marginTop='24px'
            />

            <Block>
                <Block display='flex'
                    alignItems='center'
                    marginTop='31px'
                >
                    <Span text='Резюме по шаблону' marginRight='5px' marginTop='-2px' />
                    <Label htmlFor="resumeInput">
                        <Image src={UploadResumeIcon} />
                        <Input id="resumeInput" type="file"
                            style={{ display: "none" }} />
                    </Label>
                    <Span text='Название файла'
                        color={theme.colors.Primary_Purple}
                        fontSize='16px'
                        fontFamily='Nunito'
                        marginLeft='5px' />
                    <Span text='8МБ'
                        color={theme.colors.grey}
                        fontSize='16px'
                        fontFamily='Nunito'
                        marginLeft='5px'
                        marginTop='1px' />

                    <Span text='Ваше загруженное резюме:'
                        marginRight='5px'
                        marginLeft='20px'
                        marginTop='-2px' />
                    <Label htmlFor="resumeInput">
                        <Image src={UploadResumeIcon} />
                        <Input id="resumeInput" type="file" style={{ display: "none" }} />
                    </Label>
                    <Span text='Название файла'
                        color={theme.colors.Primary_Purple}
                        fontSize='16px'
                        fontFamily='Nunito'
                        marginLeft='5px' />
                    <Span text='8МБ'
                        color={theme.colors.grey}
                        fontSize='16px'
                        fontFamily='Nunito'
                        marginLeft='5px'
                        marginTop='1px'
                    />
                </Block>
            </Block>
        </Block>
    )
}