import {gsap} from 'gsap'
import {Draggable} from 'gsap/Draggable'
import { useEffect, useRef } from 'react'
gsap.registerPlugin(Draggable)

export type IProps =  {
    url_img:string;
    title:string;
    sub_title:string;
    price:string;
}

const CardSlideComponent = (props:IProps) => {
    return (
        <div className='bg-white p-2 rounded-md text-left flex-shrink-0 w-[200px] '>
            <img src={props.url_img} alt="" className='bg-gray-100 rounded-md mb-2 '/>
            <h2 className='font-bold text-xl text-primary'>{props.title}</h2>
            <h4 className='text-gray-500'>{props.sub_title}</h4>
            <div className="">
                <span className='font-semibold text-lg '>${props.price}</span>
            </div>
        </div>
    )
}

type PropsMain = {
    data: IProps[]
}


const SlideContainer = (props:PropsMain) => {
    
    const contentSlide =  useRef(null)
    
    useEffect(() => {
        Draggable.create(contentSlide.current,{
            type: 'x',
            edgeResistance:1,
            bounds:{
                minX: -200 * (props.data.length - 1),
                maxX:0
            }
        })
        
      return () => {}
    }, [])
        

    return (
        <div ref={contentSlide} className={`flex gap-x-4 w-[${200 * props.data.length}%] `}>
            {props.data.map((item,key) => (
                <CardSlideComponent key={key} url_img={item.url_img} price={item.price} sub_title={item.sub_title} title={item.title} />
            ))}
        </div>
    )
}

export default SlideContainer