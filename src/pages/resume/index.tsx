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

export const Resume = () => {
    
    return (
        <Container backgroundColor={theme.colors.grey_Light}>
            <Block width='100%'
                display='flex'
                flexDirection='column'
                border='none'
                boxSizing='border-box'
                padding='0px 40px 0px 40px'>

                <Header />

                <Block border='none' width='100%' display='block' textAlign='left' >
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
                        marginBottom='5px'>
                        <Image src={ImgDownload} alt="" />
                        <Span fontFamily='Nunito' fontSize='18px'
                            text='Загрузить своё резюме' />
                    </Button>

                    <Span fontFamily='Nunito' fontSize='16px'
                        text='Формат для загрузки pdf. Размер файла не должен привышать __ Мб.'
                        color={theme.colors.grey} />
                    <Block marginTop='48px'>
                        <Span fontFamily='Nunito' fontSize='18px'
                            text='Чтобы создать резюме, которое можно будет отправлять напрямую рекрутерам и HR, заполните все поля. Вы в любое время сможете внести изменения :)'
                        />
                    </Block>
                </Block>

                <Contacts />
                <Sammery />
                <Skills />
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