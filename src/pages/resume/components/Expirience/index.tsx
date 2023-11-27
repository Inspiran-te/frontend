import React, { useState } from 'react'
import { theme } from '../../../../theme/theme'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import { TextArea } from '../../../../components/ui/Textarea'
import Image from '../../../../components/ui/Img'
import ArrowUp from '../../../../assets/ArrowUpp.svg'
import ArrowDown from '../../../../assets/ArrowDown.svg'
import Smile from '../../../../assets/smile.png'
import ExpirienceIcon from '../../../../assets/ExpirienceIcon.svg'
import PlusIcon from '../../../../assets/plusIcon.svg'
import { Input } from '../../../../components/ui/Input'
import { Button } from '../../../../components/ui/Button'
import Label from '../../../../components/ui/Label'
import { Line } from '../../../../components/ui/Line/styles'
import { changeOpenBlock } from '../../../../helpers'
import { WorkBlock } from './component/index'

export const Expirience = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [workBlocks, setWorkBlocks] = useState<JSX.Element[]>([]);

    const duplicateWorkBlocks = () => {
        setWorkBlocks([...workBlocks, <WorkBlock key={workBlocks.length} />]);
    };

    return (
        <Block display='flex'
            justifyContent='center'
            boxSizing='border-box'
            flexDirection='column'
            backgroundColor={theme.colors.white}
            borderRadius='20px'
            padding='40px 40px 40px 40px'
            marginTop='44px'>

            <Block display='flex'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
            >

                <Block display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Image src={ExpirienceIcon} alt="" />
                    <Span fontFamily='Unbounded' fontSize='24px'
                        text='Опыт работы' marginLeft='7px'
                    />

                </Block>

                {isOpen && <Image src={ArrowUp} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}
                {!isOpen && <Image src={ArrowDown} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}

            </Block>

            {isOpen && <>
                <Block display='flex'>

                    <Block display='flex' flexDirection='column'>
                        <Label text='Название компании' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='Название компании'
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
                        <Label text='Должность' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='Ваша должность'
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

                <Block display='flex' alignItems='center'>

                    <Block display='flex' flexDirection='column'>
                        <Label text='Дата начала работы' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='месяц / год'
                            backgroundColor={theme.colors.grey_Light}
                            border='none'
                            outline='none'
                            width='225px'
                            fontFamily='Nunito'
                            fontSize='18px'
                            padding='16px 24px 16px 24px'
                            borderRadius='50px'
                        />
                    </Block>

                    <Block display='flex' flexDirection='column' marginLeft='20px'>
                        <Label text='Дата окончания' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='месяц / год'
                            backgroundColor={theme.colors.grey_Light}
                            border='none'
                            outline='none'
                            width='225px'
                            fontFamily='Nunito'
                            fontSize='18px'
                            padding='16px 24px 16px 24px'
                            borderRadius='50px'
                        />
                    </Block>

                    <Block display='flex' marginLeft='20px' marginTop='40px'>
                        <Input type='checkbox' marginTop='5px' />
                        <Span text='По настоящее время' />
                    </Block>

                </Block>

                <Block display='flex' justifyContent='space-between' marginTop='40px'>
                    <TextArea
                        rows="3"
                        cols="100"
                        placeholder='Опишите, чем вы занимались на данном месте работы'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        height='130px'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='24px 24px 24px 24px'
                        borderRadius='24px'
                    />

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
                            text='Не больше 6 буллет поинтов, пожалуйста.'
                        />

                    </Block>
                </Block>

                <Line marginTop='40px' marginBottom='40px' width='100%' />

                <Block display='flex' marginTop='-20px'>
                    <Block display='flex' flexDirection='column'>
                        <Label text='Название компании' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='Название компании'
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
                        <Label text='Должность' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='Ваша должность'
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

                <Block display='flex' alignItems='center'>

                    <Block display='flex' flexDirection='column'>
                        <Label text='Дата начала работы' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='месяц / год'
                            backgroundColor={theme.colors.grey_Light}
                            border='none'
                            outline='none'
                            width='225px'
                            fontFamily='Nunito'
                            fontSize='18px'
                            padding='16px 24px 16px 24px'
                            borderRadius='50px'
                        />
                    </Block>

                    <Block display='flex' flexDirection='column' marginLeft='20px'>
                        <Label text='Дата окончания' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
                        <Input type='text'
                            placeholder='месяц / год'
                            backgroundColor={theme.colors.grey_Light}
                            border='none'
                            outline='none'
                            width='225px'
                            fontFamily='Nunito'
                            fontSize='18px'
                            padding='16px 24px 16px 24px'
                            borderRadius='50px'
                        />
                    </Block>

                    <Block display='flex' marginLeft='20px' marginTop='40px'>
                        <Input type='checkbox' marginTop='5px' />
                        <Span text='По настоящее время' />
                    </Block>

                </Block>


                <Block display='flex' justifyContent='space-between' marginTop='40px'>
                    <TextArea
                        rows="3"
                        cols="100"
                        placeholder='Опишите, чем вы занимались на данном месте работы'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        height='130px'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='24px 24px 24px 24px'
                        borderRadius='24px'
                    />

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
                            text='Не больше 6 буллет поинтов, пожалуйста.'
                        />

                    </Block>

                </Block>

                {workBlocks && workBlocks.map((block, index) => (
                    <div key={index}>{block}</div>
                ))}

                <Button display='flex'
                    justifyContent='center'
                    alignItems='center'
                    border='2px solid #7400FF'
                    borderRadius='50px'
                    padding='20px 40px 20px 40px'
                    marginTop='24px'
                    marginBottom='5px'
                    width='400px'
                    onClick={duplicateWorkBlocks}>
                    <Image src={PlusIcon} alt="" />
                    <Span fontFamily='Nunito' fontSize='18px'
                        text='Добавить место работы' />
                </Button>
            </>}

        </Block>
    )
}

