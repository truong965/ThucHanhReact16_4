import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

const CounterRedux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Redux Counter App</h1>
        <p className="text-xl mb-6">Count: {count}</p>
        
        <div className="space-x-4">
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default CounterRedux;