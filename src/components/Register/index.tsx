import React from 'react'
import Google from '../../assets/GoogleIcon.svg'
import Github from '../../assets/GithubIcon.svg'
import LinkedIN from '../../assets/LinkedINicon.svg'
import Letter from '../../assets/letterInput.svg'
import LockIcon from '../../assets/lockIcon.svg'
import PasswordEye from '../../assets/EyeOn.png'
import { Button } from '../ui/Button'
import { Block } from '../ui/Block'
import { Input } from '../ui/Input'
import Label from '../../components/ui/Label'
import Span from '../../components/ui/Span'
import TitleH1 from '../../components/ui/Text/TitleH1'
import { theme } from '../../theme/theme'
import { GreyLine } from '../ui/Line'
import Link from '../../components/ui/Route'
import { WrapperLeft } from '../ui/Wrapper/Left'
import { ButtonsWrapper } from '../ui/Wrapper/Buttons'
import Image from '../ui/Img'

export const RegistrationWrapperLeft = () => {

	return (
		<WrapperLeft>
			<TitleH1 text='Регистрация'
				fontSize='50px'
				fontWeight='500'
				fontBold='700'
				fontFamily='Unbounded'
				marginBottom='16px' />
			<Span>
				<Span text='Есть аккаунт? '
					color={theme.colors.grey}
					fontSize='16px'
					fontFamily='Nunito' />
				<Link text='Войти'
					cursor='pointer'
					color={theme.colors.Primary_Purple}
					fontWeight='500'
					fontFamily='Nunito'
					to='/auth/login'
					textDecoration='none' />
			</Span>

			<Span text='Войти через'
				fontSize='18px'
				fontWeight='500'
				fontFamily='Nunito'
				marginTop='20px' />

			<ButtonsWrapper>
				<Button display='flex'
					alignItems='center'
					flexDirection='column'
					borderRadius='16px'
					width='141px'
					height='68px'
					backgroundColor={theme.colors.white}
					padding='6px 8px 12px 8px'>
					<Image src={Google} alt='' />
					<Span text='Google' color='black' fontFamily='Nunito' />
				</Button>

				<Button display='flex'
					alignItems='center'
					flexDirection='column'
					borderRadius='16px'
					width='141px'
					height='68px'
					backgroundColor={theme.colors.black}
					padding='6px 8px 12px 8px'>
					<Image src={Github} alt='' />
					<Span text='Github' color='white' fontFamily='Nunito' />
				</Button>

				<Button display='flex'
					alignItems='center'
					flexDirection='column'
					borderRadius='16px'
					width='141px'
					height='68px'
					backgroundColor={theme.colors.blue}
					padding='6px 8px 12px 8px'
					border='none'>
					<Image src={LinkedIN} alt='' />
					<Span text='Linkedin' color='white' fontFamily='Nunito' />
				</Button>
			</ButtonsWrapper>

			<GreyLine width='81%' marginBottom='20px' marginTop='20px' />

			<Span text='Или с помощью почты и пароля'
				marginBottom='18px'
				fontFamily='Nunito'
			/>

			<Block>
				<Label text='Имя' marginTop='16px' fontFamily='Nunito' />
				<Block backgroundColor={theme.colors.grey_Light}
					display='flex'
					alignItems='center'
					borderRadius='50px'
					padding='16px 0px 16px 24px'
					width='95%'
					marginBottom='16px'
					border='none'
					marginTop='5px'
					fontSize='18px'>
					<Input type='text'
						placeholder='Иван'
						backgroundColor={theme.colors.grey_Light}
						border='none'
						outline='none'
						width='328px'
						fontFamily='Nunito'
						fontSize='18px' />
				</Block>

				<Label text='Фамилия' marginTop='16px' fontFamily='Nunito' />
				<Block backgroundColor={theme.colors.grey_Light}
					display='flex'
					alignItems='center'
					borderRadius='50px'
					padding='16px 0px 16px 24px'
					width='95%'
					marginBottom='16px'
					border='none'
					marginTop='5px'>
					<Input type='text'
						placeholder='Иванов'
						backgroundColor={theme.colors.grey_Light}
						border='none'
						outline='none'
						width='328px'
						fontFamily='Nunito'
						fontSize='18px' />
				</Block>

				<Label text='E-mail' marginTop='16px' fontFamily='Nunito' />
				<Block backgroundColor={theme.colors.grey_Light}
					display='flex'
					alignItems='center'
					borderRadius='50px'
					padding='16px 0px 16px 24px'
					width='95%'
					marginBottom='16px'
					border='none'
					marginTop='5px'>
					<Image src={Letter} alt='' />
					<Input type='text'
						placeholder='example@gmail.com'
						backgroundColor={theme.colors.grey_Light}
						border='none'
						outline='none'
						width='328px'
						fontFamily='Nunito'
						fontSize='18px' />
				</Block>

				<Label text='Пароль' />
				<Block backgroundColor={theme.colors.grey_Light}
					display='flex'
					alignItems='center'
					borderRadius='50px'
					padding='16px 0px 16px 24px'
					width='95%'
					marginBottom='28px'
					border='none'
					marginTop='5px'
					>
					<Image src={LockIcon} alt='' />
					<Input type='password'
						placeholder='Придумайте пароль'
						backgroundColor={theme.colors.grey_Light}
						border='none'
						outline='none'
						width='328px'
						fontFamily='Nunito'
						fontSize='18px'
					/>
					<Image src={PasswordEye} alt='' />
				</Block>

				<Button display='flex'
					alignItems='center'
					borderRadius='50px'
					width='440px'
					padding='20px 40px 20px 40px'
					backgroundColor={theme.colors.Primary_Purple}
					border='none'
					justifyContent='center'>
					<Span text='Регистрация' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
				</Button>

			</Block>

			<Span marginTop='20px' marginBottom='26px' display='flex' flexDirection='column'>
				<Span text='Нажимая кнопку «Зарегистрироваться», вы принимаете условия' color={theme.colors.grey}
					fontSize='14px' />
				<Span text='пользовательского соглашения' cursor='pointer'
					color={theme.colors.Primary_Purple}
					fontWeight='500'
					fontSize='14px' />
			</Span>

		</WrapperLeft>
	)
}