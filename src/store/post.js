import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        value: null,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.value = null;
            console.log(action.error.message);
        });
    }
})


export const fetchPost = createAsyncThunk('post/fetchPost', (id) => {
    return fetch("https://blog.godesity.se/wp-json/wp/v2/posts/" + id)
        .then(request => request.json())
});
// Action creators are generated for each case reducer function
export const { setpost } = postSlice.actions
export default postSlice.reducer
