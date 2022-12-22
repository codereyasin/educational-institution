import React from 'react'
import { DefaultContext } from 'react-icons'
const President = ({teachers, user}) => {
  return (
      <>
         <div className='sm:flex hidden'>
         <table className="w-full table-auto">
         <thead className=''>
            <tr className="bg-gray-800">
              <th className="px-17 py-3">
                <span className="text-gray-200 ">Name</span>
              </th>
              <th className="px-17 py-3">
                <span className="text-gray-200 ">Number</span>
              </th>
              <th className="px-17 py-3">
                <span className="text-gray-200 ">Designation</span>
              </th>
              <th className="px-17 py-3">
                <span className="text-gray-200 lg:px-28 md:px-16 px-10 md:flex hidden">Email</span>
              </th>
            </tr>
          </thead>
           <tbody className="bg-gray-200">
           {teachers?.map((teacher) => (
             (teacher.committe ==="true" && (
              <tr key={teacher.id} className="bg-gray-50 text-center">
              <td className="px-3 sm:px-16 py-2 flex flex-row items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={teacher?.image}
                  alt=""
                />
                <span className="text-center ml-2 font-semibold">
                  {teacher?.name}
                </span>
              </td>
              {/*  */}
              <td className=" px-10 py-2">
                <span className="text-center ml-2 ">
                  +088{teacher?.mobile_no}
                </span>
              </td>
              <td className="lg:pr-[2rem] pr-[2.5rem] py-2">
                <span className="text-center ml-2 ">
                  {teacher?.designation}
                </span>
              </td>
              <td className="lg:pl-[3rem] pr-[0.5rem] py-2  ">
                <span className="text-center ml-2 md:flex hidden ">{teacher?.email}</span>
              </td>
              <td>
              </td>
            </tr>
          ))
           ))}
         </tbody>
        </table>
         </div>
         {/*  */}
         <div className='sm:hidden flex'>
         <table className="w-full table-auto">
         <thead className=''>
            <tr className="bg-gray-800">
              <th className="px-17 py-3">
                <span className="text-gray-200 ">Name</span>
              </th>
            </tr>
          </thead>
           <tbody className="bg-gray-200">
           {teachers?.map((teacher) => (
             (teacher.committe ==="true" && (
              <tr key={teacher.id} className="bg-gray-50 text-center">
              <td className="px-16 py-2 flex flex-col items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={teacher?.image}
                  alt=""
                />
                <span className="text-center ml-2 font-semibold">
                  {teacher?.name}
                </span>
                <td className="py-2">
                <span className="text-center ml-2 ">
                  +088{teacher?.mobile_no}
                </span>
              </td>
              <td className="py-2">
                <span className="text-center ml-2 ">
                  {teacher?.designation}
                </span>
              </td>
              <td className=" py-2">
                <span className="text-center ml-2 ">{teacher?.email}</span>
              </td>
              </td>
            </tr>
          ))
           ))}
         </tbody>
        </table>
         </div>
    </>
  )
}

export default President
