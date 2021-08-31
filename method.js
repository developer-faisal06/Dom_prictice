const bottle = { color:'blue',
 hold:'water', 
 price:50, 
 isCleand:true};
   
// Object Keys example 
const keys = Object.keys(bottle);
console.log(keys);

//Object  value
 const value= Object.values(bottle);
 console.log(value);  


// Object get all pairs

const paires= Object.entries(bottle);
console.log(paires);

// not delete 
delete bottle.price;
console.log(bottle);

// seel kora 
Object.seal(bottle);
console.log(bottle);

// frezz  
Object.freeze(bottle);
console.log(bottle);