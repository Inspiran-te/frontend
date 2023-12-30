import React from 'react'
import { theme } from '../../../../../theme/theme'
import { Block } from '../../../../../components/ui/Block'
import Span from '../../../../../components/ui/Span'
import { TextArea } from '../../../../../components/ui/Textarea'
import Image from '../../../../../components/ui/Img'
import Smile from '../../../../../assets/smile.png'
import { Line } from '../../../../../components/ui/Line/styles'
import Label from '../../../../../components/ui/Label'
import { Input } from '../../../../../components/ui/Input'
import { EducationDataProps } from './types'

export const EducationBlock: React.FC<EducationDataProps> = ({ handleInputChangeInstitutions, index, inputsData }) => {

    return (<>
        <Line marginTop='40px' marginBottom='40px' width='100%' />

        <Block display='flex' padding='0px 40px 0px 0px'>

            <Block display='flex' flexDirection='column'>
                <Label text='Название университета / курса'

                    fontFamily='Nunito'
                    marginBottom='5px' />
                <Input type='text'
                    placeholder='Название'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    outline='none'
                    width='328px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='16px 24px 16px 24px'
                    borderRadius='50px'
                    onChange={(e) => handleInputChangeInstitutions(e, index, 'institutionName')}
                    value={inputsData?.education.institutions[index]?.institutionName} />

            </Block>

            <Block display='flex' flexDirection='column' marginLeft='20px'>
                <Label text='Направление учебы'

                    fontFamily='Nunito'
                    marginBottom='5px'
                />
                <Input type='text'
                    placeholder='Направление'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    outline='none'
                    width='328px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='16px 24px 16px 24px'
                    borderRadius='50px'
                    onChange={(e) => handleInputChangeInstitutions(e, index, 'institutionFaculty')}
                    value={inputsData?.education.institutions[index]?.institutionFaculty}
                />
            </Block>

            <Block backgroundColor='#EFEFF9'
                display='flex'
                justifyContent='center'
                marginLeft='50px'
                borderRadius='20px'
                padding='26px 20px 26px 20px'
                height='40px'
                width='370px'
            >
                <Image width='24px' height='24px' src={Smile} alt="" />

                <Span marginLeft='20px'
                    padding='0px 0px -20px 0px'
                    fontFamily='Nunito'
                    fontSize='16px'
                    color={theme.colors.black}
                    text='Курсы пишем релевантные и не старше 2х лет.'
                />

            </Block>

        </Block>

        <Block display='flex' alignItems='center'>

            <Block display='flex' flexDirection='column'>
                <Label text='Год начала' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                <Input type='text'
                    placeholder='Год'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    outline='none'
                    width='328px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='16px 24px 16px 24px'
                    borderRadius='50px'
                    onChange={(e) => handleInputChangeInstitutions(e, index, 'institutionStartDate')}
                    value={inputsData?.education.institutions[index]?.institutionStartDate}
                />
            </Block>

            <Block display='flex' flexDirection='column' marginLeft='20px'>
                <Label text='Год окончания' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                <Input type='text'
                    placeholder='Год'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    outline='none'
                    width='328px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='16px 24px 16px 24px'
                    borderRadius='50px'
                    onChange={(e) => handleInputChangeInstitutions(e, index, 'institutionEndDate')}
                    value={inputsData?.education.institutions[index]?.institutionEndDate}
                />
            </Block>

        </Block>

        <Block marginTop='40px'>
            <TextArea
                rows="3"
                cols="75"
                placeholder='Опишите свои достижения'
                backgroundColor={theme.colors.grey_Light}
                border='none'
                height='130px'
                fontFamily='Nunito'
                fontSize='18px'
                padding='24px 24px 24px 24px'
                borderRadius='24px'
                onChange={(e) => handleInputChangeInstitutions(e, index, 'institutionDescription')}
                value={inputsData?.education.institutions[index]?.institutionDescription}
            />
        </Block>

    </>)
}



