// import {Card} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {ArrowRight} from 'lucide-react'
const PromoEspecial = () => {
    return (
        <div className='bg-busines-200 p-4 flex justify-between rounded-lg'>
            {/* Image */}
            <img className='rounded-md w-[100px] h-[100px]' src="https://png.pngtree.com/png-clipart/20230914/ourmid/pngtree-sausage-cheese-pizza-slice-three-dimensional-3d-gourmet-food-fast-food-png-image_10116852.png" alt="" />
            {/* Box Text */}
            <div className="text-orange-500 text-right">
                {/* Text */}
                <h2 className='text-xl font-semibold'>Promo Especial</h2>
                {/* Text Description */}
                <h4 className='font-normal leading-none text-orange-500/50'>Nachos con salsa picante especial de la casa.</h4>
                <Button className='font-medium text-base mt-2 hover:bg-orange-200 hover:text-orange-500 justify-between gap-x-2 '  size={'sm'} variant={'ghost'}>Agregar <ArrowRight className="mr-2 h-4 w-4" /> </Button>
            </div>
        </div>
    )
}

export default PromoEspecial;