import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchText= createAsyncThunk('texts/getText',async (par)=>{
    const data= await par;
    const res=await axios(`https://baconipsum.com/api/?type=all-meat&paras=${data.number}&start-with-lorem=1&format=${data.type}`)
  
     return res.data
    
})

export const textSlice=createSlice({
    name:"text",
    initialState:{
        items:[],
        number:1,
        type:"text",
    },
    reducers:{

        getNumber:(state,action)=>{
            
           state.number=Number(action.payload)
          
        },
        getType:(state,action)=>{
            
            state.type=action.payload
           
         }
    },
    extraReducers:{
        [fetchText.fulfilled]:(state,action)=>{
           state.items=action.payload
           
           
        }
    }
}) 




export const{getNumber,getType}=textSlice.actions;
export default textSlice.reducer;