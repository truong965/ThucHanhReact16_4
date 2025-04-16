import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBackgroundColor } from './themeSlice';

const ToggleApp = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.theme.backgroundColor);
  const handleToggleColor = () => {
    dispatch(toggleBackgroundColor());  // Dispatch action to toggle background color
  };
  // Memoize the style object to prevent unnecessary re-renders
  const backgroundStyle = useMemo(() => ({
    backgroundColor: backgroundColor, // Apply the background color from Redux state
    minHeight: '100vh',
    transition: 'background-color 0.3s', // Smooth transition for background color change
  }), [backgroundColor]); // Only re-compute when backgroundColor changes
  return (
    <div style={backgroundStyle} className="flex justify-center items-center">
      <button
        onClick={handleToggleColor}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Background Color
      </button>
    </div>
  );
};
export default ToggleApp;
