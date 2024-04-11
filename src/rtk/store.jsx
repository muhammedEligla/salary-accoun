import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './DateSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';



  
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  
const persistedReducer = persistReducer(persistConfig, todosReducer)



export const store = configureStore({
    reducer:{todos :persistedReducer} ,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  
export let persistor = persistStore(store)