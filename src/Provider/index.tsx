import { ReactNode, useEffect, useState } from "react";
import { ShoppingCartContext } from "../Context";
import { Order } from "../Types/Order";

interface ShoppingCartProviderProps{
    children: ReactNode;
}

const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({children}: ShoppingCartProviderProps) => {
    const [count, setCount] = useState<number>(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false);
    const [productToShow, setProductToShow] = useState<Product>({} as Product);
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    //Checkout side menu - open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Shoping cart - Order
    const [order, setOrder] = useState<Order[]>([]);

    //Get Products
    const [items, setItems] = useState<Product[]>([]);

    //Get Products by title
    const [searchByTitle, setSearchByTitle] = useState<string>('');
    
    //filtered items
    const [filteredItems, setFilteredItems] = useState<Product[]>([]);

    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState<string>(''); 

    useEffect(() => {
        //fetch('https://api.escuelajs.co/api/v1/products')
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then((data) => {
            setItems(data);
          });
      }, []);
      
    const filteredItemsByTitle = (items: Product[], searchByTitle: string) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items: Product[], searchByCategory: string) => {        
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    
    const filterBy = (searchType: string | null, items: Product[], searchByTitle: string, searchByCategory: string) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
    }    

    useEffect(() => {
        if(items){
            if (searchByTitle && searchByCategory){
                const filteredProducts = filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory);
                filteredProducts && setFilteredItems(filteredProducts)
            }
            if (searchByTitle && !searchByCategory){
                const filteredProducts = filterBy('BY_TITLE', items, searchByTitle, searchByCategory);
                filteredProducts && setFilteredItems(filteredProducts);
            }
            if (!searchByTitle && searchByCategory){
                const filteredProducts = filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory);
                filteredProducts && setFilteredItems(filteredProducts);
            }
            if (!searchByTitle && !searchByCategory){
                const filteredProducts = filterBy(null, items, searchByTitle, searchByCategory);
                filteredProducts && setFilteredItems(filteredProducts);
            }
        }
      }, [items, searchByTitle, searchByCategory]);

    return (
        <ShoppingCartContext.Provider value={{count, setCount, 
            isProductDetailOpen, openProductDetail, closeProductDetail,
            productToShow, setProductToShow,
            cartProducts, setCartProducts,
            isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
            order, setOrder, 
            items, setItems,
            searchByTitle, setSearchByTitle,
            searchByCategory, setSearchByCategory,
            filteredItems, setFilteredItems}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider