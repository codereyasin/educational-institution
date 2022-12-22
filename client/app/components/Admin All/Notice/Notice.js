import React, { useEffect, useState } from "react";
import AddNotice from "./AddNotice";
import DeleteNotice from "./DeleteNotice";
import EditNotice from "./EditNotice";
import axios from "axios";
const Notice = () => {
 const [notices, setNotices] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/notices`);
        setNotices(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex space-x-5 lg:flex-row flex-col">
      <div>
        <AddNotice />
        <EditNotice />
        <DeleteNotice />
      </div>
      <div className="">
      <div className="flex justify-center items-center text-green-500 font-bold text-4xl relative flex-col pb-5">
              নোটিশ বোর্ড
              <span className="absolute gap-2 w-[250px] h-1 rounded-2xl bottom-4 bg-green-500"></span>
            </div>
            <ul className="border py-10  px-5 border-r-2">
              <p  scrollamount="2" loop={true} direction="up">
                <div className="flex gap-5">
                <h1 className="text-sm underline">ID</h1>
                <h1 className="text-sm underline">Title</h1>
                </div>
              {notices?.map(noticelist => (
 
                      <li key={noticelist.id} className="py-2 hover:text-green-500 transition-all duration-100 font-semibold border-b ">
                    <span>{noticelist.id})</span> <span>{noticelist?.title}</span> {" "}
               </li>

          
              ))}
              </p>
            </ul>
            </div>
      </div>
  );
};

export default Notice;
