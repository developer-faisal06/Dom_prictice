const findFriend=()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data=>displyfriend(data))
}

const displyfriend=(data)=>{

const results = data.results;
console.log(results);
const friends=document.getElementById('friends');
for( const result of results ){


// console.log(result);
const h3 = document.createElement('h3');
h3.innerText=`Name : ${result.name.first} ${result.name.last},  ${result.email}, ${result.phone} `;
friends.appendChild(h3);
}

}