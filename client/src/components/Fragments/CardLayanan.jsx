import PropTypes from "prop-types";

const CardLayanan = ({ image, title, content }) => {
  CardLayanan.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  };

  return (
    <main
      className="relative max-w-[267px] h-[290px] mx-auto mt-[43px] rounded-[10px] font-body overflow-hidden shadow-cardShadow box-border
    md:max-w-[600px] md:h-[210px] md:flex md:justify-center lg:max-w-[1180px] lg:h-[280px]"
    >
      <section className="md:flex md:gap-2 ">
        <div className="md:flex md:items-center md:w-[30%] md:px-4 lg:w-[20%]">
          <img
            src={image}
            alt="Cards"
            className="w-[57px] mx-auto mt-[26px] md:w-[100px] lg:w-[150px]"
          />
        </div>
        <div className="md:w-[70%] md:pr-8 lg:w-[80%] lg:pe-36">
          <h1
            className="text-[16px] font-bold text-center mb-5 mt-[14px] md:text-left md:mb-2 md:ps-3 md:mt-10 
          lg:text-3xl lg:mb-3 lg:mt-20"
          >
            {title}
          </h1>
          <p className="word-wrap px-[13px] text-justify text-xs lg:text-base">
            {content}
          </p>
        </div>
      </section>
      <div
        className="absolute bottom-0 w-full border border-[#FFB10A]
      md:w-[267px] md:mx-auto"
      ></div>
    </main>
  );
};

export default CardLayanan;
