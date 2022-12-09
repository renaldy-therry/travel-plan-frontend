import React from 'react';

export default function MenuItem({ name, icon }) {
  return (
    <div className="flex flex-col items-center absolute ">
      <div className="text-lg p-5 text-white m-3 rounded-xl bg-primary">
        {icon}
      </div>
      <h3>{name}</h3>
    </div>
  );
}
