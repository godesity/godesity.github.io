import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        value: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(fetchCustomers.rejected, (state, action) => {
            state.loading = false;
            state.value = [];
            console.log(action.error.message);
        });
    }
})


export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', () => {
    return fetch("https://blog.godesity.se/wp-json/wp/v2/posts?categories=3")
        .then(request => request.json())
});
// Action creators are generated for each case reducer function
export const { setCustomers } = customerSlice.actions
export default customerSlice.reducer
