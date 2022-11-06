//Create an ARRAY to store Product Name and Product Price 
//const nameofconst = document.getElementbyId(creates an index fom the array and gives items an id)("constantname")


const itemsContainer = document.getElementById("itemsContainer")
const shoppingCart = document.getElementById("shoppingCart")
const totalPrice = document.getElementById("totalPrice")

//name,price,image into array
const itemObj = [
     {name: "Pokemon Cards",
     price: 7,
     image: "PokemonCards.jfif"},
     {name: "Quinoa",
     price: 6,
     image: "Quinoa.jfif"},
     {name: "Coffee Beans",
     price: 10,
     image: "Coffee.jfif"},
     {name: "Toilet Paper",
     price: 20,
     image: "ToiletPaper.jfif"},
     {name: "Paper Towel",
     price: 18,
     image: "PaperTowel.jfif"},
     {name: "La Croix",
     price: 5,
     image: "LaCroix.jfif"},
     {name: "Pistachios",
     price: 9,
     image: "Pistachios.jfif"},
     {name: "Blueberries",
     price: 4,
     image: "Blueberries.jfif"},
     {name: "Bananas",
     price: 1,
     image: "Bananas.jfif"},
     {name: "Young Chicken",
     price: 12,
     image: "Chicken.jfif"},
     {name: "Ribeye Filet",
     price: 32,
     image: "Ribeye.jfif"},
     {name: "Curry Sauce",
     price: 6,
     image: "CurrySauce.jfif"},
     {name: "Peas",
     price: 1,
     image: "Peas.jfif"},
     {name: "Okra",
     price: 3,
     image: "Okra.jfif"},
     {name: "Lotion",
     price: 8,
     image: "Lotion.jfif"},
     {name: "Mouth Wash",
     price: 4,
     image: "MouthWash.jfif"},
     {name: "Cat Food",
     price: 38,
     image: "CatFood.jfif"},
     {name: "Dog Food",
     price: 48,
     image: "DogFood.jfif"},
     {name: "Mushrooms",
     price: 5,
     image: "Mushrooms.jfif"},
     {name: "Hot Sauce",
     price: 3,
     image: "HS.jfif"},
     {name: "Yogurt",
     price: 6,
     image: "Yogurt.jfif"},
     {name: "Pumpernickel Bread",
     price: 4,
     image: "PBread.jfif"},
     {name: "Salmon Filet",
     price: 16,
     image: "Salmon.jfif"},
     {name: "Dino Nuggies",
     price: 10,
     image: "DinoNuggies.jfif"},
     {name: "Mac and Cheese",
     price: 2,
     image: "Mac.jfif"
    }
]
//List Products Method:
//You can put multiple lines inside of ``.
function productList(){
    let itemsHTML = ""

    itemObj.forEach(function(i, index){
        itemsHTML += `
        <div class="itemElement">
         <p> Product: ${i.name}</p>
         </div>
         <div>
         <p> Cost: $<span>${i.price}.00</span></p>
         <button class= "addButton" id= ${index}> Add Item: </button>
         </div>
         <div>
         <p.a> <img src =${i.image} </p.a>
         </div>
         <div>
         </div>       
        `               
    })

    itemsContainer.innerHTML = itemsHTML
}
//List products:
productList()

const addButtons = document.getElementsByClassName('addButton')

for(let btn of addButtons){
    btn.addEventListener('click', addItemToCart)
}

const cartItems = []

function addItemToCart(){
    cartItems.push(itemObj[this.id])
    console.log(cartItems)
    cartProductsList()
    
}
shoppingCart.innerHTML = itemsHTML

//Add items to cart:
function cartProductsList(){
    let itemsHTML = ""
    
    cartItems.forEach(function(i,index){
        
        itemsHTML += `
        <div class="itemElement">
        <p> Product: ${i.name}</p>
        </div>
        <div>
        <p> Cost: $<span>${i.price}</span></p>
        </div>
        <p.a> <img src =${i.image} </p.a>
        <button class= "minusButton" id= ${index}>Remove Item</button>
        `
    })
    shoppingCart.innerHTML = itemsHTML
    
    //Remove items form cart:
    
    const minusButtons = document.getElementsByClassName('minusButton')
    
    for(let btn of minusButtons){
        btn.addEventListener('click', removeItem)
    }
    
    //Need to fully understand splice 
    function removeItem(){
        cartItems.splice(itemObj[this.id,1])
        console.log(cartItems)
        cartProductsList()
        
    }
    //Get total for cart:
    let total = 0
    
    cartItems.forEach(function(items){
        
        total += items.price
    })

    totalPrice.innerText = total  

   
} 



   


