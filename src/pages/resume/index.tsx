import { Container } from '../../components/ui/Container'
import { theme } from '../../theme/theme'
import { Block } from '../../components/ui/Block'
import Span from '../../components/ui/Span'
import ImgDownload from '../../assets/ImgDownload.svg'
import { Sammery } from './components/Sammery'
import TitleH2 from '../../components/ui/Text/TitleH2'
import { Button } from '../../components/ui/Button'
import { Education } from './components/Education'
import { Contacts } from './components/Contacts'
import { Skills } from './components/Skills'
import { Expirience } from './components/Expirience'
import { Header } from '../../components/Header'
import Image from '../../components/ui/Img'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Input } from '../../components/ui/Input'
import axios from 'axios'
import Label from '../../components/ui/Label'
import { UploadedResume } from './components/UploadedResume'
import { IInputsData } from './types'

export const Resume = () => {
	const [resumeUser, setResumeUser] = useState('')
	const [inputsData, setInputsData] = useState<IInputsData>({
		contact: {
			name: '',
			surname: '',
			email: '',
			phone: '',
			linkedin: '',
			github: '',
			behance: '',
			site: '',
			country: ''
		},
		summary: {
			summary: ''
		},
		skill: {
			skills: ''
		},
		education: {
			institutions: [
				{
					name: '',
					position: '',
					startDate: null,
					endDate: null,
					description: ''
				}
			]
		},
		experience: {
			companies: [
				{
					name: '',
					position: '',
					startDate: null,
					endDate: null,
					description: ''
				}
			]
		}

	})

	const userId = useSelector((state: RootState) => state.auth.auth.id)
	const userToken = useSelector((state: RootState) => state.auth.auth.access)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setInputsData((prevState) => ({

			...prevState,
			contact: {
				...prevState.contact,
				[name]: value
			},
			summary: {
				...prevState.summary,
				[name]: value
			},
			skill: {
				...prevState.skill,
				skills: value
			},
			education: {
				...prevState.education,
				institutions: [
					{
						name: '',
						position: '',
						startDate: null,
						endDate: null,
						description: ''
					}
				]
			},
			experience: {
				...prevState.experience,
				companies: [
					{
						name: '',
						position: '',
						startDate: null,
						endDate: null,
						description: ''
					}
				]
			}
		}))
	}

	// const addInstitution = () => {
	// 	setInputsData((prevState) => ({
	// 		...prevState,
	// 		education: {
	// 		  ...prevState.education,
	// 		  institutions: [
	// 			{
	// 			  name: '',
	// 			  position: '',
	// 			  startDate: null,
	// 			  endDate: null,
	// 			  description: ''
	// 			}
	// 		  ]
	// 		}
	// 	  }));
	// }
	const hasResume = async () => {
		try {
			const response = await axios.get(`http://45.141.79.27:8084/pdf/uploaded/${userId}`,
				{
					headers: {
						'Authorization': `Bearer ${userToken}`
					}
				})
			setResumeUser(response.data)
		} catch (error) {
			console.error(error)
		}

	}
	const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files![0]

		if (selectedFile) {
			const formData = new FormData()
			formData.append('file', selectedFile)

			try {
				await axios.post(`http://45.141.79.27:8084/pdf/uploadedPdf/${userId}`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						'Authorization': `Bearer ${userToken}`
					}
				})
				hasResume()
				console.log('успешно выполнено')
			} catch (error) {
				console.error(error)
			}
		}
	}

	const deleteUploadUserResume = async () => {
		try {
			await axios.delete(`http://45.141.79.27:8084/pdf/uploaded/${userId}`,
				{
					headers: {
						'Authorization': `Bearer ${userToken}`
					}
				})
			setResumeUser('')
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		hasResume()
	}, [])

	return (
		<Container backgroundColor={theme.colors.grey_Light}>
			<Block width='100%'
						 display='flex'
						 flexDirection='column'
						 border='none'
						 boxSizing='border-box'
						 padding='0px 40px 0px 40px'
						 marginBottom='46px'>

				<Header />

				<Block border='none' width='100%' display='block' textAlign='left'>
					<TitleH2
						text='Резюме'
						fontFamily='Unbounded'
						fontWeight='400'
						fontSize='36px' />
					<Span text='Сюда вы можете загрузить своё резюме и/или воспользоваться нашей формой для для создания CV.'
								fontFamily='Nunito'
								fontSize='18px'
								fontWeight='400'
								marginTop='24px' />

					<Button display='flex'
									justifyContent='center'
									alignItems='center'
									border='2px solid #7400FF'
									borderRadius='50px'
									padding='20px 40px 20px 40px'
									marginTop='24px'
									marginBottom='5px'
					>
						<Image src={ImgDownload} />
						<Input id='fileAdd' cursor='pointer' marginRight='-250px' type='file' onChange={handleResumeUpload}
									 opacity='0' />
						<Label htmlFor='fileAdd' fontFamily='Nunito' fontSize='18px'
									 text='Загрузить своё резюме' />
					</Button>

					<Span fontFamily='Nunito' fontSize='16px'
								text='Формат для загрузки pdf. Размер файла не должен привышать 10 Мб.'
								color={theme.colors.grey} />
					<Block marginTop='48px'>
						<Span fontFamily='Nunito' fontSize='18px'
									text='Чтобы создать резюме, которое можно будет отправлять напрямую рекрутерам и HR, заполните все поля. Вы в любое время сможете внести изменения :)'
						/>
					</Block>
				</Block>
				{resumeUser && <UploadedResume deleteUploadUserResume={deleteUploadUserResume} />}

				<Contacts handleInputChange={handleInputChange} inputsData={inputsData} />
				<Sammery handleInputChange={handleInputChange} inputsData={inputsData} />
				<Skills handleInputChange={handleInputChange} inputsData={inputsData} />
				<Expirience />
				<Education />

				<Button display='flex'
								justifyContent='center'
								alignItems='center'
								border='none'
								borderRadius='50px'
								padding='20px 40px 20px 40px'
								margin='0 auto'
								backgroundColor={theme.colors.disable_grey}
								width='400px'>
					<Span marginLeft='5px' fontFamily='Nunito' fontSize='18px'
								text='Сохранить' color={theme.colors.grey} />
				</Button>

			</Block>

		</Container>
	)
}