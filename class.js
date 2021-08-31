class support{
    name ;
    role='support session';
    startSession(){
        console.log('start a support sessiion')
    }
}



function min(nums) { return Math.min(nums) }console.log(min( [1,3,2 ]));

const cube =x=>x*x*x;
console.log(cube(2));
const [a,b]= [ 1,2,3,4,45,5];
console.log(a+b);
const {x,y,z} = {x:1,y1:2, z:3};
console.log(y); 
const nums = [1,2,3,4,5];
let output= nums.filter(n=>n%2);
console.log(output);
const friends= [ 'moushumi', 'Misha','Manna', 'mami', 'mahiya'];
console.log(friends.find(friend => friend.length == 5))
const product = {
    name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
    // const outputt= product.map(product=>product.price)
  const {price}= product;
  console.log(price);
  
  const name='adam Sandler'; 
  const greeting =`hello ${name}`
  console.log(greeting);