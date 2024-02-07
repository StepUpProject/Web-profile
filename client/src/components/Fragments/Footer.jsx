const Footer = () => {
  const contacts = [
    {
      title: "email",
      content: "stepup.project6@gmail.com",
      image: "./svg/email.svg",
    },
    {
      title: "instagram",
      content: "stepup.project",
      image: "./svg/instagram.svg",
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
    <div className="flex flex-col justify-center items-center pt-12 pb-16">
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
            <div key={item.title} className="flex flex-row gap-2 items-center mb-2">
              <div className="flex w-6 h-4 justify-center items-center">
              <img src={item.image} alt={item.title} />
              </div>
              <p className="text-xs text-start">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
