import React from 'react'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'

export const HeaderElementsTable = () => {

    return (
        <Block marginTop='36px'
            display='flex'
            justifyContent='space-around'
            alignItems='center'
            >
            <Span text='Название компании'
                fontSize='12px'
                fontWeight='400'
                fontFamily='Nunito'
            />

            <Span text='Вакансия (ссылка)'
                fontSize='12px'
                fontWeight='400'
                fontFamily='Nunito'
                
            />

            <Span text='Должность'
                fontSize='12px'
                fontWeight='400'
                fontFamily='Nunito'
                padding='0px 40px 0px 0px'
                marginRight='20px'
            />

            <Span text='Контакты рекрутера'
                fontSize='12px'
                fontWeight='400'
                fontFamily='Nunito'
                marginRight='50px'
            />

            <Span text='Статус'
                fontSize='12px'
                fontWeight='400'
                fontFamily='Nunito'
                padding='0px 200px 0px 0px'
            />

            <Span text='Комментарии'
                fontSize='12px'
                fontWeight='400'
                fontFamily='Nunito'
                padding='0px 150px 0px 0px'
            />
        </Block>
    )
}