import React,{useReducer} from "react";
const initState={count:0};
const reducer = (state,action )=>{
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
const CounterReducer = () => {
    // Use useReducer to handle state
    const [state, dispatch] = useReducer(reducer, initState);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">React Counter App</h1>
          <p className="text-xl mb-6">Count: {state.count}</p>
          
          <div className="space-x-4">
            <button
              onClick={() => dispatch({ type: 'INCREMENT' })}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch({ type: 'DECREMENT' })}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CounterReducer;