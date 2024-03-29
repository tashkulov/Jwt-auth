import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authReducer'
import { useDispatch } from 'react-redux'

import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    //@ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...(process.env.NODE_ENV !== 'production' ? [logger] : [])),
})


export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch