import React from 'react'
import { store } from './redux/store'
import { theme } from './theme/theme'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

function App() {
	return (
		<>
			<div>
				<ReduxProvider store={store}>
					<ThemeProvider theme={theme}>
						<div />
					</ThemeProvider>
				</ReduxProvider>
			</div>
		</>
	)
}

export default App
