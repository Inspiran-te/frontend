import React, { useState } from 'react';
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import { ElementTableProps } from './types'
import { theme } from '../../../../theme/theme'
import Image from '../../../../components/ui/Img'
import pencil from '../../../../assets/pencilIcon.svg'
import closeIcon from '../../../../assets/closeIcon.svg'
import ArrowUp from '../../../../assets/Arrow - Up.svg'
import ArrowDown from '../../../../assets/Arrow- down.svg'

export const ElementsTable = ({ data }: ElementTableProps) => {
    const [selectedOption, setSelectedOption] = useState<{ [key: string]: string }>({})
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

    const options = ['Отклик', 'Тех собес', 'Кейс интервью', 'HR интервью', 'Менеджер', 'Оффер'];

    const onOptionClicked = (value: string, id: string) => {
        setSelectedOption((prevState) => ({ ...prevState, [id]: value }));
        setIsOpen((prevState) => ({ ...prevState, [id]: false }));
    };

    const toggleDropdown = (id: string) => {
        setIsOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    };
    const getColor = (option: string) => { // функция по виду опции возвращает цвет текста
        switch (option) {
            case 'Отклик':
                return '#5B93FF';
            case 'Тех собес':
                return '#3598AE';
            case 'Кейс интервью':
                return '#5D9229';
            case 'HR интервью':
                return 'orange';
            case 'Менеджер':
                return '#973799';
            case 'Оффер':
                return '#3D9761';
            default:
                return 'black';
        }
    };

    return (
        <>
            {data && data.map((item) => (
                <Block key={item.id} marginTop='12px' display='flex' justifyContent='space-between'
                    padding='16px 20px 16px 20px'
                    backgroundColor={theme.colors.white}
                    borderRadius='10px'
                    alignItems='center'>
                    <Span fontSize='14px' text={item.nameCompany} />
                    <Span fontSize='14px' text={item.linkVakansy} />
                    <Span fontSize='14px' text={item.postVacansy} />
                    <Span fontSize='14px' text={item.contactsRecruiter} />
                    <Block
                        fontFamily='Nunito'
                        position='relative'
                        borderRadius={isOpen[item.id] ? '8px 8px 0 0' : '8px'}
                        boxShadow={isOpen[item.id] ? '0px 0px 2px 0px rgba(0, 0, 0, 0.20)' : ''}
                    >
                        <Block onClick={() => toggleDropdown(item.id)}
                            padding='10px 20px 10px 20px'
                            display='flex'
                            color={getColor(selectedOption[item.id])}
                        >
                            {selectedOption[item.id] || 'Выберите опцию'}
                            {isOpen[item.id] ? <Image src={ArrowUp} marginLeft='20px' /> : <Image src={ArrowDown} marginLeft='20px' />}
                        </Block>
                        {isOpen[item.id] && (
                            <Block
                                borderRadius='8px'
                                borderTop={isOpen[item.id] ? '' : 'none'}
                                boxShadow='0px 0px 2px 0px rgba(0, 0, 0, 0.20)'
                                fontSize='14px'
                                fontFamily='Nunito'
                                position='absolute'
                                zIndex='10'
                                width='100%'>
                                {options.map((option) => (
                                    <Block
                                        padding='10px 20px 10px 20px'
                                        backgroundColor='white'
                                        color={getColor(option)}
                                        onClick={() => onOptionClicked(option, item.id)}
                                        key={options.length}
                                    >
                                        {option}
                                    </Block>
                                ))}
                            </Block>
                        )}
                    </Block>

                    <Block display='flex'
                        justifyContent='space-between'>
                        <Span fontSize='14px' text={item.commets} marginRight='20px' />
                        <Block display='flex'>
                            <Image src={pencil} marginRight='10px' />
                            <Image src={closeIcon} />
                        </Block>
                    </Block>

                </Block>
            ))}
        </>
    )
}
