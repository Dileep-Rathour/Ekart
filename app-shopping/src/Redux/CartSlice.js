import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : "cart",
    initialState:{
        value : []
    },
    reducers : {
        addItem : (state,action)=>{

            var product = action.payload
            var status = state.value.some(p=>p.id==product.id)
            if(status)
            {
                state.value= state.value.map(p=>p.id==product.id?{...p,qty:p.qty+1}:p)
            }else{
            var ob = {...product,qty:1}
            state.value = [...state.value,ob]
            }
        },
        removeItem : (state,action)=>{
            const id = action.payload;
            state.value=state.value.filter(p=>p.id!=id)
        },
        incrementQty : (state,action)=>{
            const id = action.payload;
            state.value = state.value.map(p=>p.id==id?{...p,qty:p.
            qty+1}:p)
        },
        decrementQty : (state,action)=>{
            const id = action.payload;
            state.value = state.value.map(p=>p.id==id?{...p,qty:p.
            qty-1}:p)
        },

    }
})
export const {addItem,removeItem,incrementQty,decrementQty} = slice.actions;
export default slice.reducer;