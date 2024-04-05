import {Link} from 'react-router-dom';


const CardPortfolio = ({id, imageCard, title, subtitle, description}) => {
  return (
    <div className="max-w-[267px] mx-auto mt-[43px] font-body overflow-hidden shadow-cardShadow box-border">
      <img src={imageCard} alt="Cards" className="w-full h-auto" />
      <div className="px-[14px] py-3 box-border leading-3">
        <h2 className="text-xs ">{subtitle}</h2>
        <h1 className="text-[16px] font-bold text-left my-[11px]">{title}</h1>
        <p className="word-wrap my-4 text-left text-xs ">{description}</p>
        <Link to={`/portfolio/${id}`} className=" text-xs text-primary">Lihat Selengkapnya</Link>
      </div>
    </div>
  );
};


export default CardPortfolio;
