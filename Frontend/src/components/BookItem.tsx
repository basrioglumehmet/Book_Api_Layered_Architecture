import React from "react";
import img from "@/assets/books/ilber1.jpg";
import { BsBasket3Fill, BsHeart } from "react-icons/bs";
type Props = {};

const BookItem = (props: Props) => {
  return (
    <div className="hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-3 cursor-pointer  flex-1 group relative">
      <div className="flex flex-col space-y-5 relative">
        <div className="flex items-center justify-center h-60 w-full">
          <img src={img} alt="" className="w-full h-full  object-contain" />
        </div>
        <div>
          <h5 className="text-sm font-bold">Ilber Ortayli</h5>
          <p className="text-sm font-normal">Gel Dünyayı Keşfedelim</p>
          <div className="mt-5 font-bold text-primary text-sm">
            Kronik Kitap
          </div>
          <div className="mt-5 font-bold text-black text-xl group-hover:hidden">
            135,66 TL
          </div>
          <div className="mt-2 font-bold text-white bg-primary p-2 hidden group-hover:flex items-center gap-5 hover:bg-primary/50">
            <BsBasket3Fill />
            <span>Sepete Ekle</span>
          </div>
        </div>
      </div>

      <div className="top-2 right-2 absolute">
        <div className="w-10 h-10 bg-primary text-white flex items-center justify-center text-xl">
          <BsHeart />
        </div>
      </div>
    </div>
  );
};

export default BookItem;
