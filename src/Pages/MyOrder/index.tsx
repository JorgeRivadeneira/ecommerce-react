import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname;
    const path = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    let index = 0;
    if(path === 'last'){
        index = context.order?.length - 1;
    }else{
        index = parseInt(currentPath.substring(currentPath.lastIndexOf('/') + 1));
    }
    
    return (
        <Layout>
            <div className="flex items-center w-80 relative justify-center mb-2">
                <Link to={'/my-orders'} className="absolute left-0">
                <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'></ChevronLeftIcon>
                </Link>
                <h1>My Order</h1>      
            </div>            
            <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map(product => (      //para mostrar el último     
                        <OrderCard
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        />
                ))
                }
            </div>            
        </Layout>
    )
  }

  export default MyOrder