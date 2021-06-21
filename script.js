const inputVal = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

//onclicking button 
addTaskBtn.addEventListener('click', function (){

   if(inputVal.value.trim()!=0){
      let localItems = JSON.parse(localStorage.getItem('localItem'))
      if(localItems === null){
         //create a new array
         arrList = []
      }
      else{
         //store items to array list
         arrList = localItems;
      }
      //add all the local items to the array in local storage
      arrList.push(inputVal.value)
      //JSON.stringify-->converts array items to a string
      localStorage.setItem('localItem', JSON.stringify(arrList));
   }
   //to display all the items added
   showItem()
})

function showItem(){
   let localItems = JSON.parse(localStorage.getItem('localItem'));
   if(localItems === null){
      arrList = []
   }
   else{
      arrList = localItems;
   }


//creating html elements
//backticks
//expressions ${ }
let html = '';
let itemShow = document.querySelector('.todoLists');
arrList.forEach((data, index)=> {

   html += `
   <div class="todoList">
   <p class="pText">${data}</p>
   <button class="deleteTask" onclick="deleteItem(${index})">Delete</button>
   </div>
   `
})
itemShow.innerHTML = html;
}
showItem()

//delete the item added
function deleteItem(index){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   //used to delete based on index value
   arrList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(arrList));
   showItem()
}

//clear all items added
function clearTask(){  
localStorage.clear()
showItem()
}
