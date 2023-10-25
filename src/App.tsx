import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './modules/routes/AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux/store'
import { theme } from './theme/theme'

function App() {
	return (
		<div>
			<ReduxProvider store={store}>
				<ThemeProvider theme={theme}>
					<Router>
						<AppRoutes />
					</Router>
				</ThemeProvider>
			</ReduxProvider>
		</div>
	)
}

export default App
