import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name: "cart",
    initialState : {
        value : []
    },
    reducers : {
        setProducts : (state,action)=>{
            state.value = action.payload
        }
    }

})
export const {setProducts} = slice.actions;
export default slice.reducer;
