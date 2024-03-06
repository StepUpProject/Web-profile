import React, { useState } from "react";

const InputForm = (props) => {
  const { name, type, htmlFor, label, classname = "" } = props;
  const [value, setValue] = useState("");
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
    "text-sm font-semibold mb-2 px-1 mx-3 absolute left-0 top-0.5 transition duration-500",
    focused || value
      ? "transform -translate-y-6 text-primary -translate-x-2 bg-white scale-90"
      : "text-slate-700",
  ].join(" ");

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
          className={`text-sm ring-1 ring-dark rounded w-full py-3 px-4 text-slate-800 ${classname} focus:outline-none focus:ring-primary transition duration-500`}
        />
        <span className={floatingLabelStyles}>{label}</span>
      </label>
    </div>
  );
};

export const InputArticle = (props) => {
  const { name, type, htmlFor, label, classname = "" } = props;
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <>
    <label htmlFor={name} className="labelArticle">{label}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={label}
        className="w-full rounded-md border-2 border-slate-300 py-3 px-4 font-semibold" />
    </>
    
  );
};

export default InputForm;
