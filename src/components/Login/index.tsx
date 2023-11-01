import React from 'react'
import Google from '../../assets/GoogleIcon.svg'
import Github from '../../assets/GithubIcon.svg'
import LinkedIN from '../../assets/LinkedINicon.svg'
import Letter from '../../assets/letterInput.svg'
import LockIcon from '../../assets/lockIcon.svg'
import Arrow from '../../assets/arrow.svg'
import PasswordEye from '../../assets/EyeOn.png'
import { theme } from '../../theme/theme'
import { Button } from '../ui/Button'
import { Block } from '../ui/Block'
import { Input } from '../ui/Input'
import { GreyLine } from '../ui/Line'
import { ButtonsWrapper } from '../ui/Wrapper/Buttons'
import { WrapperLeft } from '../ui/Wrapper/Left'
import Label from '../ui/Label'
import Span from '../ui/Span'
import TitleH1 from '../ui/Text/TitleH1'
import Link from '../ui/Route'

export const LoginWrapperLeft = () => {

	return (
		<WrapperLeft height='840px'>
			<TitleH1 text='Вход'
							 fontSize='50px'
							 fontWeight='500'
							 fontBold='700'
							 fontFamily='Unbounded'
							 marginBottom='16px' />
			<Span>
				<Span text='Еще нет аккаунта? '
							color={theme.colors.grey}
							fontSize='16px'
							fontFamily='Nunito' />
				<Link text='Регистрация'
							cursor='pointer'
							color={theme.colors.Primary_Purple}
							fontWeight='500'
							fontFamily='Nunito'
							to='/auth/register'
							textDecoration='none' />
			</Span>

			<Span text='Войти через'
						fontSize='18px'
						fontWeight='500'
						fontFamily='Nunito'
						marginTop='40px' />

			<ButtonsWrapper>
				<Button display='flex'
								alignItems='center'
								flexDirection='column'
								borderRadius='16px'
								width='141px'
								height='68px'
								backgroundColor={theme.colors.white}
								padding='6px 8px 12px 8px'>
					<img src={Google} alt='Google' />
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
					<img src={Github} alt='Github' />
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
					<img src={LinkedIN} alt='LinkedIN' />
					<Span text='Linkedin' color='white' fontFamily='Nunito' />
				</Button>

			</ButtonsWrapper>

			<GreyLine marginTop='32px' marginBottom='32px' />

			<Span text='Или с помощью почты и пароля'
						marginBottom='18px'
						fontFamily='Nunito'
			/>

			<div>
				<Label text='E-mail' marginTop='16px' fontFamily='Nunito' />
				<Block backgroundColor={theme.colors.grey_Light}
							 display='flex'
							 alignItems='center'
							 borderRadius='50px'
							 padding='16px 24px 16px 24px'
							 width='440px'
							 marginBottom='16px'
							 border='none'
							 marginTop='5px'>
					<img src={Letter} alt='' />
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
							 padding='16px 24px 16px 24px'
							 width='440px'
							 marginBottom='28px'
							 border='none'
							 marginTop='5px'
				>
					<img src={LockIcon} alt='' />
					<Input type='password'
								 placeholder='Введите пароль'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
					/>
					<img src={PasswordEye} alt='' />
				</Block>
				<Button display='flex'
								alignItems='center'
								borderRadius='50px'
								width='440px'
								padding='20px 40px 20px 40px'
								backgroundColor={theme.colors.Primary_Purple}
								border='none'
								justifyContent='center'>
					<Span text='Войти' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
					<img src={Arrow} alt='' />
				</Button>
			</div>
			<Span marginTop='20px' fontFamily='Nunito'>
				<Span text='Забыли пароль? ' color={theme.colors.grey} fontSize='14px' />
				<Span text='Восстановить здесь' cursor='pointer'
							color={theme.colors.Primary_Purple}
							fontWeight='500' />
			</Span>
		</WrapperLeft>
	)
}