import React from 'react'
import { ButtonsWrapper, Container, Image, Line, Wrapper, WrapperLeft, WrapperRight } from './styles'
import Logo from '../../assets/logo.svg'
import ImageLoginPage from '../../assets/svg-pic.png'
import TitleInSection from '../../components/ui-components/Text/TitleInSection'
import Google from '../../assets/GoogleIcon.svg'
import Github from '../../assets/GithubIcon.svg'
import LinkedIN from '../../assets/LinkedINicon.svg'
import Letter from '../../assets/letterInput.svg'
import LockIcon from '../../assets/lockIcon.svg'
import PasswordEye from '../../assets/EyeOn.png'
import { Button } from '../../components/ui-components/Button'
import { Block } from '../../components/ui-components/Block'
import { Input } from '../../components/ui-components/Input'
import Label from '../../components/ui-components/Label'
import Span from '../../components/ui-components/Span'
import TitleH1 from '../../components/ui-components/Text/TitleH1'
import { theme } from '../../theme/theme'
import { GreyLine } from '../../components/ui-components/Line'
import Link from '../../components/ui-components/Route'

export const Registration = () => {

	return (
		<Container>
			<Wrapper>
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
						textDecoration='none'/>
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
							<img src={Google} alt='' />
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
							<img src={Github} alt='' />
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
							<img src={LinkedIN} alt='' />
							<Span text='Linkedin' color='white' fontFamily='Nunito' />
						</Button>

					</ButtonsWrapper>

					<GreyLine marginBottom='20px' marginTop='20px' />

					<Span text='Или с помощью почты и пароля'
								marginBottom='18px'
								fontFamily='Nunito'
					/>

					<div>
						<Label text='Имя' marginTop='16px' fontFamily='Nunito' />
						<Block backgroundColor={theme.colors.grey_Light}
									 display='flex'
									 alignItems='center'
									 borderRadius='50px'
									 padding='16px 24px 16px 24px'
									 width='440px'
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
									 padding='16px 24px 16px 24px'
									 width='440px'
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
										 placeholder='Придумайте пароль'
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
							<Span text='Регистрация' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
						</Button>
					</div>
					<Span marginTop='20px' marginBottom='26px' display='flex' flexDirection='column'>
						<Span text='Нажимая кнопку «Зарегистрироваться», вы принимаете условия' color={theme.colors.grey}
									fontSize='14px' />
						<Span text='пользовательского соглашения' cursor='pointer'
									color={theme.colors.Primary_Purple}
									fontWeight='500'
									fontSize='14px' />
					</Span>

				</WrapperLeft>

				<WrapperRight>
					<Image src={Logo} alt='Logo' />
					<TitleInSection title='Name' fontSize='60px' fontBold='400' />
					<Span text='Одна система для всех ваших вакансий'
								fontSize='22px'
								fontWeight='500'
								marginBottom='36px'
								fontFamily='Unbounded'
					/>
					<img src={ImageLoginPage} alt='' />
				</WrapperRight>
			</Wrapper>
		</Container>
	)
}