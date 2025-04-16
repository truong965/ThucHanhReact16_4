// src/App.js
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo,toogleTodo,removeTodo } from './TodoSlicer';
const TodoAppReduxToolkit = () => {
  // State to manage the tasks
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
    const completedTasks= useMemo(()=>{
        return tasks.filter((task)=> task.completed===true)
    },[tasks])
    const incompletedTasks= useMemo(()=>{
        return tasks.filter((task)=> task.completed !==true)
    },[tasks])
  const handleAddTask = () => {
    if (taskInput.trim()) {
      dispatch(addTodo(taskInput)); 
      setTaskInput('');  // Clear the input field
    }
  };
  // Handle toggling a task's completion status
  const handleToggleTask = (id) => {
    dispatch(toogleTodo(id));  // Dispatch the toggleTodo action with the task ID
  };
  // Handle removing a task
  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));  // Dispatch the removeTodo action with the task ID
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter a task"
        />
        <button
          onClick={handleAddTask}
          className="w-full py-2 bg-blue-500 text-white rounded mb-4 hover:bg-blue-600"
        >
          Add Task
        </button>

        {/* Incomplete Tasks */}
        <h2 className="text-xl font-semibold mb-2">Incomplete Tasks</h2>
        <ul className="list-none p-0 mb-6">
          {incompletedTasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center mb-2">
              <span
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
                onClick={() => handleToggleTask(task.id)}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Completed Tasks */}
        <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
        <ul className="list-none p-0">
          {completedTasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center mb-2">
              <span
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
                onClick={() => handleToggleTask(task.id)}
              >
                {task.text}
              </span>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

};

export default TodoAppReduxToolkit;
