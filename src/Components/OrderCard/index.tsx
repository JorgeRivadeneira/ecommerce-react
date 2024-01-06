import { XMarkIcon } from '@heroicons/react/24/solid'
import { ReactElement } from 'react';

interface OrderCardProps{
    id: number,
    title: string,
    imageUrl: string,
    price: number,
    handleDelete?: (id: number) => void,
}

const OrderCard = ({id, title, imageUrl, price, handleDelete} : OrderCardProps) => {
    let renderXMarkIcon: ReactElement | null = null;
    if(handleDelete){
        renderXMarkIcon = <XMarkIcon onClick={()=>{handleDelete(id)}} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>;
    }
    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-medium'>$ {price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
}

export default OrderCard