import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 "  >
      <div className="container">
        <div className="text-2xl font-bold flex justify-center pb-5 border-b">
        Contact Us
        </div>
        <div className="flex justify-between pb-5 flex-col sm:flex-row gap-y-7 sm:gap-y-0">
          {/* address */}
          <address className="not-italic justify-center flex flex-col pt-3">
            <p className="text-[20px] pb-3">Institution Type: High School</p>
            <h1 className="text-[25px] pb-3 font-bold">
              Balijuri, Jamalpur,<br></br> Dhaka
            </h1>
            <span className="text-[20px]">(+880) 1716-523480</span>
          </address>
          {/* tag */}
          <div className="flex justify-center flex-col gap-3 font-semibold ">
            <Link href="/">
              <a className="hover:text-green-500 transition-all duration-300">
                হোম পেজ
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-500 transition-all duration-300">
              রেজাল্ট
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-500 transition-all duration-300">
              নোটিশ
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-500 transition-all duration-300">
              ক্লাস রুটিন
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-500 transition-all duration-300">
              সিলেবাস
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-green-500 transition-all duration-300">
              পরীক্ষার রুটিন
              </a>
            </Link>
          </div>
          {/* contaact */}
          <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <form  method="POST">
                <div className="formbold-mb-5">
                  <label htmlFor="name" className="formbold-form-label">
                    {" "}
                    Full Name{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="formbold-form-input"
                  />
                </div>

                <div className="formbold-mb-5">
                  <label htmlFor="email" className="formbold-form-label">
                    {" "}
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="formbold-form-input"
                  />
                </div>
                <div className="formbold-mb-5">
                  <label htmlFor="message" className="formbold-form-label">
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="formbold-form-input"
                  ></textarea>
                </div>

                <div>
                  <button className="formbold-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex pt-6 justify-center">
        <h1 className="font-semibold"><span className="font-bold text-[20px]">&copy; {" "}</span>সানশাইন একাডেমি 2015 - {new Date().getFullYear()}</h1>
      </div>
      </div>
      <div className="border-t flex justify-center bg-gray-200 ">
       <h1 className="gap-x-2 text-[15px] font-semibold flex items-center text-green-500 ">Developed by<a className='text-[18px] font-bold underline' href="https://www.eyasinarafat.com/">Eyasin Arafat</a></h1>
      </div>
    </footer>
  );
};

export default Footer;
