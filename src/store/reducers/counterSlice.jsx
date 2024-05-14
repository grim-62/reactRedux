import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

const counterSlicer = createSlice({
    name : "counter",
    initialState,
    reducers:{

        increment:(state,action)=>{
            state.value = action.payload
        },

        decrement:(state,action)=>{
            state.value = action.payload
        }

    }
})

export default counterSlicer.reducer

export const {increment,decrement} = counterSlicer.actions