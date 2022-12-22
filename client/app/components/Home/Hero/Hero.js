import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Hero2nd from "./Hero2nd";
const Hero = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="">
      <div className="container">
        <div>
          <h1 className="flex justify-center md:text-[50px]  sm:text-[35px] text-[25px] ">সানশাইন একাডেমি</h1>
          <marquee
            className="bg-slate-300 py-2 rounded-md text-base"
            behavior="scroll"
            direction="top"
          >
            ** জরুরি বিজ্ঞপ্তি : সানশাইন একাডেমির বার্ষিক পরীক্ষা আগামী ০২
            ডিসেম্বর ২০২১ খ্রি. হতে শুরু হবে। সকল শিক্ষার্থীকে পরীক্ষার পূর্ণ
            প্রস্তুতি গ্রহণ এবং ২৫ নভেম্বর ২০২১খ্রি. এর মধ্যে যাবতীয় পাওনা
            পরিশোধ করে প্রবেশপত্র সংগ্রহ করতে নির্দেশ দেয়া গেল।-অধ্যক্ষ। ***
            ভর্তি বিজ্ঞপ্তি : সানশাইন একাডেমিতে ২০২২ শিক্ষাবর্ষে ৬ষ্ঠ হতে ১০ম
            শ্রেণি পর্যন্ত বালক ও বালিকা শাখায় অনলাইনে ভর্তির আবেদন ১৫ নভেম্বর
            ২০২১ খ্রি. হতে ২০ ডিসেম্বর ২০২১ খ্রি. পর্যন্ত চলবে। বিস্তারিত জানতে
            অফিসে যোগাযোগ করতে হবে।-অধ্যক্ষ।***
          </marquee>
        </div>
        <div>
          <Hero2nd/>
        </div>
          <div className="py-5">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
          >
            <SwiperSlide>
              <img
                className="relative"
                src="/images/1610987335.jpg"
                alt="slider image"
              />
              {/* <h2 className="absolute font-semibold text-gray-200 pl-[42%] pb-[60px] text-[40px] bottom-0">
                বই উৎসব
              </h2> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/1610987586.jpg" alt="slider image" />
              {/* <h2 className="absolute font-semibold text-gray-200 sm:pl-[42%] pl-[27%] pb-[60px] text-[40px] bottom-0">
                পরিচালক বৃন্দ
              </h2> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/1610988374.jpg" alt="slider image" />
              {/* <h2 className="absolute font-semibold text-gray-200 pl-[44%] pb-[60px] text-[40px] bottom-0">
                বর্ষবরণ
              </h2> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
