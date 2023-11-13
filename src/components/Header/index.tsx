import React from 'react'
import { theme } from '../../theme/theme'
import { Block } from '../ui/Block'
import Image from '../../components/ui/Img'
import AvatarUser from '../../assets/AvatarUser.png'
import Logo from '../../assets/logo.svg'
import Link from '../../components/ui/Route'
import { Headers } from '../ui/Header/Index'

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
						 color={theme.colors.grey}
			>
				<Link to='/api/main' marginRight='24px' textDecoration='none'>Главная</Link>
				<Link to='/api/resume' marginRight='24px' textDecoration='none'>Резюме</Link>
				<Link to='/api/responsetable' marginRight='24px' textDecoration='none'>Таблица откликов</Link>
				<Link to='/api/knowledgebase' marginRight='24px' textDecoration='none'>База знаний</Link>
				<Link to='/api/careeradvices' marginRight='24px' textDecoration='none'>Карьерные консультации</Link>
				<Link to='/api/help' marginRight='24px' textDecoration='none'>Помощь</Link>
			</Block>

			<Image src={AvatarUser} alt='' />
		</Headers>
	)
}