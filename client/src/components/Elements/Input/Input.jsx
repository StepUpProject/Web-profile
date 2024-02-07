import React, { useState } from 'react';

const InputForm = (props) => {
  const { name, type, htmlFor, label } = props;
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const floatingLabelStyles = [
    'text-sm font-semibold mb-2 px-1 mx-3 absolute left-0 top-0.5 transition duration-500',
    focused || value ? 'transform -translate-y-6 text-primary -translate-x-2 bg-white scale-90' : 'text-slate-700',
  ].join(' ');

  return (
    <div className="mb-3 relative">
      <label htmlFor={htmlFor} className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="text-sm border rounded w-full py-3 px-4 text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary transition duration-500"
        />
        <span className={floatingLabelStyles}>{label}</span>
      </label>
    </div>
  );
};

export default InputForm;
