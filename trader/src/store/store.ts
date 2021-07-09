import { configureStore } from '@reduxjs/toolkit';
import toolBarReducer from './appbarSlicer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    toolBar : toolBarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(mySaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

