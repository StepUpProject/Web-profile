const TeamCard = (props) => {
  const { image, name, role } = props;
  return (
    <div
      className="flex flex-col justify-center items-center w-[150px] h-[211px]
      shadow-[0_5px_10px_rgba(0,0,0,0.4)]"
    >
      <img src={image} alt="" className="w-[150px] h-[122px] object-cover" />
      <div className="flex flex-col items-center justify-center text-center px-4 py-3">
        <p className="font-bold text-xs">{name.toUpperCase()}</p>
        <p className="font-medium text-xs mt-3">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
