'use client'
import React from "react";
import { useState } from "react";
// import { AiOutlineExpandAlt } from "react-icons/ai";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";



const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryTab = [
// you can add more image if you want
    {
      imageUrl: "iot.png",
      type: "Internet Of Things",
      title: "IOT",
    },
    {
      imageUrl: "cloud1.avif",
      type: "Cloud Computing",
      title: "CC",
    },
    {
      imageUrl: "eng.jpg",
      type: "Diploma Of Associate Engineering",
      title: "DAE",
    },
 
  ];



  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 1550,
    height: 940,
    srcSet: [
      { src: item.imageUrl, width: 850, height: 450 },
      { src: item.imageUrl, width: 850, height: 450 },
      { src: item.imageUrl, width: 850, height: 450 },
    //   { src: item.imageUrl, width: 2048, height: 1365 },
    //   { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-1200 mx-2">
        <h1 className="text-center font-bold text-5xl text-red-500 pt-2 pb-2 ">IMAGE GALLERY</h1>


      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[50vw] h-300 relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
    
        slides={slides}
      />
   
   
   
    </div>
  );
};

export default Gallery;