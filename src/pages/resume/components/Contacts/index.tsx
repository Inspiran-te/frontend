import React, { useState } from 'react'
import { theme } from '../../../../theme/theme'
import { Block } from '../../../../components/ui/Block'
import Span from '../../../../components/ui/Span'
import Label from '../../../../components/ui/Label'
import { Input } from '../../../../components/ui/Input'
import Image from '../../../../components/ui/Img'
import ArrowUp from '../../../../assets/ArrowUpp.svg'
import Smile from '../../../../assets/smile.png'
import ContactsIcon from '../../../../assets/ContactsIcon.svg'
import ArrowDown from '../../../../assets/ArrowDown.svg'
import { changeOpenBlock } from '../../../../helpers'
import { ContactsProps } from './types'

export const Contacts: React.FC<ContactsProps> = ({ handleInputChange, inputsData }) => {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Block marginTop='20px'
					 backgroundColor={theme.colors.white}
					 borderRadius='24px'
					 padding='40px 40px 40px 40px'
					 marginBottom='44px'>

			<Block display='flex'
						 justifyContent='space-between'
						 alignItems='center'>

				<Block display='flex'
							 justifyContent='center'
							 alignItems='center'
				>
					<Image src={ContactsIcon} alt='' />
					<Span fontFamily='Unbounded' fontSize='24px'
								text='Контакты' marginLeft='7px' />
				</Block>

				{isOpen && <Image src={ArrowUp} alt='' onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}
				{!isOpen && <Image src={ArrowDown} alt='' onClick={() => changeOpenBlock(isOpen, setIsOpen)} />}

			</Block>
			{isOpen && <Block display='flex' justifyContent='center' boxSizing='border-box'>

				<Block display='flex' flexDirection='column' marginRight='20px'>
					<Label text='Имя' marginTop='40px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='Иван'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='name'
								 value={inputsData.contact.name} />

					<Label text='E-mail' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='example@gmail.com'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='email'
								 value={inputsData.contact.email}
					/>

					<Label text='LinkedIn' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='https://'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='linkedin'
								 value={inputsData.contact.linkedin} />

					<Label text='Behance' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='https://'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='behance'
								 value={inputsData.contact.behance} />

					<Label text='Страна проживания/резиденства' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='Россия'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='country'
								 value={inputsData.contact.country} />
				</Block>

				<Block display='flex' flexDirection='column'>
					<Label text='Фамилия' marginTop='40px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='Иванов'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='surname'
								 value={inputsData.contact.surname}
					/>

					<Label text='Телефон' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='+90 123 45 67 89'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='phone'
								 value={inputsData.contact.phone} />

					<Label text='Github' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='https://'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px' name='github'
								 value={inputsData.contact.github} />

					<Label text='Сайт' marginTop='16px' fontFamily='Nunito' marginBottom='5px' />
					<Input onChange={handleInputChange} type='text'
								 placeholder='https://'
								 backgroundColor={theme.colors.grey_Light}
								 border='none'
								 outline='none'
								 width='328px'
								 fontFamily='Nunito'
								 fontSize='18px'
								 padding='16px 24px 16px 24px'
								 borderRadius='50px'
								 name='site'
								 value={inputsData.contact.site} />
				</Block>

				<Block backgroundColor='#EFEFF9' display='flex'
							 justifyContent='center' marginLeft='50px'
							 borderRadius='20px' padding='55px 20px 20px 20px'
							 height='100px' marginTop='40px'>
					<Image width='24px' height='24px' src={Smile} alt='' />
					<Span marginLeft='20px'
								color={theme.colors.black}
								text='Телефон следует указывать тот, к которому привязаны telegram/whatsapp. Почту лучше всего завести профессиональную для откликов.'
					/>
				</Block>
			</Block>}
		</Block>
	)
}