
/**
 * This function calculates total price of a new order
 * @param{Array} products cartProduct: Array of Objects
 * @returns {number} Total Price
 */
export const totalPrice = (products: Product[]): number => {
    let totalAmount = 0;
    //opcion 1:
    // products.map((product) => {
    //     totalAmount += product.price;
    // });

    //opcion 2:
    products.forEach(product => totalAmount += product.price);

    //Opcion 3:
    //return products.reduce((sum, product) => sum + product.price, 0)  


    return totalAmount;

}