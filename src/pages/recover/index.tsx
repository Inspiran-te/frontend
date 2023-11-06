import React from 'react'
import { Container } from '../../components/ui/Container'
import { Wrapper } from '../../components/ui/Wrapper/Main'
import { WrapperRight } from '../../components/commons/Wrapper/Right'
import { RecoverPasswordWrapperLeft } from '../../components/Recover'
import { theme } from '../../theme/theme'

export const RecoverPassword = () => {

	return (
		<Container>
			<Wrapper backgroundColor={theme.colors.blue_light} width='98%'>
				<RecoverPasswordWrapperLeft/>
				<WrapperRight/>
			</Wrapper>
		</Container>
	)
}