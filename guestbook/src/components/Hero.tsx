import Image from "next/image";
import heroImage from "../../public/Hero.png";

const Hero = () => {
  return (
    <section className="px-2 py-24 bg-[#0B1025] text-white">
      <div className="md:flex items-center justify-around ">
        <div className=" md:w-3/5 px-4">
          <h2 className="font-extrabold text-4xl text-skin-base my-4 leading-tight lg:text-7xl tracking-tighter mb-6 
            bg-gradient-to-r bg-clip-text text-transparent 
            from-[#15EFFB] via-[#110CE2] to-purple-500
            animate-text">
            Leave me<br />
            a message on my birthday
          </h2>
          <p className="text-base text-skin-muted dark:text-skin-darkMuted lg:text-2xl sm:mb-14 mb-10">
          Leave a comment below. It could be anything – appreciation, information, wisdom, or even criticism, All views are welcome! I am not a fan of the cancel culture!!!
          Actually Do it 👇
          </p>
        </div>
        <div className="w-10/12 md:w-1/3 mx-auto md:mx-0 my-8 order-2 ">
          <Image src={heroImage} alt="hero"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;