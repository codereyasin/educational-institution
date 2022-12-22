// import { useRouter } from "next/router";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { auth, providerGoogle } from "../../firebase";
// import Dashboard from "../../pages/teacher/dashboard";
// import { setAuth } from "../slice/authSlice";
// import { googleApi } from "../utils/googleLogin";
// import Student from '../../pages/student'

// const AdminLogin = () => {
//   const [password, setPassword] = useState("");
//   const [passwordShown, setPasswordShown] = useState(false);
//   const [user, setUser] = useState("");
//   const router = useRouter();
//   const dispatch = useDispatch()
//   const { token } = useSelector((state) => state.auth)

//   const handleGoogle = async () => {
//     try {
//       const res = await googleApi(auth, providerGoogle);
//       const user = { user: { email: res.email, fullname: res.displayName, avatar: res.photoURL }, token: res.accessToken };
//       if (res.email === "eyasindevofficial@gmail.com") {
//           dispatch(setAuth(user))
//           toast.success("User login")
//           localStorage.setItem("user", JSON.stringify(user))
//           router.push("/teacher/dashboard")
//       }else{
//       dispatch(setAuth(user))
//       toast.success("User login")
//       router.push("/student")
//     }
//     console.log(res)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const togglePassword = () => {
//     setPasswordShown(!passwordShown);
//   };

//   useEffect(() => {
//     (() => {
//       if (token) router.push("/teacher/dashboard")
//     })()
//   }, [router, token])

//   return (
//     <div className="bg-green-500">
//       <div className="container">
//         <div className="flex relative flex-col gap-y-4 justify-center items-center h-[93vh]">
//           <div>
//             <img className="w-24 h-24 bg-white rounded-full" src="/images/logo.jpg" alt="logo" />
//           </div>
//           {/* <input
//             type="text"
//             className="border border-gray-600 outline-none rounded-xl px-6 py-2"
//             placeholder="Enter your User"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           /> */}
//           {/* <div className="relative">
//             <input
//               type={passwordShown ? "text" : "password"}
//               className="border  outline-none rounded-xl border-gray-600 px-6 py-2"
//               placeholder="Enter your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button
//               className="absolute text-[10px] bg-black text-white px-2 py-1 rounded-full bottom-[9px] left-[200px] z-10 "
//               onClick={togglePassword}
//             >
//               Show
//             </button>
//           </div> */}
//           {/* <button
//             className="border-2 px-7 py-2 rounded-3xl text-white bg-yellow-500 hover:bg-red-500 ease-linear transition-all duration-300"
//             type="submit"
//             onClick={handleClick}
//           >
//             Login
//           </button> */}
//           <button onClick={handleGoogle}>google with google</button>
//           <ToastContainer
//             position="top-left"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Student;
