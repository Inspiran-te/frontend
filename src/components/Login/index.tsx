import React, { useState } from 'react'
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
import Image from '../ui/Img'
import { useLoginMutation } from '../../api/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ILoginRequest } from '../../api/auth/types'
import { setCredentials } from '../../features/authSlice'

export const LoginWrapperLeft = () => {
	const [user, setUser] = useState<ILoginRequest>({
		username: '',
		password: '',
		accessToken: '',
		refreshToken: '',
		id: ''
	})


	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [login] = useLoginMutation()

	const handleLoginUser = async () => {
		try {
			if (user) {
				await login(user).unwrap()
					.then((result) => {
						const { id, refreshToken, accessToken } = result
						dispatch(
							setCredentials({
								auth: {
									id,
									access: accessToken,
									refresh: refreshToken,
									authenticated: true
								}
							})
						)
						navigate('/api/main')
					})
			}
		} catch (error) {
			console.error('Login failed:', error)
		}
	}

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
							fontWeight='500'
							fontFamily='Nunito'
							to='/auth/register'
							textDecoration='none'
							active />
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
					<Image src={Google} alt='Google' />
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
					<Image src={Github} alt='Github' />
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
					<Image src={LinkedIN} alt='LinkedIN' />
					<Span text='Linkedin' color='white' fontFamily='Nunito' />
				</Button>

			</ButtonsWrapper>

			<GreyLine width='440px' marginTop='32px' marginBottom='32px' />

			<Span text='Или с помощью почты и пароля'
						marginBottom='18px'
						fontFamily='Nunito'
			/>

			<Block>
				<Label text='E-mail' marginTop='16px' fontFamily='Nunito' />
				<Block backgroundColor={theme.colors.grey_Light}
							 display='flex'
							 alignItems='center'
							 borderRadius='50px'
							 padding='16px 0px 16px 24px'
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
								 fontSize='18px'
								 marginRight='9px'
								 onChange={(e) => {
									 setUser({ ...user, username: e.target.value })
									 console.log(e.target.value)
								 }}
					/>
				</Block>
				<Label text='Пароль' />
				<Block backgroundColor={theme.colors.grey_Light}
							 display='flex'
							 alignItems='center'
							 borderRadius='50px'
							 padding='16px 0px 16px 24px'
							 marginBottom='28px'
							 border='none'
							 marginTop='5px'
				>
					<Image src={LockIcon} alt='' />
					<Input type='password'
								 placeholder='Введите пароль'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 onChange={(e) => {
									 setUser({ ...user, password: e.target.value })
								 }}
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
								justifyContent='center'
								onClick={handleLoginUser}
				>
					<Span text='Войти' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
					<Image src={Arrow} alt='' />
				</Button>
			</Block>
			<Span marginTop='20px' fontFamily='Nunito'>
				<Span text='Забыли пароль? ' color={theme.colors.grey} fontSize='14px' />
				<Link text='Восстановить здесь' cursor='pointer'
							to='/auth/recover'
							active
							fontWeight='500'
							textDecoration='none' />
			</Span>
		</WrapperLeft>
	)
}