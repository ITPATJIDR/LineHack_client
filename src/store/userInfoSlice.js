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

export const checkNewUser = async (profile) => {
	const payload = {
		userId: profile.userId,
		userImage: profile.pictureUrl,
		userName: profile.displayName
	}

	await axios.post("https://rich-ruby-pelican-sari.cyclic.app/user/register", payload, {
		withCredentials: true,
		headers: {
			"Access-Control-Allow-Origin": "https://rich-ruby-pelican-sari.cyclic.app",
		}
	}).then((res) => {
		dispatch(setUserInfo({
			data: res.data,
		}))
	})
}

export default userInfoSlice.reducer