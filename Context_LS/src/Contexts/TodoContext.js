import { createContext, useContext } from "react";

 export const TodoContext= createContext(()=>{
    todos : [
        {
            id: 1,
            todo: 'ToDo msg',
            Completed : false
        }
    ]
   addTodo: (Todo)=>{}
   removeTodo: (Todo)=>{}
   updateTodo: (id,Todo)=>{}
   ToggleCom : (id)=>{}

})

export const useTodo = ()=> {
    return useContext(TodoContext)
} 

export const TodoProvider= TodoContext.Provider