import React from 'react'
import Letter from '../../assets/letterInput.svg'
import { Button } from '../ui/Button'
import { Block } from '../ui/Block'
import { Input } from '../ui/Input'
import Label from '../../components/ui/Label'
import Span from '../../components/ui/Span'
import TitleH1 from '../../components/ui/Text/TitleH1'
import { theme } from '../../theme/theme'
import { WrapperLeft } from '../ui/Wrapper/Left'
import Image from '../ui/Img'

export const RecoverPasswordWrapperLeft = () => {

	return (
		<WrapperLeft height='840px'>
			<TitleH1 text='Восстановление пароля'
							 fontSize='50px'
							 fontWeight='500'
							 fontBold='700'
							 fontFamily='Unbounded'
							 marginBottom='40px'
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
								 fontSize='18px' />
				</Block>

				<Button display='flex'
								alignItems='center'
								borderRadius='50px'
								width='440px'
								padding='20px 40px 20px 40px'
								backgroundColor={theme.colors.Primary_Purple}
								border='none'
								justifyContent='center'>
					<Span text='Сбросить пароль' color='#FFFFFF' marginRight='10px' fontFamily='Nunito' fontSize='18px' />
				</Button>

			</Block>

		</WrapperLeft>
	)
}