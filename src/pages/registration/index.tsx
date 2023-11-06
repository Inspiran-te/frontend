import React from 'react'
import { Container } from '../../components/ui/Container'
import { Wrapper } from '../../components/ui/Wrapper/Main'
import { WrapperRight } from '../../components/commons/Wrapper/Right'
import { RegistrationWrapperLeft } from '../../components/Register'
import { theme } from '../../theme/theme'

export const Registration = () => {

	return (
		<Container>
			<Wrapper backgroundColor={theme.colors.blue_light} width='98%'>
				<RegistrationWrapperLeft/>
				<WrapperRight/>
			</Wrapper>
		</Container>
	)
}