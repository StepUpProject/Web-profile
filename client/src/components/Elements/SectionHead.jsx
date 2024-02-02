const SectionHead = (props) => {
    const { children ,classname } = props;
    return (
      <h1 className={`font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-black/50 ${classname}`}>
        {children}
      </h1>
    );
  };

  export default SectionHead