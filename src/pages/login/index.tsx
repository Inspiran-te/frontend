import React from 'react'
import { LoginWrapperLeft } from '../../components/Login'
import { WrapperRight } from '../../components/commons/Wrapper/Right'
import { Wrapper } from '../../components/ui/Wrapper/Main'
import { Container } from '../../components/ui/Container'
import { theme } from '../../theme/theme'

export const Login = () => {

	return (
		<Container>
			<Wrapper backgroundColor={theme.colors.blue_light} width='98%'>
				<LoginWrapperLeft />
				<WrapperRight />
			</Wrapper>
		</Container>
	)
}