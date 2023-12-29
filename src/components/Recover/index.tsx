import React, { useState } from 'react'
import { theme } from '../../theme/theme'
import Letter from '../../assets/letterInput.svg'
import Arrow from '../../assets/arrow.svg'
import Back from '../../assets/Back.svg'
import { Button } from '../ui/Button'
import { Block } from '../ui/Block'
import { Input } from '../ui/Input'
import Label from '../../components/ui/Label'
import Span from '../../components/ui/Span'
import TitleH1 from '../../components/ui/Text/TitleH1'
import Image from '../ui/Img'
import { WrapperLeft } from '../ui/Wrapper/Left'
import { Modal } from '../ui/Modal'
import { useNavigate } from 'react-router-dom'

export const RecoverPasswordWrapperLeft = () => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
	const [email, setEmail] = useState<string>('')

	const navigate = useNavigate()

	const onModalToggle = () => {
		setIsModalVisible(!isModalVisible)
	}

	return (
		<WrapperLeft height='840px'>
			<Block margin='40px 0 100px 40px'>
				<Image src={Back} onClick={() => navigate('/auth/login')} cursor='pointer'/>
			</Block>
			<Block display='flex' alignItems='center' flexDirection='column'>
				<TitleH1 text='Восстановление пароля'
								 fontSize='50px'
								 fontWeight='500'
								 fontBold='700'
								 fontFamily='Unbounded'
								 margin='0 40px 40px 40px'
								 textAlign='center' />

				<Span text='Введите email, который вы использовали при регистрации'
							fontSize='18px'
							fontWeight='500'
							fontFamily='Nunito'
							marginBottom='32px'
							textAlign='center'
							width='440px' />

				<Block>
					<Label text='E-mail' marginTop='16px' fontFamily='Nunito' />
					<Block backgroundColor={theme.colors.grey_Light}
								 display='flex'
								 alignItems='center'
								 borderRadius='50px'
								 padding='16px 0px 16px 24px'
								 marginBottom='24px'
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
									 onChange={(e) => setEmail(e.target.value)} />
					</Block>

					<Button display='flex'
									alignItems='center'
									borderRadius='50px'
									width='440px'
									padding='20px 40px 20px 40px'
									backgroundColor={theme.colors.Primary_Purple}
									border='none'
									justifyContent='center'
									onClick={onModalToggle}
					>
						<Span text='Отправить код на почту' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
					</Button>
				</Block>

				{isModalVisible ? <Modal visible={isModalVisible} width='600px'>
					<TitleH1 text='Восстановление пароля'
									 fontSize='50px'
									 fontWeight='500'
									 fontBold='700'
									 fontFamily='Unbounded'
									 margin='0 40px 20px 40px'
									 textAlign='center' />
					<Span
						text={`Код подтверждения был отправлен вам на почту ${email}`}
						fontFamily='Nunito'
						margin='0 40px 40px 40px'
						textAlign='center'
						width='520px'
						fontSize='18px'
					/>
					<Block display='flex'
								 gap='12px'
								 marginBottom='60px'>
						<Input width='48px' fontSize='28px' height='64px' borderRadius='8px' borderColor={theme.colors.light_grey}
									 border='2px solid' textAlign='center' maxLength={1} outlineColor={theme.colors.Primary_Purple} />
						<Input width='48px' fontSize='28px' height='64px' borderRadius='8px' borderColor={theme.colors.light_grey}
									 border='2px solid' textAlign='center' maxLength={1} outlineColor={theme.colors.Primary_Purple} />
						<Input width='48px' fontSize='28px' height='64px' borderRadius='8px' borderColor={theme.colors.light_grey}
									 border='2px solid' textAlign='center' maxLength={1} outlineColor={theme.colors.Primary_Purple} />
						<Input width='48px' fontSize='28px' height='64px' borderRadius='8px' borderColor={theme.colors.light_grey}
									 border='2px solid' textAlign='center' maxLength={1} outlineColor={theme.colors.Primary_Purple} />
						<Input width='48px' fontSize='28px' height='64px' borderRadius='8px' borderColor={theme.colors.light_grey}
									 border='2px solid' textAlign='center' maxLength={1} outlineColor={theme.colors.Primary_Purple} />
						<Input width='48px' fontSize='28px' height='64px' borderRadius='8px' borderColor={theme.colors.light_grey}
									 border='2px solid' textAlign='center' maxLength={1} outlineColor={theme.colors.Primary_Purple} />
					</Block>
					<Button display='flex'
									alignItems='center'
									borderRadius='50px'
									width='440px'
									padding='20px 40px 20px 40px'
									backgroundColor={theme.colors.Primary_Purple}
									border='none'
									justifyContent='center'
									onClick={onModalToggle}
					>
						<Span text='Дальше' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
						<Image src={Arrow} alt='' />
					</Button>
				</Modal> : null}
			</Block>


		</WrapperLeft>
	)
}