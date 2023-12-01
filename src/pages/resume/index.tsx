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
import { IInputsData, IInstitution } from './types'

export const Resume = () => {
	const [resumeUser, setResumeUser] = useState('')
	const [isFormFull, setIsFormFull] = useState(false);
	const [inputsData, setInputsData] = useState<IInputsData>({
		contact: {
			name: "",
			surname: "",
			email: "",
			phone: "",
			linkedin: "",
			github: "",
			behance: "",
			site: "",
			country: ""
		},
		summary: {
			summary: ""
		},
		skill: {
			skills: [""]
		},
		education: {
			institutions: [
				{
					name: "",
					position: "",
					startDate: "",
					endDate: "",
					description: ""
				}
			]
		},
		experience: {
			companies: [
				{
					name: "",
					position: "",
					startDate: "",
					endDate: "",
					description: ""
				}
			]
		}

	})

	const userId = useSelector((state: RootState) => state.auth.auth.id)
	const userToken = useSelector((state: RootState) => state.auth.auth.access)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (name.startsWith("contact")) {
			const contactField = name.split(".")[1];

			setInputsData((prevState) => ({
				...prevState,
				contact: {
					...prevState.contact,
					[contactField]: value,
				},
			}));
		} else if (name.startsWith("summary")) {
			const summaryField = name.split(".")[1];

			setInputsData((prevState) => ({
				...prevState,
				summary: {
					...prevState.summary,
					[summaryField]: value,
				},
			}));
		} else if (name.startsWith("skill")) {
			// const skillField = name.split(".")[1];
		
			setInputsData((prevState) => ({
			  ...prevState,
			  skill: {
				...prevState.skill,
				skills: [value],
			  },
			}));
		} else if (name.startsWith("education")) {
			const educationField = name.split(".")[1];

			setInputsData((prevState) => ({
				...prevState,
				education: {
					...prevState.education,
					institutions: [
						{
							...prevState.education.institutions[0],
							[educationField]: value,
						},
					],
				},
			}));
		} else if (name.startsWith("experience")) {
			const experienceField = name.split(".")[1];

			setInputsData((prevState) => ({
				...prevState,
				experience: {
					...prevState.experience,
					companies: [
						{
							...prevState.experience.companies[0],
							[experienceField]: value,
						},
					],
				},
			}));
		}
	};
	console.log('inputsData', inputsData);


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

	const saveRezumeCV = async () => {
		try {
			await axios.post(`http://45.141.79.27:8084/resume/${userId}`, inputsData, {
				headers: {
					
					'Authorization': `Bearer ${userToken}`,
					'Content-Type': 'application/json'
				}
			})

			console.log('успешно выполнено сохранение резюме')
		} catch (error) {
			console.error(error)
		}
	}


	useEffect(() => {
		hasResume()
	}, [])

	useEffect(() => {
		const isContactValid = Object.values(inputsData.contact).every(value => value !== '');
		const isSummaryValid = inputsData.summary.summary !== '';
		const isSkillValid = inputsData.skill.skills.length > 0;
		const isEducationValid = inputsData.education.institutions.every(institution => {
			return Object.values(institution).every(value => value !== '');
		});
		const isExperienceValid = inputsData.experience.companies.every(company => {
			return Object.values(company).every(value => value !== '');
		});

		setIsFormFull(
			isContactValid &&
			isSummaryValid &&
			isSkillValid &&
			isEducationValid &&
			isExperienceValid
		);
	}, [inputsData]);

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
				<Expirience handleInputChange={handleInputChange} inputsData={inputsData} />
				<Education handleInputChange={handleInputChange} inputsData={inputsData}
				/>

				<Button display='flex'
					justifyContent='center'
					alignItems='center'
					border='none'
					borderRadius='50px'
					padding='20px 40px 20px 40px'
					margin='0 auto'
					backgroundColor={isFormFull ? theme.colors.Primary_Purple : theme.colors.disable_grey}
					width='400px'
					onClick={saveRezumeCV}
					disabled={!isFormFull}>
					<Span marginLeft='5px' fontFamily='Nunito' fontSize='18px'
						text='Сохранить' color={isFormFull ? theme.colors.white : theme.colors.grey} />
				</Button>

			</Block>

		</Container>
	)
}