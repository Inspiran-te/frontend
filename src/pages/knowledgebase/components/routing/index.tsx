import React from 'react'
import { Block } from "../../../../components/ui/Block"
import Image from '../../../../components/ui/Img'
import { Routes, Route } from 'react-router-dom';
import { theme } from '../../../../theme/theme'
import Link from '../../../../components/ui/Route/RouteKnowledge'
import { ResumeRoute } from '../resume';
import { Interviews } from '../interviews';
import { LinkedInComponent } from '../linkedIN';
import { JobSources } from '../job sources';
import { Portfolio } from '../portfolio';
import verticalLine from '../../../../assets/verticalLine.svg'
import resumeIcon from '../../../../assets/resumeIcon.svg'
import sobesIcon from '../../../../assets/sobesIcon.svg'
import LinkedIcon from '../../../../assets/linknIcon.svg'
import sourceIcon from '../../../../assets/sourcesIcon.svg'
import portfIcon from '../../../../assets/PortfIcon.svg'

export const Routing = () => {

    return (
        <Block backgroundColor={theme.colors.white}
            borderRadius='24px 24px 24px 24px'
            marginTop='37px' height='700px'>
            <Block
                display='flex'
                alignItems='center'
                fontSize='18px'
                fontFamily='Unbounded'
                justifyContent='space-around'
                padding='20px 16px 20px 16px'
                borderBottom='1px solid #CBCDD7'
            >
                <>
                    <Link to='resume-route' textDecoration='none'
                        display='flex'
                        padding='12px 40px 12px 40px'
                        fontSize='14px'
                        fontFamily='Unbounded'
                        borderRadius='40px'
                        alignItems='center'>
                        <Image src={resumeIcon} marginRight='5px' />
                        Резюме
                    </Link>
                </>

                <Image src={verticalLine} marginLeft='10px' marginRight='10px' />

                <>
                    <Link to='interviews' textDecoration='none'
                        display='flex'
                        padding='12px 40px 12px 40px'
                        fontSize='14px'
                        fontFamily='Unbounded'
                        borderRadius='40px'
                        alignItems='center'
                    >
                        <Image src={sobesIcon} marginRight='5px' />
                        Собеседования
                    </Link>
                </>

                <Image src={verticalLine} marginLeft='10px' marginRight='10px' />

                <>
                    <Link to='linkedIn' textDecoration='none'
                        display='flex'
                        padding='12px 60px 12px 60px'
                        fontSize='14px'
                        fontFamily='Unbounded'
                        borderRadius='40px'
                        alignItems='center'>
                        <Image src={LinkedIcon} marginRight='5px' />
                        LinkedIn
                    </Link>
                </>

                <Image src={verticalLine} marginLeft='10px' marginRight='10px' />

                <>
                    <Link to='job-sources' textDecoration='none'
                        display='flex'
                        padding='12px 20px 12px 20px'
                        fontSize='14px'
                        fontFamily='Unbounded'
                        borderRadius='40px'
                        alignItems='center'

                    >
                        <Image src={sourceIcon} marginRight='5px' />
                        Источники вакансий
                    </Link>
                </>

                <Image src={verticalLine} marginLeft='10px' marginRight='10px' />

                <>
                    <Link to='portfolio' marginRight='24px' textDecoration='none'
                        display='flex'
                        padding='12px 40px 12px 40px'
                        fontSize='14px'
                        fontFamily='Unbounded'
                        borderRadius='40px'
                        alignItems='center'>
                        <Image src={portfIcon} marginRight='5px' />
                        Портфолио
                    </Link>
                </>

            </Block>
            <Routes >
                <Route path="resume-route" element={<ResumeRoute />} />
                <Route path="interviews" element={<Interviews />} />
                <Route path="linkedIn" element={<LinkedInComponent />} />
                <Route path="job-sources" element={<JobSources />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
        </Block>
    )
}