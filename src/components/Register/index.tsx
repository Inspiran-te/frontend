import React, { useState, useEffect } from 'react'
import Google from '../../assets/GoogleIcon.svg'
import Github from '../../assets/GithubIcon.svg'
import LinkedIN from '../../assets/LinkedINicon.svg'
import Letter from '../../assets/letterInput.svg'
import LockIcon from '../../assets/lockIcon.svg'
import EyeOn from '../../assets/EyeOn.svg'
import EyeOff from '../../assets/EyeOff.svg'
import SuccessIcon from '../../assets/SuccessIcon.svg'
import Close from '../../assets/Close.svg'
import { Button } from '../ui/Button'
import { Block } from '../ui/Block'
import { Input } from '../ui/Input'
import Label from '../../components/ui/Label'
import Span from '../../components/ui/Span'
import TitleH1 from '../../components/ui/Text/TitleH1'
import TitleH2 from '../ui/Text/TitleH2'
import { theme } from '../../theme/theme'
import { GreyLine } from '../ui/Line'
import Link from '../../components/ui/Route'
import { WrapperLeft } from '../ui/Wrapper/Left'
import { ButtonsWrapper } from '../ui/Wrapper/Buttons'
import Image from '../ui/Img'
import { useRegistrationMutation } from '../../api/auth'
import { IRegistrationRequest, IRegistrationResponse } from '../../api/auth/types'
import { Modal } from '../ui/Modal'
import Arrow from '../../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/authSlice'
import { TOU } from './components/TOU'

export const RegistrationWrapperLeft = () => {
	const [newUser, setNewUser] = useState<IRegistrationRequest>({
		name: '',
		surname: '',
		email: '',
		password: '',
		secondPassword: '',
		id: '',
		accessToken: '',
		refreshToken: ''
	})
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [termsOfUse, setTermsOfUse] = useState(false)
	const [firstPasswordShown, setFirstPasswordShown] = useState(false)
	const [secondPasswordShown, setSecondPasswordShown] = useState(false)
	const [isFormValid, setIsFormValid] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [registration] = useRegistrationMutation<IRegistrationResponse>()

	const handleRegisterUser = async () => {
		try {
			if (newUser && newUser.password === newUser.secondPassword) {
				await registration(newUser)
					.unwrap()
					.then((result) => {
						const { id, refreshToken, accessToken } = result
						setIsModalVisible(true)
						dispatch(
							setCredentials({
								auth: {
									id,
									access: accessToken,
									refresh: refreshToken,
									authenticated: false
								}
							})
						)
					})
			}
		} catch (error) {
			console.error('Registration failed:', error)
		}
	}

	const onModalClose = () => {
		setIsModalVisible(false)
		navigate('/auth/login')
	}

	const onTOUModalToggle = () => {
		setTermsOfUse(!termsOfUse)
	}

	const togglePasswordVisibility = (passwordType: 'first' | 'second') => {
		if (passwordType === 'first') {
			setFirstPasswordShown(!firstPasswordShown)
		} else if (passwordType === 'second') {
			setSecondPasswordShown(!secondPasswordShown)
		}
	}

	useEffect(() => {
		const isValid = newUser.name !== '' && newUser.surname !== '' && newUser.email !== '' && newUser.password !== '' && newUser.secondPassword !== ''
		setIsFormValid(isValid)
	}, [newUser])

	return (
		<WrapperLeft alignItems='center' display='flex' justifyContent='center'>
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
							fontWeight='500'
							fontFamily='Nunito'
							to='/auth/login'
							textDecoration='none'
							color={theme.colors.Primary_Purple} />
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

			<GreyLine width='440px' marginBottom='20px' marginTop='20px' />

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
							 fontSize='18px'
							 borderColor='red'

				>
					<Input
						type='text'
						placeholder='Иван'
						backgroundColor={theme.colors.grey_Light}
						border='none'
						outline='none'
						width='328px'
						fontFamily='Nunito'
						fontSize='18px'
						value={newUser.name}
						onChange={(e) => {
							setNewUser({ ...newUser, name: e.target.value })
						}}
					/>
				</Block>

				<Label text='Фамилия' marginTop='16px' fontFamily='Nunito' />
				<Block backgroundColor={theme.colors.grey_Light}
							 display='flex'
							 alignItems='center'
							 borderRadius='50px'
							 padding='16px 0px 16px 24px'
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
								 fontSize='18px'
								 value={newUser.surname}
								 onChange={(e) => {
									 setNewUser({ ...newUser, surname: e.target.value })
								 }} />
				</Block>

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
								 value={newUser.email}
								 onChange={(e) => {
									 setNewUser({ ...newUser, email: e.target.value })
								 }} />
				</Block>

				<Label text='Пароль' />
				<Block backgroundColor={theme.colors.grey_Light}
							 display='flex'
							 alignItems='center'
							 borderRadius='50px'
							 padding='16px 0px 16px 24px'
							 border='none'
							 marginTop='5px'
				>
					<Image src={LockIcon} alt='' />
					<Input type={firstPasswordShown ? 'text' : 'password'}
								 placeholder='Придумайте пароль'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 marginRight='9px'
								 value={newUser.password}
								 onChange={(e) => {
									 setNewUser({ ...newUser, password: e.target.value })
								 }} />
					<Image src={firstPasswordShown ? EyeOff : EyeOn} alt='' onClick={() => togglePasswordVisibility('first')} cursor='pointer' />
				</Block>
				<Block backgroundColor={theme.colors.grey_Light}
							 display='flex'
							 alignItems='center'
							 borderRadius='50px'
							 padding='16px 0px 16px 24px'
							 border='none'
							 marginTop='24px'
				>
					<Image src={LockIcon} alt='' />
					<Input type={secondPasswordShown ? 'text' : 'password'}
								 placeholder='Повторите пароль'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 marginRight='9px'
								 value={newUser.secondPassword}
								 onChange={(e) => {
									 setNewUser({ ...newUser, secondPassword: e.target.value })
								 }} />
					<Image src={secondPasswordShown ? EyeOff : EyeOn} alt='' onClick={() => togglePasswordVisibility('second')} cursor='pointer' />
				</Block>

				<Span marginTop='16px' marginBottom='20px' display='flex' flexDirection='column' color={theme.colors.grey}
							fontSize='14px' padding='0 24px 0 24px'>
					<Span text='Заглавные и строчные буквы латинского алфавита (A-z)' />
					<Span text='Цифры и спец.символы (!@#$_%^&*)' />
					<Span text='8 символов' />
				</Span>

				<Button display='flex'
								alignItems='center'
								borderRadius='50px'
								width='440px'
								padding='20px 40px 20px 40px'
								backgroundColor={isFormValid ? theme.colors.Primary_Purple : theme.colors.disable_grey}
								border='none'
								justifyContent='center'
								onClick={handleRegisterUser}
								disabled={!isFormValid}
				>
					<Span text='Зарегистрироваться' color={isFormValid ? theme.colors.white : theme.colors.grey}
								marginRight='10px' fontFamily='Nunito' fontSize='18px' />
				</Button>

			</Block>

			<Span marginTop='20px' marginBottom='26px' display='flex' flexDirection='column' fontSize='14px'>
				<Span text='Нажимая кнопку «Зарегистрироваться», вы принимаете условия' color={theme.colors.grey} />
				<Span text='пользовательского соглашения' cursor='pointer'
							color={theme.colors.Primary_Purple}
							fontWeight='500'
							onClick={onTOUModalToggle}
				/>
			</Span>

			{termsOfUse ?
				<Modal visible={termsOfUse} width='960px'>
					<Block display='flex' justifyContent='space-between' width='908px' margin='20px 24px 0 28px' fontFamily='Unbounded'>
						<TitleH2 text='Пользовательское соглашение'/>
						<Image src={Close} cursor='pointer' onClick={onTOUModalToggle}/>
					</Block>
					<TOU/>
				</Modal> : null }

			{isModalVisible ? <Modal visible={isModalVisible} width='600px' display='flex' alignItems='center' justifyContent='center'>
				<img src={SuccessIcon} alt='Success' />
				<TitleH1 text='Спасибо'
								 fontSize='50px'
								 fontWeight='500'
								 fontBold='700'
								 fontFamily='Unbounded'
								 marginBottom='16px' />
				<Span text='Ваш аккаунт создан!'
							fontFamily='Nunito'
							marginTop='20px'
							marginBottom='40px' />
				<Button display='flex'
								alignItems='center'
								borderRadius='50px'
								width='440px'
								padding='20px 40px 20px 40px'
								backgroundColor={theme.colors.Primary_Purple}
								border='none'
								justifyContent='center'
								onClick={onModalClose}
				>
					<Span text='Войти' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
					<Image src={Arrow} alt='' />
				</Button>
			</Modal> : null }

		</WrapperLeft>
	)
}