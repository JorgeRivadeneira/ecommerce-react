export interface Order{
    id: number,
    date: string,
    products: Product[],
    totalProducts: number, 
    totalPrice: number,
}