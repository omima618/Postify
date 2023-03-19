import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { postsDB } from '../axios/axios';

const initialState = {
    posts: [],
    currentPost: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

const getAllPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
    try {
        const { data } = await postsDB().get();
        console.log(data);
        return data;
    } catch (error) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message);
    }
});

const getPostDetails = createAsyncThunk('posts/getPostDetails', async (id, thunkAPI) => {
    try {
        const { data } = await postsDB().get(`/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        const message = error.message;
        return thunkAPI.rejectWithValue(message);
    }
});

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        resetPosts: (state) => {
            state.isLoading = false;
            state.posts = [];
        },
        resetCurrentPost: (state) => {
            state.isLoading = false;
            state.currentPost = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getPostDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPostDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.currentPost = action.payload;
            })
            .addCase(getPostDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const postsRequests = {
    getAllPosts,
    getPostDetails,
};
export const postActions = postSlice.actions;

export default postSlice.reducer;
