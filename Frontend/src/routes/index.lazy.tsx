/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createLazyFileRoute } from "@tanstack/react-router";
import sliderImage from "@/assets/soytari.jpg";
import sliderImage2 from "@/assets/13.jpg";
import { useRef, useState, useEffect } from "react";
import { combineClasses } from "@/utils/tailwind/tailwind";
import BookItem from "@/components/BookItem";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import arkadayaylilar from "@/assets/arkadayaylilar.jpg";
import MostPopularCategories from "@/components/MostPopularCategories";
interface SlideProps {
  component: React.ComponentType;
}

export const Route = createLazyFileRoute<SlideProps>("/")({
  component: Index,
});

function Index() {
  const slideImages: string[] = [sliderImage, sliderImage2];
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Function to scroll to the next slide
  const scrollToNextSlide = () => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const itemWidth = containerRef.current.offsetWidth;

      // Calculate next slide index
      const nextSlide = (currentSlide + 1) % slideImages.length;

      // Calculate next scroll position
      const nextScrollLeft = nextSlide * itemWidth;

      // Scroll to the next slide
      containerRef.current.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });

      // Update current slide index, loop back to 0 if end is reached
      setCurrentSlide(nextSlide);
    }
  };

  // Automatically scroll to the next slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, scrollToNextSlide]);

  // Reset scroll position to the beginning when reaching the end
  useEffect(() => {
    const scrollToBeginning = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: 0,
          behavior: "smooth", // Ensure smooth scrolling
        });
      }
    };

    if (currentSlide === 0) {
      scrollToBeginning();
    }
  }, [currentSlide]);

  return (
    <div className="container py-3 space-y-10">
      <div className="relative flex w-full">
        <div
          ref={containerRef}
          className="w-[80vw] h-[500px] overflow-x-scroll flex items-center scrollbar-none "
        >
          {slideImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-full h-full "
              alt={`Slide ${index}`}
            />
          ))}
        </div>

        <div className="bottom-5 left-1/2 -translate-x-1/2 flex absolute items-center gap-2">
          {slideImages.map((i, index) => {
            return (
              <div className="bg-footer w-5 h-5 rounded-full p-1">
                <div
                  className={`
                  ${combineClasses("transition-all duration-1000", {
                    "bg-primary w-full h-full rounded-full":
                      currentSlide == index,
                    "bg-transparent  w-full h-full rounded-full":
                      currentSlide != index,
                  })}
                  `}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 className="w-full text-center font-bold text-xl">
        Öne Çıkan Kitaplar
      </h1>

      <hr />
      <div className="flex   justify-between">
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
      <hr />
      <div className="flex   justify-between">
        <img src={hero1} />
        <img src={hero2} />
      </div>
      <h1 className="w-full text-center font-bold text-xl my-10">
        Öne Çıkan Kategoriler
      </h1>
      <MostPopularCategories />
      <hr />
      <div className="flex   justify-between gap-5 py-20">
        <div className="flex-1">
          <h2 className="font-bold text-2xl">Haftanın Kitabı</h2>
          <h1 className="font-bold text-5xl">Arkada Yaylılar Çalıyor;</h1>
          <p>
            “Arkamda yaylılar çalıyor. Biri bir filmde ya da dizide gururla
            yürüdüğünde çaldığı gibi. Hep hüzünlü şeyler çaldığını bildiğim
            yaylılar, ben gülümserken bambaşka duyuluyor. Sonunda hüzünlü şeyler
            çalmadıkları için mi gülümsüyorum, yoksa gülümseyebildiğim için mi
            hüzünlü şeyler çalmıyorlar?” Melikşah Altuntaş ilk kitabı Arkada
            Yaylılar Çalıyor’da kayıpların yasını tutmaya, kördüğüm ilişkilere,
            günlükler üzerinden iletişim kuran anne ve çocuklara, sorunlu
            baba-oğulllara dair öyküleri bir araya getiriyor. Yer yer özkurmaca
            ile flört eden hikâyeler, yaşamın tüm karanlığının içine gizlenmiş
            olan hayatta kalma arzusuna doğru yol alıyor. Bütün ölümlere, terk
            edişlere, kayıplara ise zamanı sımsıkı tutmak isteyen alelade
            fotoğraflar eşlik ediyor. Sayfalar elimizin altından akıp giderken
            Altuntaş, hüzünlü vedaların arkasında usul usul çalan yaylılara
            işaret ediyor.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={arkadayaylilar} className="w-full h-96 object-contain" />
        </div>
      </div>
    </div>
  );
}
