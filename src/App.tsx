import { useState } from 'react'
import './App.css'
import CardPromo from '@/components/Promo-Especial/card-promo-especial'
import TextHeaderTwo from '@/components/Headers/text-headers-two'
function App() {
  return (
    <>
    <TextHeaderTwo styleText='font-ligth hover:text-orange-600 hover:pointer' styleTitle='font-semibold '  text='Ver mas' title='Ofertas Especiales' />
      <CardPromo />
    </>
  )
}

export default App
