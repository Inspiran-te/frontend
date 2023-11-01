import React from 'react'
import Logo from '../../../assets/logo.svg'
import ImageLoginPage from '../../../assets/svg-pic.png'
import TitleInSection from '../../ui-components/Text/TitleInSection'
import Span from '../../ui-components/Span'
import { theme } from '../../../theme/theme'
import * as SC from './styles'


export const WrapperRightComponent = () => {

    return (
        <SC.WrapperRight>
            <SC.Image src={Logo} alt='Logo' />
            <TitleInSection title='Name' fontSize='60px' fontBold='400' fontFamily='Nunito'/>
            <Span text='Одна система для всех ваших вакансий'
                fontSize='22px'
                fontWeight='500'
                marginBottom='36px'
                fontFamily='Unbounded'
            />
            <img src={ImageLoginPage} alt='' />
        </SC.WrapperRight>
    )
}