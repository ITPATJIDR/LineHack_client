import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	userInfo: {}
} 


export const userInfoSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		setUserInfo(state,action) {
			state.userInfo  = action.payload
		}
	}
})

export const { setUserInfo } = userInfoSlice.actions

export const selectUserInfo = (state) => state.userInfo.userInfo


export default userInfoSlice.reducer