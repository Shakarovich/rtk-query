import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser} from '../../models/IUser'
import {fetchUsers} from "./ActionCreators";
interface UserState {
    users: IUser[];
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers: {},
        extraReducers: {
             [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
                 state.users = action.payload;
                 state.isLoading = false;
                 state.error = '';
             },
            [fetchUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = true;
            },
            [fetchUsers.rejected.type]: (state, action:PayloadAction<string>) => {
                state.error = action.payload;
                state.isLoading = false;
            },
        }
})

export default UserSlice.reducer;