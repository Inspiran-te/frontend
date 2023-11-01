import React from 'react'
import { Container } from '../../components/ui/Container'
import { Wrapper } from '../../components/ui/Wrapper/Main'
import { WrapperRight } from '../../components/commons/Wrapper/Right'
import { RegistrationWrapperLeft } from '../../components/Register'

export const Registration = () => {

	return (
		<Container>
			<Wrapper>
				<RegistrationWrapperLeft/>
				<WrapperRight/>
			</Wrapper>
		</Container>
	)
}