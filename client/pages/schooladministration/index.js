import TeacherLs from "../../app/components/Home/TeacherList";
import Head from "next/head";

const Teacher = () => {

  return (
    <div>
      <Head>
        <title>Teacher List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="flex justify-center items-center container py-10 ">
           <TeacherLs  />
        </div>
      </div>
    </div>
  );
};

export default Teacher;
