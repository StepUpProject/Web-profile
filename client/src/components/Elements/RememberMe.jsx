import { useState } from "react";

const RememberMe = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <input
        type="checkbox"
        name="rememberMe"
        id="rememberMe"
        className="ml-1 mr-2 text-xs"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="rememberMe">Remember Me</label>
    </div>
  );
};

export default RememberMe;
