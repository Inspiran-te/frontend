import React from 'react'
import { Block } from '../../components/ui/Block'
import { theme } from '../../theme/theme'
import { Header } from '../../components/Header'
import { Container } from '../../components/ui/Container'
import Span from '../../components/ui/Span'
import { Button } from '../../components/ui/Button'
import Image from '../../components/ui/Img'
import TitleH2 from '../../components/ui/Text/TitleH2'
import { ElementsTable } from './components/ElementTable'
import arrow from '../../assets/arrowRightWhite.svg'
import { ImagesComponent } from './components/Images'
import { CheckBoxComponent } from './components/Checkboxes'
import { HeaderElementsTable } from './components/HeaderElementsTable'
import linePurple from '../../assets/LineTwo.svg'

const DATA = [
	{
		id: '1',
		nameCompany: 'Рога и копыта',
		linkVakansy: 'https://1234556',
		postVacansy: 'ux/ui designer',
		contactsRecruiter: '+33757005467',
		commets: 'Комментарий, комментарий, комментарий'
	},
	{
		id: '2',
		nameCompany: 'Рога и копыта',
		linkVakansy: 'https://1234556',
		postVacansy: 'ux/ui designer',
		contactsRecruiter: '+33757005467',
		commets: 'Комментарий, комментарий, комментарий'
	},
	{
		id: '3',
		nameCompany: 'Рога и копыта',
		linkVakansy: 'https://1234556',
		postVacansy: 'ux/ui designer',
		contactsRecruiter: '+33757005467',
		commets: 'Комментарий, комментарий, комментарий'
	},
	{
		id: '4',
		nameCompany: 'Рога и копыта',
		linkVakansy: 'https://1234556',
		postVacansy: 'ux/ui designer',
		contactsRecruiter: '+33757005467',
		commets: 'Комментарий, комментарий, комментарий'
	}
]

export const ResponseTable = () => {

	return (
		<Container backgroundColor={theme.colors.grey_Light}>
			<Block width='100%'
						 display='flex'
						 flexDirection='column'
						 border='none'
						 boxSizing='border-box'
						 padding='0px 40px 0px 40px'
						 marginBottom='39px'>

				<Header />

				<Block border='none'
							 display='flex'
							 justifyContent='space-between'
							 width='100%'
							 marginTop='10px'
				>
					<TitleH2
						text='Таблица откликов'
						fontFamily='Unbounded'
						fontWeight='400'
						fontSize='36px' />

					<Block color={theme.colors.white}>
						<Button display='flex'
										justifyContent='center'
										alignItems='center'
										border='2px solid #7400FF'
										borderRadius='50px'
										width='242px'
										height='52px'
										marginTop='24px'
										marginBottom='5px'
										backgroundColor={theme.colors.Primary_Purple}
										color={theme.colors.white}>

							<Span fontFamily='Nunito' fontSize='18px'
										text='Добавить отклик' />
							<Image marginLeft='10px' src={arrow} />
						</Button>
					</Block>
				</Block>

				<Block backgroundColor={theme.colors.white}
							 borderRadius='28px'
							 height='255px'
							 marginTop='10px'
							 padding='27px 40px 27px 40px'
				>
					<ImagesComponent />
					<CheckBoxComponent />
				</Block>

				<HeaderElementsTable />
				<ElementsTable data={DATA} />
			</Block>

		</Container>
	)
}
