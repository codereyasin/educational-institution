import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNotice = () => {
  const [err, setError] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    link: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}/notices`, inputs);
      toast.success('Notice Add Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (err) {
      setError(err.response.data);
      toast.error('Somthing Wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div className="container flex flex-col md:mix-w-[500px] w-full  gap-5">
      <h1 className="flex justify-center items-center">Add Notice</h1>
      <form className="flex flex-col gap-5">
        <input
          className="border py-3 px-5 outline-none"
          type="text"
          placeholder="Input Notice"
          name="title"
          onChange={handleChange}
        />
        <input
          className="border py-3 px-5 outline-none"
          name="link"
          onChange={handleChange}
          type="text"
          placeholder="Input Link"
        />
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-green-500 px-5 py-2 rounded-md text-white shadow-sm"
            onClick={handleSubmit}
          >
            Add Notice
          </button>
        </div>
        {err && <p>{err}</p>}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default AddNotice;
