const Card = ({ image, title, content }) => {
  return (
    <div className="max-w-[300px] mx-auto mt-[43px] rounded-xl font-body overflow-hidden shadow-cardShadow">
      <img src={image} alt="Cards" className="w-full h-auto" />
      <h1 className="text-[16px] font-bold text-center my-[11px]">{title}</h1>
      <p className="word-wrap px-[13px] pb-6 text-center text-xs">{content}</p>
    </div>
  );
};


export default Card;
