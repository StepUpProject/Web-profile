import PropTypes from "prop-types";
const StylizedFrame = (props) => {
  const { urlImage,  classname } = props;

  StylizedFrame.propTypes = {
    urlImage: PropTypes.string,
    classname: PropTypes.string,
  };
  return (
    <section
      className={`font-bold text-xl text-black text-center font-body ${classname}`}
    >
      <img src={urlImage} alt="StylizedFrame" />
    </section>
  );
};

export default StylizedFrame;
