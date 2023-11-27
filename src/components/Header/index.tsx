import React from 'react'
import { theme } from '../../theme/theme'
import { Block } from '../ui/Block'
import Image from '../../components/ui/Img'
import AvatarUser from '../../assets/AvatarUser.png'
import Logo from '../../assets/logo.svg'
import { Headers } from '../ui/Header/Index'
import LinkForHeader from '../ui/Route/RouteForHeader'

export const Header = () => {

	return (
		<Headers display='flex'
			justifyContent='space-between'
			alignItems='center'
			borderRadius='66px'
			backgroundColor={theme.colors.white}
			padding='14px 25px 14px 25px'
			marginTop='16px'
			border='none'
			position='sticky'
			top='0px'
			boxSizing='border-box'
		>

			<Image width='52px' height='52px' src={Logo} alt='' />

			<Block backgroundColor={theme.colors.white}
				display='flex'
				alignItems='center'
				border='none'
				fontSize='18px'
				fontFamily='Nunito'
				fontWeight='400'

			>
				<LinkForHeader to='/api/main' marginRight='24px' textDecoration='none' color={theme.colors.grey}>Главная</LinkForHeader>
				<LinkForHeader to='/api/resume' marginRight='24px' textDecoration='none' color={theme.colors.grey}>Резюме</LinkForHeader>
				<LinkForHeader to='/api/responsetable' marginRight='24px' textDecoration='none' color={theme.colors.grey}>Таблица откликов</LinkForHeader>
				<LinkForHeader to='/api/knowledgebase' marginRight='24px' textDecoration='none' color={theme.colors.grey}>База знаний</LinkForHeader>
				<LinkForHeader to='/api/careeradvices' marginRight='24px' textDecoration='none' color={theme.colors.grey}>Карьерные консультации</LinkForHeader>
				<LinkForHeader to='/api/help' marginRight='24px' textDecoration='none' color={theme.colors.grey}>Помощь</LinkForHeader>
			</Block>

			<Image src={AvatarUser} alt='' />
		</Headers>
	)
}