import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardPortfolio = ({ id, imageCard, title, subtitle, description }) => {
  CardPortfolio.propTypes = {
    id: PropTypes.number,
    imageCard: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  };

  return (
    <div
      className="max-w-[267px] mx-auto mt-[43px] font-body overflow-hidden shadow-cardShadow box-border
    lg:max-w-[400px]"
    >
      <img src={imageCard} alt="Cards" className="w-full h-auto" />
      <div className="px-[14px] py-3 box-border leading-3">
        <h2 className="text-xs lg:text-lg">{subtitle}</h2>
        <h1 className="text-[16px] font-bold text-left my-[11px] lg:text-2xl">
          {title}
        </h1>
        <p className="word-wrap my-4 text-left text-xs lg:text-lg lg:pe-8 lg:mb-14">
          {description}
        </p>
        <Link
          to={`/portfolio/${id}`}
          className=" text-xs text-primary lg:text-lg"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default CardPortfolio;
