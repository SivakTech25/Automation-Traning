/*A customer adds products to the cart.
Your job is to calculate:
Total cart value
Total quantity
Separate expensive products
Return summary object

Business Rules
Total price = price × quantity
Calculate total cart amount
Calculate total quantity
If product price > 20000 → store in "expensiveProducts" array
Return structured summary object
Do NOT use console inside function
expected Output:
{
  totalAmount: number,
  totalQuantity: number,
  expensiveProducts: string[]
}*/

interface Product{
  productName:string,
  price:number,
  quantity:number
}
let shoppingCart:Product[]=[
    {productName:"Laptop",price:50000,quantity:2},
    {productName:"Mobile",price:25000,quantity:5},
    {productName:"Headphones",price:2000,quantity:2},
    {productName:"Watch",price:32000,quantity:2},
  ]
interface CartDetails{
  totalAmount:number,
  totalQuantity:number,
  expProduct:string[]
}
  function cartSummary(products:Product[]):CartDetails{
    let totalAmount:number=0;
    let totalQuantity:number=0;
    let expProduct:string[]=[];
    for (let val of products){
      totalAmount+=(val.price*val.quantity);
      totalQuantity+=val.quantity;
      if(val.price>20000){
        expProduct.push(val.productName);
      }
    }
    return {
      totalAmount,
      totalQuantity,
      expProduct
    };
  } 
  
console.log(cartSummary(shoppingCart));

  







