import React from 'react'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import { elementData } from './types'
import { theme } from '../../../../theme/theme'
import { Options, Select } from '../../../../components/ui/Select'
import Image from '../../../../components/ui/Img'
import pencil from '../../../../assets/pencilIcon.svg'
import closeIcon from '../../../../assets/closeIcon.svg'

type ElementTableProps = {
    data: elementData[];
}

export const ElementsTable = ({ data }: ElementTableProps) => {

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

                    <Select border='none'
                        outline='none' padding='5px 16px 5px 16px'
                        color={theme.colors.orange}
                    >
                        <Options outline='none' color={theme.colors.orange}>HR интервью</Options>
                        <Options color={theme.colors.blue}>Отклик</Options>
                        <Options color={theme.colors.blueMetal}>Тех.собес</Options>
                        <Options color={theme.colors.green}>Кейс интервью</Options>
                        <Options >Менеджер</Options>
                        <Options >Оффер</Options>
                    </Select>
                    <Block display='flex'
                        justifyContent='space-between'>
                        <Span fontSize='14px' text={item.commets} marginRight='20px' />
                        <Block display='flex'>
                            <Image src={pencil} marginRight='10px'/>
                            <Image src={closeIcon} />
                        </Block>
                    </Block>

                </Block>
            ))}
        </>
    )
}
