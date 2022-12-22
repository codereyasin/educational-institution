import { useEffect, useState } from "react";
import axios from "axios";
import TeacherList from '../../../shared/TeacherList'
import President from "../../../shared/President";
import { useSelector } from 'react-redux'
import { selectUser } from "../../../redux/slices/authSlice";

const TeacherLs = (props) => {
  const [teachers, setTeachers] = useState();
  const [click, setClick] = useState(false);
  const [tch, setTch] = useState(true);
  const user = useSelector(selectUser)

 console.log(props)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/teachers`);
        setTeachers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container flex flex-wrap w-full items-center justify-center gap-10">
        <div className="bg-blue-400  w-full hover:bg-gray-800 ">
        <h1 className="flex item-center justify-center text-2xl font-blod py-3 text-white" onClick={() => setClick(!click)}>প্রতিষ্ঠান কমিটি</h1>
        <hr />
        {click && (
         <President   teachers={teachers} user={user}/>
        )}
      </div>

      <div className="bg-green-500 w-full hover:bg-gray-800 ">
        <h1 className="flex item-center justify-center text-2xl font-blod py-3 text-white" onClick={() => setTch(!tch)}>শিক্ষক মন্ডলী</h1>
        <hr />
        {tch && (
         <TeacherList   teachers={teachers} user={user}/>
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const {data} =await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  console.log(data)
  return {
    props: {
      res: res
    },
  }
}

export default TeacherLs;
