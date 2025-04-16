import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    tasks: [],  // An empty array to store tasks
  };
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const newTask = {
                id: new Date().getTime(),  // Generate a unique ID based on time
                text: action.payload,      // The text of the todo
                completed: false,          // By default, tasks are not completed
              };
            state.tasks.push(newTask)
        },
        toogleTodo:(state,action)=>{
            const taskId = action.payload;  // taskId will be passed as payload
            const task = state.tasks.find((task) => task.id === taskId);
            if (task) {
              task.completed = !task.completed;  // Toggle the completed status
            }
        },
        removeTodo:(state,action)=>{
            const taskId = action.payload;  // taskId will be passed as payload
            state.tasks = state.tasks.filter((task) => task.id !== taskId);  // Remove the task with the given ID
        }
    }
})
export const {addTodo,toogleTodo,removeTodo} = taskSlice.actions;
export default taskSlice.reducer;