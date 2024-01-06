import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex items-center w-80 relative justify-center mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>      
      </div>
      {
        context.order?.map((order, index) => (          
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />          
          </Link>
        ))
      }
    </Layout>
  )
  }

  export default MyOrders