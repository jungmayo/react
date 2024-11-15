import { createSlice } from "@reduxjs/toolkit";

// 초기 상태
const initState = {
 count : 0,
};

// Slice 생성
const countSlice = createSlice({
    name : "countSlice",
    initialState : initState,
    reducers: {
        increase : (state) => {
            state.count += 1;
        },
        decrease : (state) => {
            state.count -= 1;
        },
        reset : (state, action) => {
            state.count = action.payload;
        },
    }
});

//redux 액션 내보내기
export const { increase, decrease, reset} = countSlice.actions;

//redux reducer 내보내기
export default countSlice.reducer;