import IKButton, { ButtonType } from "@/components/buttons/IKButton";
import { createLazyFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";
import { BsBox2, BsHeart, BsHeartFill } from "react-icons/bs";

export const Route = createLazyFileRoute("/_layout_user/user/")({
  component: () => <UserIndex/>
});



const UserIndexCardItem = (props:{icon:ReactNode,title:string,href:string}) => {
  return (
    <div className="border p-4 flex flex-col items-center justify-center h-[124px] w-[170px] group rounded-md hover:border-primary cursor-pointer">
      <div className="bg-lightblue w-10 h-10 border flex items-center justify-center rounded-full group-hover:border-primary">
      {props.icon}
      </div>
      <div className="flex-1 flex items-end justify-center font-semibold group-hover:text-primary">
      <span>{props.title}</span>
      </div>
    </div>
  )
}

const UserIndexShipmentStatusCode = () => {
  return (<div className="w-[370px] h-[124px] bg-lightblue border rounded-md p-4 space-y-5">
    <div className="flex items-center gap-5">
      <BsBox2 />
      <span className="font-semibold text-xl">Sipariş Takip</span>
    </div>
    <div className="border bg-white w-full h-10 rounded-md flex items-center">
      <input type="text" placeholder="Sipariş Numarası:"  className="flex-1 bg-transparent px-2 ring-0 outline-none border-none placeholder:text-sm"/>
      <IKButton text="Ara" type={ButtonType.BLACK} disableLeftRounded/>
    </div>
  </div>)
}

const UserIndex = () => {
  return (<div>
    <div className="flex flex-wrap gap-5">
      <UserIndexShipmentStatusCode />
      <UserIndexCardItem href="/" icon={<BsHeart />} title="Siparişlerim" />
      <UserIndexCardItem href="/" icon={<BsHeart />} title="Favorilerim" />
      <UserIndexCardItem href="/" icon={<BsHeart />} title="Hediye Çeklerim" />
      <UserIndexCardItem href="/" icon={<BsHeart />} title="Adreslerim" />
      <UserIndexCardItem href="/" icon={<BsHeart />} title="Puanlarım" />
    </div>
  </div>)
}
