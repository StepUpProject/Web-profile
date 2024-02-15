import {Link} from 'react-router-dom';
const CardArtikel = ({ id, imageCard, title, author, shortDescription, date  }) => {
  return (
    <Link to={`/artikel/${id}`} className="block max-w-[300px] mx-auto mt-[43px] rounded-xl font-body overflow-hidden shadow-lg box-border">
        <img src={imageCard} alt="Cards" className="w-full h-auto" />
        <div className="px-[14px] py-3 box-border leading-3">
            <h2 className="text-xs ">{author}</h2>
            <h1 className="text-[16px] font-bold text-left my-[11px]">{title}</h1>
            <p className="word-wrap my-4 text-left text-xs ">{shortDescription}</p>
            
        </div>
    </Link>
  );
};


export default CardArtikel;