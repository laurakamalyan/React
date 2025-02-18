import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {$axios} from "../plugins/axios"

export const getMovies = createAsyncThunk("/", async(page = 1) => {
    const response = await $axios.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    return [response.data.results, response.data.total_pages];
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        loading: false,
        error: null,
        currentPage: 1,
        totalPages: 0,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload[0];
                state.totalPage = action.payload[1];
                state.currentPage = action.payload.page;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default moviesSlice.reducer;