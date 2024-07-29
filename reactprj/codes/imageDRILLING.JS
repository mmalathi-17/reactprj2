import React from 'react'
import Comp1 from './Comp1'
import pic from './hidi.jpg'
export default function App({}) {
  const pic1 = {
   img:pic,
   uid:'nature'
  };

  return (
    <div>
      <Comp1 data={pic1} />
    </div>
  )
}
