const friend= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'u'];
console.log(friend.length);
const f= friend.map(friend => friend.length);
console.log(f);

const products = [
    {name:'water bottle', price:100, color:'red'},
    {name:'phone', price:200, color :'blue'},
    {name:'phone', price:200, color :'blue'},
    {name:'java', price:50, color :'blue'},
    {name:'tydfa', price:52, color :'blue'},
    {name:'headphone', price:50, color :'blue'},
    {name:'headphone', price:200, color :'red'},
    {name:'headphone', price:200, color :'blue'},
    {name:'headphone', price:200, color :'blue'},
    {name:'headphone', price:200, color :'blue'},
    {name:'headphone', price:200, color :'pink'},
    {name:'headphone', price:200, color :'blue'},
    {name:'headphone', price:200, color :'blue'}
     
]
 
const productName= products.map(products => products.name);

console.log(productName);


const expensiv= products.filter(products => products.price >100);
console.log(expensiv);
const colorChoice= products.find(products=>products.color == 'ttt');
console.log(colorChoice);
 const pink= products.filter ( products => products.color == 'pink');
//  console.log(pink)