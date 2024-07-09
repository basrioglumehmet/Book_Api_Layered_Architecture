import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import logo from "@/assets/istanbul-kitapcisi-logo.svg";
import "@/index.css";
import {
  BsBasket,
  BsBasket2,
  BsBasket3Fill,
  BsHeart,
  BsPerson,
  BsPhone,
  BsSearch,
} from "react-icons/bs";
import footerbg from "@/assets/footer-bg.png";
import footeribb1 from "@/assets/kultur_footer.png";
import footerRadar from "@/assets/radar-istanbul.png";
import world from "@/assets/world.svg";
import axess from "@/assets/footer-axess.svg";
import maximum from "@/assets/footer-maximum.svg";
import bonus from "@/assets/footer-bonus.svg";
import cardfinans from "@/assets/footer-finans.svg";
import visa from "@/assets/footer-visa-card.svg";
import troy from "@/assets/footer-troy.svg";
export const Route = createRootRoute({
  component: () => {
    const categories = [
      "Çok Satan Kitaplar",
      "Yeni Çıkan Kitaplar",
      "İBB Yayınları",
      "Kategoriler",
      "YAYINEVLERİ",
    ];
    return (
      <div className="flex flex-col min-h-screen">
        <div className="container ">
          <div className="flex gap-2 p-2 ">
            <div className="flex-[0.5] flex items-center">
              <Link to="/" className="[&.active]:text-primary font-semibold">
                <div className="w-36">
                  <img src={logo} className="w-full h-full" alt="logo" />
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <div className="w-[470px] h-[53px] border-border border rounded-full flex items-center justify-between  text-primary">
                <div className="px-4">
                  <BsSearch />
                </div>
                <div className="flex-1 px-2">
                  <input
                    type="text"
                    placeholder="Kitap Ara"
                    className="w-full h-full bg-transparent outline-none ring-0 border-none "
                  />
                </div>
                <div className="px-2">
                  <div className="bg-primary text-white font-semibold w-20 flex items-center justify-center p-2 rounded-full h-full">
                    Ara
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-around gap-5">
              <ul className="gap-5 flex items-center flex-1  justify-around text-sm font-bold">
                <li className="flex items-center justify-center gap-2">
                  <div className="relative text-xl">
                    <BsHeart />
                    <div className="absolute -top-2 -right-2 text-[10px] rounded-full p-2 bg-badge text-black w-4 h-4 flex items-center justify-center">
                      9+
                    </div>
                  </div>
                  <Link to="/favorites" className="[&.active]:text-primary ">
                    Favorilerim
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div className="relative text-xl">
                    <BsPerson />
                  </div>
                  <Link to="/signin" className="[&.active]:text-primary ">
                    Giriş Yap
                  </Link>
                </li>
              </ul>
              <div className="px-2 h-[40px] ">
                <div className="bg-primary text-white font-semibold w-20 flex items-center justify-center p-2 rounded-full h-full gap-2">
                  <BsBasket3Fill />
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-5">
            {categories.map((category, index) => {
              return (
                <div className="flex-1 text-center hover:bg-primary p-2 uppercase font-bold text-sm hover:text-white cursor-pointer">
                  {category}
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="flex-1 my-10">
          <Outlet />
        </div>
        <hr />
        <div className="bg-footer h-[745px] relative flex items-center justify-center flex-col">
          <div className="h-1/2 w-full flex justify-around container py-14">
            <div>
              <h1 className="text-xl font-bold">Hızlı Erişim</h1>
              <ul>
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
                <li>Mağazalarımız</li>
                <li>Yardım</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold">Önemli Bilgiler</h1>
              <ul>
                <li>Sipariş Takibi</li>
                <li>Kargo Teslimatı</li>
                <li>İptal ve İadeler</li>
                <li>Gizlilik ve Güvenlik</li>
                <li>Çerez Politikası</li>
                <li>KVKK Aydınlatma Metni</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-bold">Müşteri Destek Birimi</h1>
              <span>Haftaiçi : 09:00 - 18:00</span>
              <ul>
                <li className="flex gap-2 items-center">
                  <div>
                    <BsPhone />
                  </div>
                  <div>0850 480 8946</div>
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="h-1/2 w-full flex container">
            <div className="flex flex-col space-y-5 flex-1 px-20">
              <img src={footeribb1} className="w-80" />
              <img src={footerRadar} className="w-80" />
            </div>
            <div className="flex-1 px-10 flex flex-col font-semibold">
              <span>
                Akçaburgaz Mah. Mercedes Cad. 1584 Sokak No: 21
                Esenyurt/İstanbul
              </span>
              <span>Mersis No: 0563065227000001</span>
              <span className="my-10">
                İBB Kültür AŞ Tüm hakları saklıdır. © 2024
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex items-center justify-center">
            <img src={footerbg} />
          </div>
        </div>

        <hr />
        <div className="flex w-full container items-center justify-between p-6">
          <img src={world} className="w-[64px]" />
          <img src={axess} className="w-[64px]" />
          <img src={maximum} className="w-[64px]" />
          <img src={bonus} className="w-[64px]" />
          <img src={cardfinans} className="w-[64px]" />
          <img src={visa} className="w-[64px]" />
          <img src={troy} className="w-[64px]" />
        </div>
        <hr />
        <div className="flex w-full bg-footer  items-center justify-between p-6 font-bold">
          <div className="container flex items-center justify-center">
            <span className="text-[#ec6408] ">T</span>
            <span className="">- Soft</span>
            <div className="font-normal mx-2">
              <span>
                {" "}
                ile yapılan yazılımın klon projesidir. Github:@basrioglumehmet
              </span>
            </div>
          </div>
        </div>
        <hr />
        <TanStackRouterDevtools />
      </div>
    );
  },
});
