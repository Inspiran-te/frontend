import { Container } from '../../components/ui/Container'
import { theme } from '../../theme/theme'
import { Block } from '../../components/ui/Block'
import { Header } from '../../components/Header'
import { Analytics } from './components/Analytics'
import { Advice } from './components/Advice'
import { MainLinks } from './components/Main links'
import { UploadResumeComp } from './components/UploadResume'

export const Main = () => {

    return (
        <Container backgroundColor={theme.colors.grey_Light}>

            <Block width='100%'
                display='flex'
                flexDirection='column'
                border='none'
                boxSizing='border-box'
                padding='0px 40px 0px 40px'>

                <Header />

                <Block display='flex'>
                    <Block>
                        <UploadResumeComp />
                        <MainLinks />
                    </Block>

                    <Block display='flex' flexDirection='column'>
                        <Advice />
                        <Analytics />
                    </Block>
                </Block>
            </Block>

        </Container>
    )
}