import React, { useState } from "react";

const TextArea = (props) => {
  const { name, htmlFor, label } = props;
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
    "text-sm font-semibold mb-2 px-1 mx-3 absolute left-0 -top-72 transition duration-500",
    focused || value
      ? "transform -translate-y-6 -left-1 text-primary -translate-x-2 bg-white scale-90"
      : "text-slate-700",
  ].join(" ");

  return (
    <div className="mb-3 relative">
      <label htmlFor={htmlFor} className="relative">
        <textarea
          cols="30"
          rows="15"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="text-sm border rounded-lg w-full py-2 px-4 text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary transition duration-500"
        />
        <span className={floatingLabelStyles}>{label}</span>
      </label>
    </div>
  );
};

export default TextArea;
