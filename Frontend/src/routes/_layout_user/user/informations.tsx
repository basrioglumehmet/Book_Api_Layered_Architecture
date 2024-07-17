import IKButton, { ButtonType } from '@/components/buttons/IKButton';
import TextInput, { TextInputHandle } from '@/components/inputs/TextInput';
import { createFileRoute } from '@tanstack/react-router'
import React from 'react';

export const Route = createFileRoute('/_layout_user/user/informations')({
  component: () => <UserInformationLayout />
})

const UserInformationLayout = () => {
  const textInputRef = React.useRef<TextInputHandle>(null);
  return (<div className='flex gap-10 h-full w-full'>
    <div className='border flex-1 h-full rounded-md p-5 space-y-5 text-sm'>
    <div className='w-full h-10 '>
    <TextInput ref={textInputRef} placeholder="Adınız ve Soyadınız" />
    </div>
    <div className='w-full h-10 '>
    
    <TextInput ref={textInputRef} placeholder="E-posta" />
    </div>
    <div className='w-full h-10 '>
    
    <TextInput ref={textInputRef} placeholder="Adres" />
    </div>
    <div className='w-full h-10 '>
    
    <TextInput ref={textInputRef} placeholder="İl" />
    </div>
    <div className='w-full h-10 '>
    
    <TextInput ref={textInputRef} placeholder="İlçe" />
    </div>
    <div className='w-full h-10'>
    <IKButton text='Güncelle' type={ButtonType.PRIMARY} />
    </div>
    </div>
    <div className='flex flex-col flex-1 gap-5 text-sm'>
    <div className='border w-full h-full rounded-md p-5 space-y-5'>
      <div className='text-black font-semibold  space-y-2'>
        <span>Şifre Bilgilerim</span>
        <div className='w-1/3 bg-primary h-1'>

        </div>
      </div>
    <div className='w-full h-10 '>
    
    <TextInput ref={textInputRef} placeholder="Mevcut Şifre" />
    </div>
    <div className='w-full h-10 '>
    
    <TextInput ref={textInputRef} placeholder="Yeni Şifre" />
    </div>
    <div className='w-full h-10'>
    <IKButton text='Güncelle' type={ButtonType.PRIMARY} />
    </div>
</div>
<div className=' w-full h-full rounded-md'>

</div>
    </div>
  </div>)
}