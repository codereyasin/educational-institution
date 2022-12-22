import Link from 'next/link'
import React, { useState } from 'react'
import { ImMenu } from 'react-icons/im';
import { MdClose } from 'react-icons/md';

const Header = () => {

  const [nav, setNav] = useState(false)
  const handleNav =()=> {
    setNav(!nav)
  }

  return (
    <header className='bg-gray-100 border-b  py-2 '>
      <div className="container">
        {/* pc  */}
        <div className='xl:flex justify-between items-center hidden'>
          {/* Logo */}
          <Link href='/'>
          <div className=' flex gap-3'>
            <img className='w-14 h-14' src="/images/logo.jpg" alt="logo" />
            <h1 className='flex justify-center items-center font-bold text-[25px]'>সানশাইন একাডেমি</h1>
          </div>
          </Link>
          {/* Nav Button */}
          <div className='flex gap-5 font-semibold text-gray-700'>
            <Link href='/'>
            <a className="text-green-500 transition-all duration-300" >হোম পেজ</a>
            </Link>
            <Link href='schooladministration'>
            <a className='hover:text-green-500 transition-all duration-300'>প্রতিষ্ঠান প্রশাসন</a>
            </Link>
            <Link href='gallery'>
            <a className='hover:text-green-500 transition-all duration-300'>গ্যালারি</a>
            </Link>
            <Link href='ourtalk'>
            <a className="hover:text-green-500 transition-all duration-300" >আমাদের কথা</a>
            </Link>
            <Link href='contact'>
            <a className="hover:text-green-500 transition-all duration-300" >যোগাযোগ</a>
            </Link>
            <Link href='student'>
            <a className="hover:text-green-500 font-bold transition-all duration-300" >Student</a>
            </Link>
            <Link href='http://www.educationboardresults.gov.bd/'>
            <a className='hover:text-green-500 transition-all duration-300'>JSC / SSC ফলাফল দেখুন</a>
            </Link>
          </div>
        </div>

        {/* andorid */} 
        <div>
        <div className='xl:hidden flex justify-between items-center'>
          {/* Logo */}
          <Link href='/'>
          <div className=' flex gap-3'>
            <img className='w-14 h-14' src="/images/logo.jpg" alt="logo" />
            <h1 className='flex justify-center items-center font-bold text-[25px]'>সানশাইন একাডেমি</h1>
          </div>
          </Link>
          {/* Nav Button */}
          <div onClick={handleNav}>
            {nav ? <MdClose className='border border-black z-10' size={30}/> : <ImMenu size={30}/>}
          </div>
          <div className={nav ? 'flex z-50 gap-5 absolute top-[73px] -right-1 flex-col font-semibold text-[20px] border border-gray-300 bg-transparent transition-all bg-slate-50 pt-20 rounded-tl-3xl rounded-bl-3xl gap-y-9 w-[60%] px-[20px] py-[15px] ease-in duration-500 h-screen text-white' : "hidden"}>
            <Link href='/'>
            <a className="text-green-500 flex justify-center  items-center  transition-all duration-300" >হোম পেজ</a>
            </Link>
            <Link href='schooladministration'>
            <a className='hover:text-green-500 flex justify-center text-black items-center transition-all duration-300'>প্রতিষ্ঠান প্রশাসন</a>
            </Link>
            <Link href='gallery'>
            <a className='hover:text-green-500 flex justify-center text-black items-center transition-all duration-300'>আমাদের সম্পর্কে</a>
            </Link>
            <Link href='ourtalk'>
            <a className="hover:text-green-500 flex justify-center text-black items-center transition-all duration-300" >আমাদের কথা</a>
            </Link>
            <Link href='contact'>
            <a className="hover:text-green-500 flex justify-center text-black items-center transition-all duration-300" >যোগাযোগ</a>
            </Link>
            <Link href='student'>
            <a className="hover:text-green-500 flex justify-center text-black items-center transition-all duration-300" >Student</a>
            </Link>
            <Link href='http://www.educationboardresults.gov.bd/'>
            <a className='hover:text-green-500 flex justify-center text-black items-center transition-all duration-300'>JSC / SSC ফলাফল দেখুন</a>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header

