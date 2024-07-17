import IKButton, { ButtonType } from "@/components/buttons/IKButton";
import TabList from "@/components/TabList";
import useNotification from "@/utils/events/notification/useNotification";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { BsBasket3, BsBasket3Fill, BsPrinter, BsPrinterFill, BsShareFill, BsTrash3, BsTrash3Fill } from "react-icons/bs";

export const Route = createFileRoute("/_layout_user/user/_layout_user_basket_list/favorites")({
  component: () => <Favorites />,
});

const FavoriteItem = (props:{pictureUrl:string,bookName:string,streamer:string,price:string}) =>{
  return (
    <div>
      <div className="flex items-center justify-between gap-5 my-5">
        <div>
          <input type="checkbox" />
        </div>
        <div className="flex-1 flex items-center gap-5">
          <div className="border p-1 w-[70px] h-[46px] rounded-md">
            <img src={props.pictureUrl} className=" w-full h-full object-contain"/>
          </div>
          <div className="flex flex-col  text-sm">
            <span className="font-semibold">{props.streamer}</span>
            <span>{props.bookName}</span>
          </div>
        </div>
        <div>
          <span className="text-primary font-semibold text-xl">{props.price}</span>
        </div>
        <BsTrash3 />
      </div>
    </div>
  )
}

type Props = {};

const Favorites = (props: Props) => {
  const { sendNotification } = useNotification();
  React.useEffect(() => {
    sendNotification("TEST");
  }, []);
  return <div>
    <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
     <FavoriteItem 
    bookName="Her şeye hakkınız olabilir umutsuz olmaya asla !"
    pictureUrl={"https://www.istanbulkitapcisi.com/her-seye-hakkiniz-olabilir-umutsuz-olmaya-asla-soylesi-masa-kitap-mujdat-gezen-985777-95-K.jpg"}
    price="135,00 TL"
    streamer="Masa Kitap"
    />
    <div className="flex gap-5 items-center">
      <IKButton type={ButtonType.PRIMARY} text="Seçilenleri Sepete Ekle" icon={<BsBasket3Fill/>}/>
      <IKButton type={ButtonType.SECONDARY}  text="Seçilenleri Sil"  icon={<BsTrash3Fill/>}/>
      <IKButton type={ButtonType.SECONDARY} text="Yazdır"  icon={<BsPrinterFill/>}/>
      <IKButton type={ButtonType.SECONDARY} text="Paylaş"  icon={<BsShareFill/>}/>
    </div>
  </div>;
};
