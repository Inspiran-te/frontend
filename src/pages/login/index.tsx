import React from 'react'
import { LoginWrapperLeft } from '../../components/Login'
import { WrapperRight } from '../../components/commons/Wrapper/Right'
import { Wrapper } from '../../components/ui/Wrapper/Main'
import { Container } from '../../components/ui/Container'

export const Login = () => {

	return (
		<Container>
			<Wrapper>
				<LoginWrapperLeft />
				<WrapperRight />
			</Wrapper>
		</Container>
	)
}