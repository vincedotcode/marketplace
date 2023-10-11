import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Buffer } from 'buffer';

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
    const response = await fetch(`${apiUrl}auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.token) {
        const decodedToken = decodeToken(data.token);

        if (!decodedToken) {
            throw new Error("Failed to decode the token.");
        }

        data.user = decodedToken;
    }

    return data;
});

const decodeToken = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
    } catch (error) {
        console.error("Failed to decode the token.", error);
        return null;
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
