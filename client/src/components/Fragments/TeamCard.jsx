import PropTypes from "prop-types";

const TeamCard = (props) => {
  const { image, name, role } = props;

  TeamCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  };

  return (
    <div className=" w-[160px] h-[211px] shadow-[0_5px_10px_rgba(0,0,0,0.4)] lg:w-[328px] lg:h-[452px]">
      <img
        src={image}
        alt={`${name} Photo`}
        className="w-full h-[122px] object-cover lg:h-[261px]"
      />
      <div className="flex flex-col items-center justify-center text-center px-4 py-3">
        <div className="min-h-8 lg:px-12 lg:py-4">
          <p className="font-bold text-xs lg:text-xl">{name.toUpperCase()}</p>
        </div>
        <p className="font-medium text-xs mt-3 text-primary lg:text-xl ">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
