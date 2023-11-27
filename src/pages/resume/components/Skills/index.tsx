import React, { useState } from 'react'
import { theme } from '../../../../theme/theme'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import { TextArea } from '../../../../components/ui/Textarea'
import Image from '../../../../components/ui/Img'
import ArrowUp from '../../../../assets/ArrowUpp.svg'
import ArrowDown from '../../../../assets/ArrowDown.svg'
import Smile from '../../../../assets/smile.png'
import SkillsIcon from '../../../../assets/skillsIcon.svg'
import { changeOpenBlock } from '../../../../helpers'
import { SkillsProps } from './types'

export const Skills: React.FC<SkillsProps> = ({ handleInputChange, inputsData }) => {
    const [isOpen, setIsOpen] = useState(true);

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
                    <Image src={SkillsIcon} alt="" />
                    <Span fontFamily='Unbounded' fontSize='24px'
                        text='Навыки' marginLeft='7px'
                    />

                </Block>

                {isOpen && <Image src={ArrowUp} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}
                {!isOpen && <Image src={ArrowDown} alt="" onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}

            </Block>
            {isOpen && <Block display='flex' justifyContent='space-between' marginTop='40px'>
                <TextArea
                    rows="3"
                    cols="100"
                    placeholder='Например: Продуктовая стратегия - Управление командой - Аналитика рынка и конкурентов - Scrum - Agile - Customer development  - Запуск продуктов - Go-to-market стратегия - Аналитика продуктовая - Мобильная разработка - Web разработка - Английский (C2)'
                    backgroundColor={theme.colors.grey_Light}
                    border='none'
                    height='130px'
                    fontFamily='Nunito'
                    fontSize='18px'
                    padding='24px 24px 24px 24px'
                    borderRadius='24px'
                    value={inputsData.skill.skills}
                    onChange={handleInputChange} 
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
                        text='Tолько hard skills и платформы, которыми владеете.'
                    />

                </Block>
            </Block>}

        </Block>
    )
}