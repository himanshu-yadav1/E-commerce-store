import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/userSlice'
import menuReducer from '../features/menuSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers(
  { 
    user: userReducer ,
    menu: menuReducer
  }
)

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  blacklist: ['menu']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export const persistor = persistStore(store)