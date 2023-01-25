import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        value: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjects.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(fetchProjects.rejected, (state, action) => {
            state.loading = false;
            state.value = [];
            console.log(action.error.message);
        });
    }
})


export const fetchProjects = createAsyncThunk('projects/fetchProjects', () => {
    return fetch("https://blog.godesity.se/wp-json/wp/v2/posts?categories=5")
        .then(request => request.json())
});
// Action creators are generated for each case reducer function
export const { setprojects } = projectSlice.actions
export default projectSlice.reducer
