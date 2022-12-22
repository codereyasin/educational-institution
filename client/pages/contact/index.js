import React from 'react'

const Contact = () => {
  return (
    <div className="py-4 container">
    <h1 className="container flex justify-center  items-center text-4xl py-1 rounded-md  bg-green-400">
      যোগাযোগ
    </h1>
    <table className="w-full mt-10">
      <tbody>
          <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">Institution Type</td>
        <td className="border py-3 px-2"> High School</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">
          Institution Type High School Institution Name
        </td>
        <td className="border py-3 px-2"> সানশাইন একাডেমি</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">EIIN or Identity No</td>
        <td className="border py-3 px-2">1012015</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">Head of Institute</td>
        <td className="border py-3 px-2">রেজাউল করিম</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">Mobile No</td>
        <td className="border py-3 px-2">01716523480</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">Post</td>
        <td className="border py-3 px-2">
          উপজেলা রোড, বালিজুড়ী পণ্ডিতপাড়া, মাদারগঞ্জ, জামালপুর।
        </td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">Division</td>
        <td className="border py-3 px-2"> Mymensingh Division</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">District </td>
        <td className="border py-3 px-2">Jamalpur</td>
      </tr>
      <tr>
        <td className="border py-3 px-10 font-semibold text-[16px]">Upazilla </td>
        <td className="border py-3 px-2"> Madarganj</td>
      </tr>
      </tbody>
    
    </table>
  </div>
  )
}

export default Contact