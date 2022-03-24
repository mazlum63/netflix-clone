import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    signin: (state, action) => {
      const registeredUsers = action.payload[0];
      const sendetUser = action.payload[1]
      if (sendetUser.email === '' || sendetUser.pass === '') {
        alert('inputs can not be empty')
      } else if (registeredUsers.length === 0) {
        alert('there is no users registered!')
      } else {
        registeredUsers.map(item => {
          if (item.email !== sendetUser.email) {
            alert('this user not registered!')
          } else if (item.pass !== sendetUser.pass) {
            alert('password is not correnct!')
          } else {
            state.user = sendetUser
          }
        })
      }
    },
    signout: (state) => {
      state.user = null
    }
  },
});

export const { signin, signout } = userSlice.actions;

export default userSlice.reducer;
