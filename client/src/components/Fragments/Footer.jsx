const Footer = () => {
  const contacts = [
    {
      title: "email",
      content: "stepup.project6@gmail.com",
      image: "./svg/email.svg",
    },
    {
      title: "whatsapp",
      content: "082262191159",
      image: "./svg/whatsapp.svg",
    },
    {
      title: "location",
      content: "Sleman, Yogyakarta 55282",
      image: "./svg/location-pin.svg",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="w-full h-[112px] ps-4 pt-4 pe-11 bg-primary text-white">
        <h3 className="text-base font-bold">
          Ayo bangun website anda sekarang
        </h3>
        <div className="pe-11 mt-1.5">
          <p className="text-sm font-light">
            Hubungi dan rancang dengan tim profesional kami.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-1 mt-6">
        <img src="images/logo.png" alt="" className="max-h-[25px]" />
        <h3 className="text-sm font-bold">Step Up Project</h3>
      </div>
      <div className="mt-9">
        <div className="flex flex-col">
          <div className="flex justify-center items-center mb-2.5">
            <h4 className="text-sm font-bold place-items-center">
              Information
            </h4>
          </div>
          {contacts.map((item) => (
            <div className="flex flex-row gap-2 items-center mb-2">
              <img src={item.image} alt={item.title} />
              <p className="text-xs">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-9">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-sm font-bold mb-3">Hubungi Kami</h4>
            <div className="flex flex-row gap-3 justify-center items-center">
              <img src="./svg/instagram.svg" alt="instagram" />
              <img src="./svg/linkedin.svg" alt="linkedin" />
              <img src="./svg/twitter.svg" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
