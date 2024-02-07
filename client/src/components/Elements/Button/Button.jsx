const Button = (props) => {
    const {
      children,
      classname = "bg-primary",
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`h-10 ${classname} font-semibold text-white`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  