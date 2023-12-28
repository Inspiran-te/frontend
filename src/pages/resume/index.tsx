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
import { ICompany, IInputsData, IInstitution } from './types'
import { useDeleteResumeMutation } from '../../api/userResume'
import { UploadedResumeCV } from './components/UploadedResumeCV'
import { saveAs } from 'file-saver';

export const Resume = () => {
	const [resumeUser, setResumeUser] = useState<Uint8Array>()
	const [isFormFull, setIsFormFull] = useState(false);
	const [file, setFile] = useState()
	const [dataExpiriense, setDataExpiriense] = useState<ICompany[]>([ // костыль помогает работе кода, пока не придумал как избавиться.
		{
			companyName: "",
			companyPosition: "",
			companyStartDate: "",
			companyEndDate: "",
			companyDescription: ""
		},
		{
			companyName: "",
			companyPosition: "",
			companyStartDate: "",
			companyEndDate: "",
			companyDescription: ""
		},
	])

	const [inputsData, setInputsData] = useState<IInputsData>({ // итоговое состояние данных которое отправляем на сервер
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
			institutions: []
		},
		experience: {
			companies: []
		}
	})

	const userId = useSelector((state: RootState) => state.auth.auth.id)
	const userToken = useSelector((state: RootState) => state.auth.auth.access)
	const [deleteResume] = useDeleteResumeMutation();

	// фунция собирает данные из input компаний
	const handleInputChangeCompany = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof ICompany) => {
		setInputsData(prevState => {
			const newCompanies = [...prevState.experience.companies];
			newCompanies[index] = {
				...newCompanies[index],
				[field]: event.target.value
			};
			return {
				...prevState,
				experience: {
					...prevState.experience,
					companies: newCompanies
				}
			};
		});
	};

	//функция собирает данные из input институтов 
	const handleInputChangeInstitutions = (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof IInstitution) => {
		setInputsData(prevState => {
			const newInstitution = [...prevState.education.institutions];
			newInstitution[index] = {
				...newInstitution[index],
				[field]: event.target.value
			};
			return {
				...prevState,
				education: {
					...prevState.education,
					institutions: newInstitution
				}
			};
		});
	};


	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // функция добавляет данные из инпутов кроме компаний и институтов
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

			setInputsData((prevState) => ({
				...prevState,
				skill: {
					...prevState.skill,
					skills: [value],
				},
			}));
		} 
	};

	console.log('inputsData', inputsData);

	const hasResume = async () => { // проверяет наличие загруженного пользователем резюме
		try {
			const response = await axios.get(`http://45.141.79.27:8084/pdf/uploaded/${userId}`, {
				headers: {
					'Authorization': `Bearer ${userToken}`
				}
			});
			setResumeUser(response.data);

		} catch (error) {
			console.error(error);
		}
	};

	const hasResumeCV = async () => { // проверяет наличие сохраненного пользователем резюме собранного по данным из инпутов
		try {
			const response = await axios.get(`http://45.141.79.27:8084/resume/${userId}`, {
				headers: {
					'Authorization': `Bearer ${userToken}`
				}
			});
			setFile(response.data);

		} catch (error) {
			console.error(error);
		}
	};

	//фунция загрузки резюме пользователя
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
	const downloadResumeUser = async () => {
		try {
		  const response = await axios.get(`http://45.141.79.27:8084/pdf/uploadedPdf/${userId}`, {
			headers: {
			  'Authorization': `Bearer ${userToken}`,
			}
		  });
		  const blob = new Blob([response.data], { type: 'application/pdf' });
		  saveAs(blob, 'file.pdf');
		
		} catch (error) {
		  console.error(error);
		}
	  }

	const deleteUploadUserResume = async () => { // удаление загруженного пользователем резюме
		try {
			await deleteResume({ userId, userToken });
			setResumeUser(undefined)
		} catch (error) {
			console.error(error)
		}
	}

	const saveRezumeCV = async () => { // сохранение резюме по введенным данным
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

	// const downloadResumeUser = async () => { // функция для скачивания своего загруженного резюме в формате PDF
	// 	try {
	// 		const { data } = await axios.get(`http://45.141.79.27:8084/pdf/uploadedPdf/${userId}`, {
	// 			headers: {
	// 				'Authorization': `Bearer ${userToken}`,
	// 			}
	// 		});
			
	// 		console.log(data);

	// 		const url = URL.createObjectURL(new Blob([data]));

	// 		const link = document.createElement('a');
	// 		link.href = url;
	// 		link.download = 'resume.pdf';
	// 		link.click();

	// 		URL.revokeObjectURL(url);

	// 		console.log('Successfully downloaded resume');
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const downloadResumeUserCV = async () => { // функция для скачивания своего загруженного резюме в формате PDF
		try {
			const { data } = await axios.get(`http://45.141.79.27:8084/pdf/generated/17`, {
				headers: {
					'Authorization': `Bearer ${userToken}`,
				}
			});
			
			const url = URL.createObjectURL(new Blob(data));

			const link = document.createElement('a');
			link.href = url;
			link.download = 'resumeCV.pdf';
			link.click();

			URL.revokeObjectURL(url);

			console.log('Successfully downloaded resume');
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => { // этот эффект проверяет наличие резюме
		hasResume()
		hasResumeCV()
	}, [])

	useEffect(() => { // костыль помогает работе кода, пока не придумал как избавиться.
		setInputsData((prevInputsData) => ({
			...prevInputsData,
			experience: {
				companies: [...dataExpiriense],
			},
		}));
	}, [dataExpiriense]);

	useEffect(() => { //Этот эффект делает кнопку активной при заполнении инпутов
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
				{resumeUser && <UploadedResume
					deleteUploadUserResume={deleteUploadUserResume}
					downloadResumeUser={downloadResumeUser}
				/>}
				{file && <UploadedResumeCV
					deleteUploadUserResume={deleteUploadUserResume}
					downloadResumeUserCV={downloadResumeUserCV}
				/>}

				<Contacts handleInputChange={handleInputChange} inputsData={inputsData} />
				<Sammery handleInputChange={handleInputChange} inputsData={inputsData} />
				<Skills handleInputChange={handleInputChange} inputsData={inputsData} />
				<Expirience
					handleInputChange={handleInputChange}
					inputsData={inputsData}
					handleInputChangeCompany={handleInputChangeCompany}
					setInputsData={setInputsData} />
				<Education
					handleInputChange={handleInputChange}
					inputsData={inputsData}
					handleInputChangeInstitutions={handleInputChangeInstitutions}
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