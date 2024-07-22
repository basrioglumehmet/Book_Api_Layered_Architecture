import { fetchBookDetail } from '@/services/book_services/fetchBookDetail';
import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import { createRef, useRef, useState } from 'react';
import { BsStack, BsZoomIn } from 'react-icons/bs';
import { motion, useAnimationControls } from 'framer-motion';
import { combineClasses } from '@/utils/tailwind/tailwind';
import BookItem from '@/components/BookItem';

export const Route = createLazyFileRoute('/$nameId')({
  component: () => <BookDetailLayout />
});

const BookDetailLayout = () => {
  const params = Route.useParams();
  const { data } = useQuery(fetchBookDetail(params.nameId));
  const zoomViewerRef = createRef<HTMLDivElement>();
  const imgRef = createRef<HTMLImageElement>();
  const [isZoomEnabled,setEnabledZoom] = useState(false)
  const timeoutRef = useRef<number | null>(null);

  const handleZoomMousePositions = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (imgRef.current && zoomViewerRef.current) {
      const imgRect = imgRef.current.getBoundingClientRect();
      const viewerRect = zoomViewerRef.current.getBoundingClientRect();
      const offsetX = e.clientX - imgRect.left;
      const offsetY = e.clientY - imgRect.top;
  
      // Zoom izleyicinin ortasını fare pozisyonuna göre ayarla
      const centerX = offsetX - viewerRect.width / 2;
      const centerY = offsetY - viewerRect.height / 2;
  
      // Yüzde konumları hesapla
      const percX = (offsetX / imgRect.width) * 100;
      const percY = (offsetY / imgRect.height) * 100;
      const perc = `${percX}% ${percY}%`;
  
      // Zoom izleyicinin pozisyonunu ayarla
      zoomViewerRef.current.style.transform = `translate(${centerX}px, ${centerY}px)`;
      zoomViewerRef.current.style.backgroundPosition = perc;
    }
  };
  
  
  const handleZoomMouseEnterPositions = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (imgRef.current && zoomViewerRef.current) {
      setEnabledZoom(true)
    }
  };
  const handleZoomMouseLeavePositions = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (imgRef.current && zoomViewerRef.current) {
      setEnabledZoom(false)
    }
  };
  return (
    <div className='container w-full min-h-96 flex flex-col'>
      <div className='flex'>
        <div className='flex-1 flex items-center justify-center h-[591px] aspect-square'>
          <figure className='relative overflow-hidden'>
            <img
              src={data?.data.detail.bookGalleries[0].src}
              ref={imgRef}
              className={combineClasses("w-full h-full cursor-none transition-all")}
              onMouseMove={handleZoomMousePositions}
              onMouseLeave={handleZoomMouseLeavePositions}
              onMouseEnter={handleZoomMouseEnterPositions}
            />
            {
              isZoomEnabled && <div className='bg-black/50 backdrop-blur-sm w-full h-full absolute top-0 pointer-events-none'>

              </div>
            }
            <motion.div 
              className={combineClasses("absolute w-28 h-28 top-0 left-0  pointer-events-none hidden", {
                "block":isZoomEnabled,
              })}
             
            >
              <div
                className='w-full h-full border-2 border-black rounded-lg relative'
                ref={zoomViewerRef}
                style={{
                  backgroundImage: `url(${data?.data.detail.bookGalleries[0]?.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '500%',
                }}
              >
                <div className='absolute -top-2 -left-1 w-5 h-2 bg-border rounded-r-xl'/>
                <div className='absolute top-0  -left-3 w-6 h-2  rounded-r-xl rotate-90 bg-border'/>
                <div className='absolute -bottom-2  -left-1 w-5 h-2 bg-border  rounded-r-xl'/>
                <div className='absolute bottom-0  rounded-l-xl  -left-3 w-6 h-2 rotate-90 bg-border'/>
                <div className='absolute -top-2 rounded-l-xl  -right-1 w-5 h-2 bg-border'/>
                <div className='absolute top-0   rounded-r-xl -right-3 w-6 h-2 rotate-90 bg-border'/>
                <div className='absolute -bottom-2  rounded-l-xl  rounded-r-xl -right-1 w-5 h-2 bg-border'/>
                <div className='absolute bottom-0 rounded-l-xl   -right-3 w-6 h-2 rotate-90 bg-border'/>
              </div>
            </motion.div>
          </figure>
        </div>
        <div className='flex-1 flex flex-col space-y-5'>
          <div className='flex flex-col'>
            <span className='text-xl font-bold'>{data?.data.detail.author}</span>
            <span className='text-2xl'>{data?.data.detail.name}</span>
            <span className='text-lg my-5 font-bold text-primary'>{data?.data.detail.brand}</span>
          </div>
          <div className='font-bold text-black'>
            <span className='text-3xl'>{String(data?.data.detail.priceString).replace('.', ',')} TL</span>
          </div>
          <div className='font-normal text-black'>
            <div className='text-md flex gap-5'>
              Yayın Evi Liste Fiyatı:
              <div className='line-through text-label'>{String(data?.data.detail.priceString).replace('.', ',')} TL</div>
            </div>
          </div>
          <div className='font-bold text-black flex items-center gap-2 text-xl my-5d'>
            <BsStack />
            <span>Stok Adedi:</span>
            <span>{data?.data.detail.quantity}</span>
          </div>
        </div>
      </div>
      <div className='flex px-4 gap-5 text-xl font-bold mb-5'>
        <span className='text-primary border-b-4 border-primary py-2'>Ürün Açıklaması</span>
        <span className='text-black border-b-4 border-transparent py-2'>Ödeme Seçenekleri</span>
        <span className='text-black border-b-4 border-transparent py-2'>Yorumlar</span>
      </div>
      <div className='p-4 bg-lightblue'>
        <p className='whitespace-pre-line'>{data?.data.detail.description}</p>
        <div className='flex flex-col space-y-2 my-5 capitalize'>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Yayinevi</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.brand}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Yazar</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.author}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Barkod</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.barcode}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Boyut</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.bookSize}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Sayfa sayisi</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.pageSize}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Cilt tipi</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.skinType}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Kagit cinsi</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.paperType}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Basim yili</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.publicationDate}</span>
          </div>
          <div className='flex'>
            <span className='flex items-center w-36'>
              <span className='text-center font-semibold flex-1'>Cevirmen</span>
              <span className='justify-end flex'>:</span>
            </span>
            <span className='ml-5'>{data?.data.detail.translator}</span>
          </div>
        </div>
      </div>
      <div className='text-xl font-bold'>
        <span>Yorumlar</span>
      </div>
      <div className='p-4 bg-lightblue'>
        <span>Henüz yorum yapılmamış</span>
        </div>
      <div className='flex flex-col items-center w-full'>
      <div className='w-full text-center'>
      <span className='text-black  inline-block py-4 text-xl font-bold'>Bu Yazarın Diğer Kitapları</span>
      
      <hr />
      </div>
      <div className='flex items-start justify-start w-full py-4'>
      {
        data?.data.other_books.map((book) => (
          <BookItem data={book}/>
        ))
      }
      </div>
      </div>
    </div>
  );
};
