import React, { useState } from 'react'
import { theme } from '../../../../theme/theme'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import { TextArea } from '../../../../components/ui/Textarea'
import Image from '../../../../components/ui/Img'
import ArrowUp from '../../../../assets/ArrowUpp.svg'
import ArrowDown from '../../../../assets/ArrowDown.svg'
import Smile from '../../../../assets/smile.png'
import samIcon from '../../../../assets/SammeryIcon.svg'
import { changeOpenBlock } from '../../../../helpers'
import { SummeryProps } from './types'

export const Sammery: React.FC<SummeryProps> = ({ handleInputChange, inputsData }) => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <Block display='flex'
            justifyContent='center'
            boxSizing='border-box'
            flexDirection='column'
            backgroundColor={theme.colors.white}
            borderRadius='20px'
            padding='40px 40px 40px 40px'>

            <Block display='flex'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
            >
                <Block display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Image src={samIcon} alt="" />
                    <Span fontFamily='Unbounded' fontSize='24px'
                        text='Саммери о себе' marginLeft='7px'
                    />
                </Block>

                {isOpen && <Image src={ArrowUp} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}
                {!isOpen && <Image src={ArrowDown} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}

            </Block>

            {isOpen && <>
                <Block display='flex' justifyContent='space-between' marginTop='40px'>
                    <TextArea
                        rows="3"
                        cols="100"
                        placeholder='Например: Продакт менеджер с 5+ годами опыта с большой экспертизой в запусках продуктов с 0. Я работала в таких сферах как онлайн обучение, финансовые мобильные продукты. Всегда напрямую работаю с командой разработки, отвечаю за продуктовую стратегию, go-to-market стратегию и коммуникацию с пользователями.'
                        backgroundColor={theme.colors.grey_Light}
                        border='none'
                        fontFamily='Nunito'
                        fontSize='18px'
                        padding='24px 24px 24px 24px'
                        borderRadius='24px'
                        name='summary'
						value={inputsData.summary.summary}
                        onChange={handleInputChange} 
                    />

                    <Block backgroundColor='#EFEFF9'
                        display='flex'
                        justifyContent='center'
                        marginLeft='50px'
                        borderRadius='20px'
                        padding='26px 20px 26px 20px'
                        height='130px'
                        width='370px'
                    >
                        <Image width='24px' height='24px' src={Smile} alt="" />
                        <Span marginLeft='20px'
                            fontFamily='Nunito'
                            fontSize='16px'
                            color={theme.colors.black}
                            text='В этом поле нужно написать максимум 2-3 предложения о своем опыте. Какая должность, сколько лет, какая основаная экспертиза и сферы, в которых работали.'
                        />

                    </Block>
                </Block>
            </>}
        </Block>
    )
}