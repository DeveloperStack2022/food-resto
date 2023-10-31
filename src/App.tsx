import './App.css'
import {InputSearch} from '@/components/Input-Search/input-search'
import CardPromo from '@/components/Promo-Especial/card-promo-especial'
import TextHeaderTwo from '@/components/Headers/text-headers-two'
import CardSlider from '@/components/Sliders/card-sliders'

function App() {
  return (
    <div className='w-full overflow-x-hidden'>
      <InputSearch />
      <TextHeaderTwo styleText='font-medium text-sm text-orange-500 active:bg-orange-100 px-1 rounded-md self-end ' styleTitle='font-medium text-lg '  text='Ver mas' title='Ofertas Especiales' />
      <CardPromo />
      <TextHeaderTwo styleText='font-medium  text-sm text-orange-500 active:bg-orange-100 px-1 rounded-md self-end' styleTitle='font-medium text-lg '  text='Ver mas' title='Categorias' />
      <CardSlider data={[
        {
          price:'20.50',
          sub_title:'Pizza de peperoni',
          title:'Pizza',
          url_img:'https://png.pngtree.com/png-clipart/20230409/ourmid/pngtree-pepperoni-pizza-on-white-png-image_6697077.png'
        },
        {
          price:'20.50',
          sub_title:'Pizza de peperoni',
          title:'Pizza',
          url_img:'https://png.pngtree.com/png-clipart/20230409/ourmid/pngtree-pepperoni-pizza-on-white-png-image_6697077.png'
        },
        {
          price:'20.50',
          sub_title:'Pizza de peperoni',
          title:'Pizza',
          url_img:'https://png.pngtree.com/png-clipart/20230409/ourmid/pngtree-pepperoni-pizza-on-white-png-image_6697077.png'
        },
        {
          price:'20.50',
          sub_title:'Pizza de peperoni',
          title:'Pizza',
          url_img:'https://png.pngtree.com/png-clipart/20230409/ourmid/pngtree-pepperoni-pizza-on-white-png-image_6697077.png'
        },
      ]} />
    </div>
  )
}

export default App

