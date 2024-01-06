import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface OrdersCardProps{
    totalPrice: number,
    totalProducts: number,
}

const OrdersCard = ({totalPrice, totalProducts} : OrdersCardProps) => {
    // let renderXMarkIcon: ReactElement | null = null;

    return (
        <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">01.02.24</span>
                    <span  className="font-light">{totalProducts} articulos</span>                    
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">{totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    );
}

export default OrdersCard