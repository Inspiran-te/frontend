import React, { useState } from 'react'
import { theme } from '../../../../theme/theme'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import Label from '../../../../components/ui/Label'
import { Input } from '../../../../components/ui/Input'
import { TextArea } from '../../../../components/ui/Textarea'
import Image from '../../../../components/ui/Img'
import { Line } from '../../../../components/ui/Line/styles'
import { Button } from '../../../../components/ui/Button'
import EducationIcon from '../../../../assets/EducationIcon.svg'
import ArrowUp from '../../../../assets/ArrowUpp.svg'
import ArrowDown from '../../../../assets/ArrowDown.svg'
import Smile from '../../../../assets/smile.png'
import PlusIcon from '../../../../assets/plusIcon.svg'
import { changeOpenBlock } from '../../../../helpers'
import { EducationBlock } from './component'

export const Education = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [educationBlocks, setEducationBlocks] = useState<JSX.Element[]>([]);

    const duplicateEducationBlocks = () => {
        setEducationBlocks([...educationBlocks, <EducationBlock key={educationBlocks.length} />]);
    };
    return (
        <Block display='flex'
            justifyContent='center'
            boxSizing='border-box'
            flexDirection='column'
            backgroundColor={theme.colors.white}
            borderRadius='20px'
            padding='40px 40px 40px 40px'
            marginTop='44px'
            marginBottom='44px'>

            <Block display='flex'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
            >

                <Block display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Image src={EducationIcon} alt="" />
                    <Span fontFamily='Unbounded'
                        fontSize='24px'
                        marginLeft='7px'
                        text='Образование'
                    />

                </Block>

                {isOpen && <Image src={ArrowUp} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}
                {!isOpen && <Image src={ArrowDown} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}

            </Block>
            {isOpen && <>
                <Block display='flex' padding='40px 10px 0px 0px' justifyContent='space-between'>
                    <Block display='flex'>
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
                                borderRadius='50px' />
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
                            />
                        </Block>
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
                    />

                </Block>

                <Line marginTop='40px' marginBottom='40px' width='100%' />

                <Block display='flex' padding='0px 10px 0px 0px' justifyContent='space-between'>

                    <Block display='flex'>
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
                                borderRadius='50px' />
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
                            />
                        </Block>
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
                    />

                </Block>
                {educationBlocks && educationBlocks.map((block, index) => (
                    <div key={index}>{block}</div>
                ))}

                <Button display='flex'
                    justifyContent='center'
                    alignItems='center'
                    border='2px solid #7400FF'
                    borderRadius='50px'
                    padding='20px 40px 20px 40px'
                    marginTop='40px'
                    onClick={duplicateEducationBlocks}
                    width='400px'>
                    <Image src={PlusIcon} alt="" />
                    <Span marginLeft='5px' fontFamily='Nunito' fontSize='18px'
                        text='Добавить учебное заведение' />
                </Button>
            </>}
        </Block>

    )
}