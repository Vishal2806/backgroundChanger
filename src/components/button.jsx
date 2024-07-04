import React from 'react';

const Button = ({ color, txtCol, clrName, onClick }) => {
  return (
    <div className="flex items-center m-2">
      <button onClick={onClick} className={`${txtCol} p-2 rounded`}>{clrName}</button>
    </div>
  );
}

export default Button;
