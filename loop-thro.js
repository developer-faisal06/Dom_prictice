const phone={
    name:'symphony',
    brand:'china',
    model:'z10',
    Ram:'4gb',
    Rom: '64GB',
    batteryType:'ly-poly',
    display:'high Quality 1080px x 720px',
    price:5000
}
const ok= Object.seal(phone);
// console.log(ok);
phone.Ram='2Gb';
delete phone.Rom;
console.log(phone)

// console.log(phone);
// for loop prop in Object   
// for(const prop in phone){
//     console.log(prop, phone[prop])
// }

// const keys= Object.keys(phone);
// console.log(keys);
//  for (const prop of keys){
//      console.log(prop, phone[prop]);
//  }
// const entries= Object.entries(phone);
// console.log(entries);

// // object distracture system 

// for (const [key,value] of entries){
//     console.log(key, value);
// }

const obj={a:1, b:7, c:3, length:2};
const objkey=Object.keys(obj).length;
console.log(objkey);

const obj1={module:35, video:2};
const obj2={module:35, video:2};
console.log(obj1===obj2);

const gf= (name='habijhabi') =>'name';
console.log(gf());
