const CardPortfolio = ({ image, title, subtitle, description}) => {
  return (
    <div className="max-w-[267px] mx-auto mt-[43px] rounded-lg font-body overflow-hidden shadow-lg box-border">
      <img src={image} alt="Cards" className="w-full h-auto" />
      <div className="px-[14px] py-3 box-border leading-3">
        <h2 className="text-xs ">{subtitle}</h2>
        <h1 className="text-[16px] font-bold text-left my-[11px]">{title}</h1>
        <p className="word-wrap my-4 text-left text-xs ">{description}</p>
        <a href="./portfolioDetail.jsx?" className=" text-xs text-primary">Lihat Selengkapnya</a>
      </div>
    </div>
  );
};


export default CardPortfolio;
