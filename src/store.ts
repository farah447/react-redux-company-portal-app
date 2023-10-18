import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Components/CompaniesSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        companiesR: companiesReducer,
    },
});
