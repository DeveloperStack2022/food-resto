import './App.css'
import {InputSearch} from '@/components/Input-Search/input-search'
import CardPromo from '@/components/Promo-Especial/card-promo-especial'
import TextHeaderTwo from '@/components/Headers/text-headers-two'

function App() {
  return (
    <>
      <InputSearch />
      <TextHeaderTwo styleText='font-medium text-sm text-orange-500 active:bg-orange-100 px-1 rounded-md self-end ' styleTitle='font-medium text-lg '  text='Ver mas' title='Ofertas Especiales' />
      <CardPromo />
      <TextHeaderTwo styleText='font-medium  text-sm text-orange-500 active:bg-orange-100 px-1 rounded-md self-end' styleTitle='font-medium text-lg '  text='Ver mas' title='Categorias' />
    </>
  )
}

export default App

