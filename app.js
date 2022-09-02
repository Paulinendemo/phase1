const menu=document.getElementById("first")
const image=document.getElementById("img")
const category=document.getElementById("category")
const thumb=document.getElementById("Recipe")
const description=document.querySelector(".information")

const button=document.getElementById("order").addEventListener("click",()=>{
       alert ("Order done successfuly !!Delivery will be right away.Thank You.")
    }
)
function displayItem(value){
    category.innerHTML=value.strCategory
    description.innerHTML=value.strInstructions
    image.src=value.strMealThumb
}
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
.then(resp=>resp.json())
.then(jsonData=>{
    console.log(jsonData.meals)
displayItem(jsonData.meals[0])
displayFood(jsonData.meals)
})  
function displayFood(arrayOfMeals){
    arrayOfMeals.forEach(value=>{
        const li=document.createElement("li")
        li.className="food-category"
        li.innerHTML=value.strCategory
        menu.append(li)
        li.addEventListener("click",()=>{
            displayI(value)
        })
    })
}