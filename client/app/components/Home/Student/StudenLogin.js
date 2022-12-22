import { selectUser } from "../../../redux/slices/authSlice"
import "react-toastify/dist/ReactToastify.css";
import firebase from 'firebase';
import { auth } from '../../../utils/firebase'
import { useSelector } from 'react-redux'
import StudentDashboard from "./StudentDashboard";
import { FcGoogle } from 'react-icons/fc';
// import TostPopup from "../../../shared/TostPopup";


const StudentLogin = () => {
  const user = useSelector(selectUser)
  console.log(user)
  const handleGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .catch(err => alert(err.message))
  }
//   const emailSignup = (e) => {
//     e.preventDefault();
//     auth.createUserWithEmailAndPassword(email, password)
//       .catch(err => alert(err.message));
//   }
//   const emailLogin = (e) => {
//     e.preventDefault();
//     auth.signInWithEmailAndPassword(email, password)
//         .catch(err => alert(err.message));
// }



  //   const togglePassword = () => {
  //     setPasswordShown(!passwordShown);
  //   };

  return (
    <div className="bg-white">
      <div className="container">
        {user ? (
          <StudentDashboard user={user} />
        ) : (
          <div className="flex relative flex-col gap-y-4 w justify-center items-center h-[93vh]">
            <div className="flex flex-col justify-center items-center">
              <img className="w-24 h-24 bg-white rounded-full" src="/images/logo.jpg" alt="logo" />
              <h1 className="text-2xl pt-5 font-semibold">Login Student Dashboard</h1>
            </div>
            {/* <form onSubmit={emailLogin} className="space-y-6 sm:w-[40%] w-full" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
              Already Registered?<br/> <Link href='/student/registration'>
              <span>Login</span>
              </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <BsFillShieldLockFill className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Registered
                </button>
              </div>
            </form> */}

              <div className="mt-5">
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
                  onClick={handleGoogle}
                >
                  <FcGoogle size={30} />
                  <span className="ml-3 text-indigo-700 font-semibold">Continue with Google</span>
                </button>
              </div>
            </div>
        )}
      </div>
    </div>
  );
};



export default StudentLogin;
