import { createReducer } from "@reduxjs/toolkit"


const initialState={
   user:null,
   isLoading:false,
   token:null,
   error:null,
}



export const authReducer = createReducer(initialState ,{

requestAuth:(state)=>{
    state.isLoading=true
    state.error=false
},
successAuth:(state,action)=>{
    state.user=action.payload;
   
    state.isLoading=false
}
   

})

