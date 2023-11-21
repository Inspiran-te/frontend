import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '../api/auth'
import authReducer from '../features/authSlice'

const rootReducer = combineReducers({
	[authApi.reducerPath]: authApi.reducer,
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
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch