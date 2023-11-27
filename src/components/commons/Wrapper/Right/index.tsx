import React from 'react'
import Logo from '../../../../assets/logo.svg'
import ImageLoginPage from '../../../../assets/svg-pic.png'
import TitleInSection from '../../../ui/Text/TitleInSection'
import Span from '../../../ui/Span'
import * as SC from './styles'


export const WrapperRight = () => {

	return (
		<SC.WrapperRight>
			<SC.Image src={Logo} alt='Logo' />
			<TitleInSection title='JobGo' fontSize='60px' fontBold='400' fontFamily='Nunito' />
			<Span text='Одна система для всех ваших вакансий'
						fontSize='22px'
						fontWeight='500'
						marginBottom='36px'
						fontFamily='Unbounded'
			/>
			<img src={ImageLoginPage} alt='ImageLoginPage' />
		</SC.WrapperRight>
	)
}