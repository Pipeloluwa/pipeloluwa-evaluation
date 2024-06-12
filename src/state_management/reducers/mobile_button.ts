import { createSlice } from "@reduxjs/toolkit";

interface mobileSwitchValue{
    value: boolean;
}

const initialValue: mobileSwitchValue= {
    value: false
}

const mobileButton= createSlice({
    name: "mobile-menu",
    initialState: initialValue,
    reducers: {
        mobileEnable: (state) => {
            state.value= true;
        },

        mobileDisable: (state) =>{
            state.value= false;
        }
    }
});

export const{mobileEnable, mobileDisable}= mobileButton.actions;
export default mobileButton.reducer;
