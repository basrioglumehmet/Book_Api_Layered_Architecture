import { truncateText } from "@/utils/string/string";
import { Link } from "@tanstack/react-router";
import React from "react";
import {
  BsEnvelope,
  BsEnvelopeAt,
  BsList,
  BsMailbox,
  BsPeople,
  BsPerson,
  BsPower,
} from "react-icons/bs";

type Props = {};

const UserProfileCard = (props: Props) => {
  return (
    <div className="w-[200px] bg-lightblue items-center flex flex-col min-h-96 space-y-5">
      <div className="w-32 h-32 p-2 rounded-full bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ">
        <img
          src="https://i.pinimg.com/564x/ff/de/39/ffde39fbceb3f2c9fb8c11140eab492e.jpg"
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <div className="flex font-bold flex-col text-sm text-center">
        <span>Mehmet Basrioğlu</span>
        <span className="font-normal">
          {truncateText("emailadresi@gmail.com", 0, 15)}
        </span>
      </div>
      <div className="p-2 w-full flex-1 flex">
        <div className="bg-white border rounded flex-1 flex flex-col">
          <Link to="/user" className=" flex items-center border-b p-2">
            <div className="flex items-center gap-5 text-2xl  justify-center flex-1 ">
              <div className="w-10 h-10 bg-lightblue  flex items-center justify-center rounded-full">
                <BsList />
              </div>
            </div>
            <div className="flex-1 text-sm font-bold">
              <span className="inline-block ">Hesabım</span>
            </div>
          </Link>
          <Link to="/user/informations" className=" flex items-center border-b p-2">
            <div className="flex items-center gap-5 text-2xl  justify-center flex-1 ">
              <div className="w-10 h-10 bg-lightblue  flex items-center justify-center rounded-full">
                <BsPerson />
              </div>
            </div>
            <div className="flex-1 text-sm font-bold">
              <span className="inline-block ">Kişisel Bilgilerim</span>
            </div>
          </Link>
          <Link to="/user/messages" className=" flex items-center border-b p-2">
            <div className="flex items-center gap-5 text-2xl  justify-center flex-1 ">
              <div className="w-10 h-10 bg-lightblue  flex items-center justify-center rounded-full relative">
                <BsEnvelope />

                <div className="absolute -top-0 -right-0 text-[10px] rounded-full p-2 bg-green text-white w-4 h-4 flex items-center justify-center">
                  3
                </div>
              </div>
            </div>
            <div className="flex-1 text-sm font-bold">
              <span className="inline-block ">Mesajlarım</span>
            </div>
          </Link>
          <Link to="/" className=" flex items-center p-2">
            <div className="flex items-center gap-5 text-2xl  justify-center flex-1 ">
              <div className="w-10 h-10 bg-lightblue  flex items-center justify-center rounded-full">
                <BsPower />
              </div>
            </div>
            <div className="flex-1 text-sm font-bold">
              <span className="inline-block ">Çıkış</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
