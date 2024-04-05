const Button = (props) => {
    const {
      children,
      classname,
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`h-10 ${classname ? classname : "bg-primary"} font-semibold text-white`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  