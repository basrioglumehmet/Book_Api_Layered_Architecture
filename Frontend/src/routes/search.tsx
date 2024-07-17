import BookItem from '@/components/BookItem';
import IKButton, { ButtonType } from '@/components/buttons/IKButton';
import Checkbox from '@/components/inputs/Checkbox';
import TextInput, { TextInputHandle } from '@/components/inputs/TextInput';
import { queryClient } from '@/main';
import { getBooksBySearchQueryOption } from '@/services/book_services/search';
import { Book } from '@/types/book';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import React from 'react';

export const Route = createFileRoute('/search')({
  component: () => <SearchLayout/>,
    validateSearch: (search: Record<string, unknown>) => {
        return {
            q: search.q as string
        };
    },
});

const SearchLayout = () => {
  const router = Route.useSearch();
  const {data,isLoading} = useQuery(getBooksBySearchQueryOption(router.q));
  const textInputRef = React.useRef<TextInputHandle>(null);
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  if(isLoading){
    return (<div className='container flex flex-col items-center justify-center min-h-96'>
      <div className='loader'/>
    </div>)
  }
  else if(!data?.success){
    return (<div className='container flex flex-col items-center justify-center min-h-96'>
     Üzgünüz, aradığınız kitap, kategori veya marka bulunamadı.
    </div>)
  }
  else{
    return (
      <div className='container flex'>
        <div className='flex flex-col flex-[0.25] space-y-5'>
          
        
        <h1 className='font-semibold text-primary text-md px-2'>Çok Satan Kitaplar</h1>
          <h1 className='font-bold uppercase text-primary text-lg px-2'>Fiyat Aralığı</h1>
          <div className='px-2 text-sm  space-x-2 flex '>
           <div className='w-full h-10'>
           <TextInput ref={textInputRef} onChange={() => {}} placeholder='0 TL' type='text' />
           </div>
           <div className='flex items-center'>
            -
           </div>
           <div className='w-full h-10'>
           <TextInput ref={textInputRef} onChange={() => {}} placeholder='1000 TL' type='text' />
           </div>
          </div>
          <h1 className='font-bold uppercase text-primary text-lg px-2'>Yazarlar</h1>
          <div className='px-4 text-sm'>
          <Checkbox ref={checkboxRef} text='İlber ortaylı' className="additional-styles w-6 h-6" />
          </div>
          <div className='w-full h-10'>
          <IKButton text='Seçimleri Filtrele' type={ButtonType.PRIMARY} />
          </div>
        </div>
        <div className='flex flex-wrap flex-1 px-6'>
        {data?.success && data.data.map((book:Book) => {
          return (
            <BookItem data={book}/>
          )
        })}
        </div>
      </div>
    )
  }
}