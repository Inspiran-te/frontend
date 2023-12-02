import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '../api/auth'
import { resumeApi } from '../api/userResume'
import authReducer from '../features/authSlice'

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[resumeApi.reducerPath]: resumeApi.reducer,
	auth: authReducer
})

const persistConfig = {
	key: 'tokens',
	whitelist: ['auth'],
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
			.concat(authApi.middleware)
			.concat(resumeApi.middleware)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch