import {createSlice, nanoid } from '@reduxjs/toolkit';
const initialState= {
    todos:[]
        
}

export const todoslice= createSlice({
    name:'todo',
    initialState,
    reducers: {
        addtodo : (state,action)=>{
           const todo = {
            id: nanoid(),
            todomsg: action.payload
           }
           state.todos.push(todo)
        },
        removetodo : (state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!==action.payload))
        }
    }
}
)
export const {addtodo,removetodo}= todoslice.actions

export default todoslice.reducer