import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (_, { rejectWithValue }) => {
  try
    {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token is missing from localStorage');
      }
      const response = await axios.get('http://localhost:3001/api/v1/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      });
      return response?.data?.body; 
    } catch (error) {
      console.error('Error during API call:', error);
      return rejectWithValue({
        message: error.response?.data?.message || 'Une erreur est survenue.',
        code: error.response?.status || 500,
      });
    }
  }
);

export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async (newUserData,  { rejectWithValue }) => {
  try 
    {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        newUserData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      ); 
      return response?.data?.body;  
    } catch (error) {
      console.error('Error during API update call:', error);
      return rejectWithValue(
        error.response?.data?.message || 'Erreur lors de la mise à jour'
      );
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    firstName: '',
    lastName: '',
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUserProfile.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    })
    .addCase(fetchUserProfile.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
    .addCase(updateUserProfile.fulfilled, (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    })
    .addCase(updateUserProfile.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
