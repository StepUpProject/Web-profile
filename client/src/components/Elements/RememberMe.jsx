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
        className="mr-2"
        onChange={handleCheckboxChange}
      />
      <label htmlFor="rememberMe">Remember Me</label>
    </div>
  );
};

export default RememberMe;
