document.getElementById('border').addEventListener('click', function(){
    const friendsContainer = document.getElementById('friends-container');
    friendsContainer.style.border='5px solid black';
})

document.getElementById('background').addEventListener('click', function(){
    const friend=document.getElementsByClassName('friends');
    for( const friends of friend){
        friends.style.backgroundColor= 'lightblue';
    }

})

function addElement(){
      const friendsContainer= document.getElementById('friends-container');
    const friendDiv= document.createElement('div');

    friendDiv.classList.add('friends');
    friendDiv.innerHTML=`
     <h3 class="friend-name"> Friend-4 </h3>
    <p>Eaque, voluptas aperiam. Distinctio, hic?</p>
    `
    friendsContainer.appendChild(friendDiv);
   
}
// document.getElementById('addFriend').addEventListener('click', function(){
  

// })

document.getElementById('add-name').addEventListener('click', function(){
    const name= document.getElementsByTagName('h3');
    for( const friends of name){
        friends.style.color='red';
    }
})
document.getElementById('center').addEventListener('click',function(){
    const container= document.getElementsByClassName('friends');
for( const firend of container){
    firend.style.textAlign='center';
}
})