import React from 'react';

const Input = ({ name, label, type, value, id, onChange }) => {
  return (
    <>
      <label style={{ display: 'block' }} htmlFor={name}>
        {label}
        <input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default Input;
