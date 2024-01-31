/* const Card = ({image},{title},{content}) => {
  return (
    <div className="">
      <img src={image} alt="Card Image" />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}; */
const Card = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Card Aplikasi Web */}
      <section className="max-w-[300px] mt-[43px] rounded-xl font-body overflow-hidden shadow-cardShadow">
        <img src="../../../public/images/layanan-aplikasi-web.png" alt="Cards Image" 
        className="w-[300px]"/>
        <h1 className="text-[16px] font-bold text-center my-[11px]">Aplikasi Web</h1>
        <p className="word-wrap px-[13px] pb-6 text-center text-xs">
          Step Up Project mitra terpercaya dalam 
          pembuatan dan pengelolaan aplikasi 
          website, dengan developer yang  siap 
          membantu mewujudkan ide anda 
          menjadi aplikasi website yang 
          fungsional, menarik, dan sesuai 
          dengan kebutuhan bisnis Anda
        </p>
      </section>

      {/* Card Artikel */}
      <section className="max-w-[300px] mt-[43px] rounded-xl font-body overflow-hidden shadow-cardShadow">
        <img src="../../../public/images/layanan-artikel.png" alt="Cards Image" 
        className="w-[300px]"/>
        <h1 className="text-[16px] font-bold text-center my-[11px]">Artikel</h1>
        <p className="word-wrap px-[13px] pb-6 text-center text-xs">
          Kami juga menyediakan layanan artikel 
          yang informatif dan berkualitas untuk 
          mendukung keberhasilan online Anda. 
          Dengan tim penulis berpengalaman, 
          kami membantu membangun konten 
          yang relevan dan menarik .
          Mari bersama, ciptakan kehadiran 
          online yang tak terlupakan dan sukses
        </p>
      </section>

      {/* Card Konten Digital */}
      <section className="max-w-[300px] mt-[43px] rounded-xl font-body overflow-hidden shadow-cardShadow">
        <img src="../../../public/images/layanan-sosmed.png" alt="Cards Image" 
        className="w-[300px]"/>
        <h1 className="text-[16px] font-bold text-center my-[11px]">Konten Digital</h1>
        <p className="word-wrap px-[13px] pb-6 text-center text-xs">
          Tidak hanya itu, kami juga spesialis 
          dalam pembuatan konten digital. 
          Konten berkualitas tinggi untuk 
          memperkuat kehadiran online Anda. 
          Mari tingkatkan kualitas dan 
          daya tarik bisnis Anda bersama kami
        </p>
      </section>
    </div>
  );
};


export default Card;
