import { createSlice } from "@reduxjs/toolkit"
export const userPlanSlice = createSlice({
    name: 'userPlan',
    initialState: {
        plan: null
    },
    reducers: {
        setPlan: (state, action) => {
            state.plan = action.payload
        }
    }
})

export const { setPlan } = userPlanSlice.actions
export default userPlanSlice.reducer