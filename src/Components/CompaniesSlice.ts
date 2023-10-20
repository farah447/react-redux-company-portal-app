import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { companiesState } from '../types';

export const fetchData = createAsyncThunk('companies/fetchData', async () => {
    const response = await fetch('https://api.github.com/organizations');
    if (!response.ok) {
        throw new Error('Network error');
    }
    const data = await response.json();
    return data;
});

export const fetchCompany = createAsyncThunk('companies/fetchCompany', async (id: number) => {
    const response = await fetch('https://api.github.com/orgs/${id}');
    if (!response.ok) {
        throw new Error('Network error');
    }
    const data = await response.json();
    return data;
});


const initialState: companiesState = {
    companies: [],
    isLoading: false,
    error: null,
    searchTerm: 0,
    SingleCompany: null,
};

const companiesReducer = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        searchCompany: (state, action)=>{
            state.searchTerm = action.payload;
        },
        sortCompanies: (state, action)=>{
            const sortCriteria = action.payload;
            if(sortCriteria ==='login'){
                state.companies.sort((a,b) => a.login.localeCompare(b.login))
            }
            else if(sortCriteria ==='id'){
                state.companies.sort((a,b) => a.id - b.id )

            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.companies = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'An error occurred';
            })
            .addCase(fetchCompany.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCompany.fulfilled, (state, action) => {
                state.isLoading = false;
                state.SingleCompany = action.payload;
            })
            .addCase(fetchCompany.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'An error occurred';
            });
    },
});

export const{searchCompany, sortCompanies}= companiesReducer.actions;
export default companiesReducer.reducer;
