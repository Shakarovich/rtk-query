import {AppDispatch} from'../store'
import {IUser} from '../../models/IUser';
import axios from 'axios'
import {UserSlice} from './UserSlice'
import App from "../../App";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers =  createAsyncThunk(
    "users/fetchAll",
    async(_, thunkAPI) => {
        try{
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        }catch(err){
            return thunkAPI.rejectWithValue("Cannot fetch users")
        }
    }
)