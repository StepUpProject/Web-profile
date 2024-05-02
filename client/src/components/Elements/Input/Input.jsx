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
    "text-sm font-semibold mb-2 px-1 mx-2 absolute left-0 top-0.5 transition duration-500",
    focused || value
      ? "transform -translate-y-6 text-primary -translate-x-2 bg-white scale-90"
      : "text-slate-700",
  ].join(" ");

  return (
    <div className="w-full relative">
      <label htmlFor={htmlFor} className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`text-sm ring-1 ring-gray-200 rounded-lg w-full py-3 px-4 text-slate-800 ${classname} focus:outline-none focus:ring-primary transition duration-500`}
        />
        <span className={floatingLabelStyles}>{label}</span>
      </label>
    </div>
  );
};

export const InputArticle = ({
  name,
  type,
  value,
  label,
  classname = "",
  setValue,
}) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <label htmlFor={name} className="labelArticle">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className={`w-full md:w-[525px] rounded-lg border-2 border-slate-300 py-3 px-4 font-semibold ${classname}`}
      />
    </>
  );
};

// export const InputEditArticle = ({ name, type, label, classname = "", value, setValue}) => {
//   // const [value, setValue] = useState("")
//   const handleChange = (newValue) => {
//     setValue(newValue)
//     console.log(newValue)
//   };
//   return (
//     <>
//     <label htmlFor={name} className="labelArticle">{label}</label>
//       <input
//         type={type}
//         name={name}
//         placeholder={label}
//         value={value}
//         onChange={(e) => handleChange(e.target.value)}
//         className={`w-full rounded-md border-2 border-slate-300 py-3 px-4 font-semibold ${classname}`}
//       />
//     </>

//   );
// };

export default InputForm;
