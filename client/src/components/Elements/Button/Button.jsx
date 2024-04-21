const Button = (props) => {
    const {
      children,
      classname,
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`${classname} text-sm font-normal text-white bg-primary rounded-full `}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  