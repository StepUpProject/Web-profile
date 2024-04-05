const Button = (props) => {
    const {
      children,
      classname,
      onClick = () => {},
      type = "button",
    } = props;
    return (
      <button
        className={`py-2 px-5 mt-4 mb-8 text-sm font-normal text-white bg-primary rounded-full transition hover:shadow-lg hover:shadow-primary/50  duration-300`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  