import React from 'react'
// import {  Container, Wrapper } from './styles'
import { WrapperLeftComponent } from '../../components/LoginComponents/WrapperLeft'
import { WrapperRightComponent } from '../../components/LoginComponents/WrapperRight'
import * as SC from './styles'

export const Login = () => {

	return (
		<SC.Container>
			<SC.Wrapper>
                <WrapperLeftComponent/>
                <WrapperRightComponent/>
			</SC.Wrapper>
		</SC.Container>
	)
}