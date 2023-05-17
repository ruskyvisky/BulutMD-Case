import React from 'react'

export default function mobileMenuItem({label , onClick}) {
  return (
    <div className='px-3 text-center text-white hover:underline' onClick={onClick}>
    {label}
</div>
  )
}
