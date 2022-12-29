const form = document.querySelector('form')
const input = document.querySelector('#text')
const delAll = document.querySelector('#deleteAll')
const ul = document.querySelector('#list')

let items ;

loadItems()
eventListener()


function eventListener(){
    form.addEventListener('submit',newItem)
    ul.addEventListener('click',deleteItem)
    delAll.addEventListener('click',deleteAll)
}

function loadItems() {
  items=getItemFromLs()
  items.forEach(function(item){
    createElements(item)
  });
}

// get item from ls 
function getItemFromLs(){
  if(localStorage.getItem('items')===null){
    items = [];
  }else{ 
      items = JSON.parse(localStorage.getItem('items'));
  }
  return items ;
}

// set to localstorage 
function setItemToLS(text){
  items = getItemFromLs()
  items.push(text);
  localStorage.setItem('items',JSON.stringify(items))
}



//create element
function createElements(text){
const newLi = document.createElement('li')
newLi.className='list-group-item list-group-item-secondary border border-warning'
newLi.appendChild(document.createTextNode(text))

const a = document.createElement('a')
a.classList='delete-item float-end '
a.setAttribute('href','#')
a.innerHTML='<button id="deleteBtn" class=" btn btn-danger btn-sm">Sil</button>'


// a etıketını li ye ekleme
newLi.appendChild(a)
// li yi ul ye ekleme 
ul.appendChild(newLi)
}

function newItem(event){
    if(input.value===''){
        alert('İş eklemediniz.')
    }
    createElements(input.value)

    // elemanları local e ekledıgımız fonksıyon
    setItemToLS(input.value)
    
    input.value=''

    event.preventDefault()
}
// localden sılmek ıcın fonk
function delFromls(text){
  items=getItemFromLs();
  items.forEach(function(item,index){
    if(item ===text){
      items.splice(index,1)
    }
  })
  localStorage.setItem('items',JSON.stringify(items));
}



//Delete item 
function deleteItem(e){
  if(e.target.id==='deleteBtn'){
    e.target.parentElement.parentElement.remove()

    // local den delete
    delFromls(e.target.parentElement.parentElement.textContent)
  }
  
}

// deleteAll 
function deleteAll (){
    ul.innerHTML=''
    localStorage.clear()
}