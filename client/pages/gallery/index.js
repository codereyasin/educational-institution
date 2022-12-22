import React, { useEffect, useState } from "react";
import axios from "axios"
const Gallery = () => {
  const [image, setImage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/gallery`);
        setImage(res.data); 
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container flex flex-wrap justify-center items-center gap-10 py-10">
       {image && image?.map(img => (
      <div key={img.id}>
          <img className="w-[220px] h-[220px] object-contain border-i rounded-lg " src={img.image} alt="" />
      </div>
       ))}
    </div> 
  );
};

export default Gallery;
