import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Components/CompaniesSlice';

export type companiesDispatch = typeof store.dispatch;

export const store = configureStore({
    reducer: {
        companiesR: companiesReducer,
    },
});
