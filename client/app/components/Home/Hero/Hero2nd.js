import { BsArrowRight } from "react-icons/bs";

const Hero2nd = () => {
  return (
    <div className="md:y-10">
      <div className="container pl-0 bg-[url('/images/banner_img.png')] rounded-2xl">
        <div className="flex justify-between">
          <div className=" bg-scroll md:pt-[200px] justify-center items-center pt-[100px] md:pl-16 pl-[1.5rem] xl:bg-[url('/images/hero-bg.png')]  sm:h-[450px] rounded-br-3xl rounded-tr-3xl h-[480px] md:h-[700px] sm:w-[700px] w-[300px] bg-cover ">
            <h1 className="sm:text-2xl text-lg md:pb-3 text-white">
              Welcome to Best educations
            </h1>
            <h1 className="text-4xl md:pb-3 text-yellow-400 font-bold">
              SCHOOL
            </h1>
            <p className="text-white font-semibold sm:w-auto md:w-[300px] w-[280px]">
              There are many variations of passages of Lorem Ipsum
              <br /> available, but the majority have suffered alteration in
              some
              <br /> form, by injected humour, or randomised
            </p>
            <button className="text-white py-2 flex justify-center items-center gap-2 px-5 mt-5 rounded-md font-bold bg-yellow-400 ">
              CONTACT <BsArrowRight size={20} />
            </button>

           
          </div> 
          <div className="md:flex justify-center items-center hidden ">
              <img src="/images/hero.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2nd;
