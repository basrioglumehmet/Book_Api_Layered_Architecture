import { createFileRoute } from '@tanstack/react-router'

import React from 'react'
export const Route = createFileRoute('/_layout_user/user/_layout_user_basket_list/collections')({
  component: () => <Collections/>
})


const CollectionBox = (props:{title:string}) => (
  <div className='border rounded-md w-[49%] '>
    <div className='border-b p-4'>
      <span className='font-semibold'>{props.title}</span>
    </div>
    <div className='p-16'>

    </div>
  </div>
)

type Props = {}

function Collections({}: Props) {
  return (
    <div>
      <div className='flex flex-wrap gap-2 my-5'>
        <CollectionBox title='Liste '/>
        <CollectionBox title='Liste '/>
        <CollectionBox title='Liste '/>
      </div>
    </div>
  )
}
