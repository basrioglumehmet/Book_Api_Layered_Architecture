import TabList from '@/components/TabList'
import { combineClasses } from '@/utils/tailwind/tailwind'
import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { ReactNode } from 'react'
import { BsHeart, BsHeartFill, BsTagsFill } from 'react-icons/bs'

export const Route = createFileRoute('/_layout_user/user/_layout_user_basket_list')({
  component: () => <UserBasketListLayout/>
})

const UserBasketListItem = (props:{text:string,href:string,isActive?:boolean,icon?:ReactNode}) =>{
  return (
    <Link to={props.href} className={ combineClasses("text-label font-semibold text-xl border-b-2 flex-[0.2] flex items-center gap-5 py-2",{
      "border-b-primary text-primary":props.isActive
    })}>
      {props.icon ?? <></>}
      <span>{props.text}</span>
    </Link>
  )
}


function UserBasketListLayout(){
  const route = useRouterState();
  return (
    <div>
      <div className='flex items-center '>
      <UserBasketListItem 
      icon={<BsHeartFill />}
      text={"Favoriler"} href='/user/favorites' isActive={route.location.pathname == "/user/favorites"} />
      <UserBasketListItem 
          icon={<BsTagsFill />}
      text={"Koleksiyonlar"} href='/user/collections' isActive={route.location.pathname == "/user/collections"}/>
      </div>
      <Outlet />
    </div>
  )
}