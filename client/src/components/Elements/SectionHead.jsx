import PropTypes from "prop-types";
const SectionHead = (props) => {
    const { children ,classname } = props;

    SectionHead.propTypes = {
      children: PropTypes.string,
      classname: PropTypes.string
    }
    return (
      <h1 className={`font-bold text-xl text-black text-center font-body lg:text-[34px] ${classname}`}>
        {children}
      </h1>
    );
  };

  export default SectionHead