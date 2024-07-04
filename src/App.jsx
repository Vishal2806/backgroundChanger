import React, { useState } from 'react';
import Button from './components/button';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('');

  const handleChangeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`min-h-screen ${bgColor}`}>
      <h1 className="text-center">This is the background color changer app</h1>
      <div className="flex flex-wrap justify-center">
        <Button color='bg-red-500' txtCol='text-white' clrName='Red Button' onClick={() => handleChangeColor('bg-red-500')} />
        <Button color='bg-blue-500' txtCol='text-white' clrName='Blue Button' onClick={() => handleChangeColor('bg-blue-500')} />
        <Button color='bg-green-500' txtCol='text-white' clrName='Green Button' onClick={() => handleChangeColor('bg-green-500')} />
        <Button color='bg-yellow-500' txtCol='text-white' clrName='Yellow Button' onClick={() => handleChangeColor('bg-yellow-500')} />
        <Button color='bg-pink-500' txtCol='text-white' clrName='Pink Button' onClick={() => handleChangeColor('bg-pink-500')} />
        <Button color='bg-gray-500' txtCol='text-white' clrName='Gray Button' onClick={() => handleChangeColor('bg-gray-500')} />
        <Button color='bg-black' txtCol='text-white' clrName='Black Button' onClick={() => handleChangeColor('bg-black')} />
      </div>
    </div>
  );
}

export default App;
