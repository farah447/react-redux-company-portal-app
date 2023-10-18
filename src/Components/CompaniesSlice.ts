import { createAsyncThunk, createSlice, AsyncThunk } from '@reduxjs/toolkit';

interface Company {
    id: number;
}

const initialState = {
    data: [] as Company[],
    isLoading: false,
    error: null,
};

export const fetchData: AsyncThunk<Company[], void, {}> = createAsyncThunk('companies/fetchData', async () => {
    try {
        const response = await fetch('https://api.github.com/organizations');
        const data = await response.json();
        return data as Company[];
    } catch (error) {
        throw error;
    }
});

const companiesReducer = createSlice({
    name: 'companies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
            });
    },
});

export default companiesReducer.reducer;
