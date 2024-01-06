import { createContext } from "react";
import { noop } from "../helpers/noop";
import { Order } from "../Types/Order";

interface ShoppingCartContextProps{
    count: number;
    setCount: (count: number) => void;
    isProductDetailOpen: boolean;
    openProductDetail: () => void;
    closeProductDetail: () => void;
    productToShow: Product;
    setProductToShow: (product: Product) => void;
    cartProducts: Product[];
    setCartProducts: (products: Product[]) => void;
    isCheckoutSideMenuOpen: boolean;
    openCheckoutSideMenu: () => void;
    closeCheckoutSideMenu: () => void;    
    order: Order[];
    setOrder: (orders: Order[]) => void;
    items: Product[];
    setItems: (products: Product[]) => void;
    searchByTitle: string;
    setSearchByTitle: (product: string) => void;
    filteredItems: Product[];
    setFilteredItems: (products: Product[]) => void;
    searchByCategory: string;
    setSearchByCategory: (product: string) => void;        
}

const defaultValue: ShoppingCartContextProps = {
    count: 0,
    setCount: noop,
    isProductDetailOpen: false,
    openProductDetail: noop,
    closeProductDetail: noop,
    productToShow: {} as Product,
    setProductToShow: noop,
    cartProducts: [],
    setCartProducts: noop,
    isCheckoutSideMenuOpen: false,
    openCheckoutSideMenu: noop,
    closeCheckoutSideMenu: noop,  
    order: [],
    setOrder: noop, 
    items: [],
    setItems: noop,
    searchByTitle: '',
    setSearchByTitle: noop,
    filteredItems: [],
    setFilteredItems: noop,
    searchByCategory: '',
    setSearchByCategory: noop,    
};

export const ShoppingCartContext = createContext(defaultValue);
