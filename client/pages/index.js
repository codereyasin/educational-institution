import Head from 'next/head'
import {Map, Notice, ParTicles, Hero} from '../app/components/Home'
import { getPage, getPageServer } from "../app/utils/helper";
import Admin from '../app/Admin/index'
import { useEffect, useState } from 'react';
export default function Home({page}) {

  // if (page === 'admin') return <Admin />  

  return (
  <>
    <Head>
       <title>Sunshine Academy</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ParTicles/>
    <Hero/>
    <Notice/>
    <Map/>
    </>
  )
}

// export async function getServerSideProps(context) {
//   let page
//   const { req } = context;
//   if (req) {
//     let host = req.headers.host
//     page = getPageServer(host) || null
//   }

//   return {
//     props: {
//       page: page
//     },
//   }
// }