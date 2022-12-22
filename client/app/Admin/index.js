import { selectUser } from "../redux/slices/authSlice"
import "react-toastify/dist/ReactToastify.css";
import firebase from 'firebase';
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc';
import AdminDashborad from './AdminDashboard'
const Admin = () => {
  const user = useSelector(selectUser)
  const handleGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .catch(err => alert(err.message))
  }

  return (
    <div className="bg-white">
      <div className="container">
        {user?.email === "gamexshopbd@gmail.com" ? (
          <AdminDashborad user={user}/>
        ) : (
          <div className="flex relative flex-col gap-y-4 w justify-center items-center h-[93vh]">
            <div className="flex flex-col justify-center items-center">
              <img className="w-24 h-24 bg-white rounded-full" src="/images/logo.jpg" alt="logo" />
              <h1 className="text-2xl pt-5 font-semibold">Login Admin Dashboard</h1>
            </div>
          

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

export default Admin;
