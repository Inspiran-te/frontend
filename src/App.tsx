import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './modules/routes/AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { theme } from './theme/theme'

function App() {
	return (
		<div>
			<ReduxProvider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ThemeProvider theme={theme}>
						<Router>
							<AppRoutes />
						</Router>
					</ThemeProvider>
				</PersistGate>
			</ReduxProvider>
		</div>
	);
}

export default App
