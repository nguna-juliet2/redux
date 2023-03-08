import {createSlice} from '@reduxjs/toolkit';

const cartInitalState ={cartIsVisble:false}
 const UiSlice = createSlice({
    name:'Ui',
    initialState:cartInitalState,
    reducers:{
        toggle(state){
            state.cartIsVisble=!state.cartIsVisble
        }
    }
})

export const UiActions = UiSlice.actions
export default UiSlice;