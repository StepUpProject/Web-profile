import Button from "../Elements/Button/Button";
const Footer = () => {
  const contacts = [
    {
      title: "email",
      content: "stepup.project6@gmail.com",
      image: "../svg/email.svg",
    },
    {
      title: "instagram",
      content: "stepup.project",
      image: "../svg/instagram.svg",
    },
    {
      title: "whatsapp",
      content: "082262191159",
      image: "../svg/whatsapp.svg",
    },
    {
      title: "location",
      content: "Sleman, Yogyakarta 55282",
      image: "../svg/location-pin.svg",
    },
  ];
  return (
    <footer className="flex flex-col mt-20 bg-[#1B1D21] text-white font-body">
      <section className="px-8 py-2 mb-2">
        <div className="flex flex-row items-center gap-3 mt-6">
          <img src="images/logo.png" alt="" className="w-[41px] " />
          <h3 className="text-xl font-bold">Step Up</h3>
        </div>
        <div className="w-[230px] mt-4">
          <p className="text-xs">
            Hubungi dan rancang website anda dengan tim profesional kami.
          </p>
        </div>
        {/* belum bisa pindah ke halaman konsultasi  */}
        <Button>Konsultasi</Button>
        <div className="mt-4">
          <div className="flex flex-col">
            <div className="flex mb-[5px]">
              <h4 className="text-base font-medium place-items-center">
                Information
              </h4>
            </div>
            <img src="../svg/curly-style.svg" alt="curly style gajelas"
            className="w-8 mb-[9px]" />
            {contacts.map((item) => (
              <div
                key={item.title}
                className="flex flex-row items-center mb-2"
              >
                <div className="flex w-6 h-4 justify-left items-center fill-primary">
                  <img src={item.image} alt={item.title} />
                </div>
                <p className="text-xs text-start">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative">
        <img
          className="absolute right-8"
          src="../images/frame-footer-2.png"
          alt="frame-footer"
        />
        <img
          className="w-full"
          src="../images/frame-footer.png"
          alt="frame-footer"
        />
      </section>
    </footer>
  );
};

export default Footer;
