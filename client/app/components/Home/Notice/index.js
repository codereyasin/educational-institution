import axios from 'axios'
import {importantLink} from '../../../data/notice'
import React, { useEffect, useState } from "react";
const Notice = (props) => {
  const [Snotices, setSnotices] = useState()
  console.log(props, "mydata")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/notices`);
        setSnotices(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-x-2">
          <div>
            <div className="flex justify-center items-center text-green-500 font-bold text-4xl relative  pb-5">
              নোটিশ বোর্ড
              <span className="absolute gap-2 w-[250px] h-1 rounded-2xl bottom-4 bg-green-500"></span>
            </div>
            <ul className="border py-10  px-5 border-r-2 microsoft areas">
              <p className='marquee' scrollamount="2" loop={true} direction="up">
              {Snotices?.map(noticelist => (
                 <li key={noticelist.id} className="py-2 hover:text-green-500 transition-all duration-100 font-semibold border-b ">
                 <a href={noticelist?.link}>
                   <span>{noticelist?.title}</span>
                 </a>
               </li>
              ))}
              </p>
            </ul>
          </div>
          <div>
            <div className="flex justify-center items-center text-green-500 font-bold relative text-4xl pb-5">
              স্পেশাল লিঙ্ক
              <span className="absolute gap-2 w-[100px] h-1 rounded-2xl bottom-2 bg-green-500"></span>
            </div>
            <ul className="border py-10 px-5 border-r-2 ">
              <a
                className="items-center justify-center text-center font-semibold border p-5 bg-gray-400 flex rounded-lg hover:bg-green-600"
                href="https://meet.google.com/oyd-zspm-xda"
              >
                Online Class
              </a>
            </ul>
          </div>
          <div>
            <div className="flex justify-center items-center relative text-green-500 font-bold text-4xl  pb-5">
              গুরুত্বপূর্ণ লিঙ্ক
              <span className="absolute gap-2 w-[250px] h-1 rounded-2xl bottom-2 bg-green-500"></span>
            </div>
            <ul className="border py-10 px-5 border-r-2">
            {importantLink.map((list, index) => (
              <li key={index} className="py-2 hover:text-green-500 transition-all duration-100 font-semibold border-b ">
                   <a href={list?.link}>
                   <span>{list?.title}</span>
                 </a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
   try {
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API}/notices`);
   } catch (error) {
    console.log(error);
   }
 
  return {
    props: {
      data: data
    },
  }
}

export default Notice;
