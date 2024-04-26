import React, { useEffect, useState } from 'react';
import ColorPicker from './app/components/ColorPicker';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    console.log(selectedColor)
  }, [selectedColor])

  const fnSelectedColor = (color: string) => {
    setSelectedColor(color)
  }

  return (
    <div style={{ backgroundColor: selectedColor }} className="min-h-screen flex items-center justify-center">
      <ToastContainer />
      <ColorPicker fnSelectedColor={fnSelectedColor} />
    </div>
  );
};

export default App;
