import {SearchIcon,XIcon} from 'lucide-react'
import {Input} from '@/components/ui/input'
import { useState,ChangeEvent } from 'react'

const InputSearch = () => {
    const [ShowIcon, setShowIcon] = useState<boolean>(false)
    const [ValueInputSearch, setValueInputSearch] = useState('')

    const handleTextChange = (e:ChangeEvent<HTMLInputElement>) => {
        setValueInputSearch(e.target.value)
        e.target.value.length > 0 ? setShowIcon(true) : setShowIcon(false)
    }
    const DeleteText = () => {
        setShowIcon(false)
        setValueInputSearch('')
    }

    return (
        <>
            <div className='flex items-center  px-2 rounded-md  text-orange-500 bg-white '>
                <SearchIcon  className='h-[16px] w-[16px]' />
                <Input value={ValueInputSearch} className='focus-visible:ring-0 focus-visible:ring-offset-0 border-0 p-0 pl-2  bg-transparent uppercase text-[#7E7E7E] placeholder:text-gray-400' placeholder='Buscar' onChange={handleTextChange}/>
                {ShowIcon && <XIcon onClick={DeleteText}  className='h-[24px] w-[24px] p-1 active:bg-orange-200 rounded-full' /> }
                
            </div>
        </>
    )
}
export {InputSearch}