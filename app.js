const menu=document.getElementById("category1")
const image=document.getElementById("img")
const category=document.getElementById("category")
const thumb=document.getElementById("CategoryThumb")
const description=document.querySelector(".information")

const button=document.getElementById("order-now").addEventListener("click",()=>{
       alert ("Order done successfuly")
    }
)
function displayFood(foodObj){
    category.innerText=foodObj.strCategory
    description.innerText=foodObj.strInstructions
    image.src=foodObj.strMealThumb
}
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=e")
.then(response=>response.json())
.then(jsonData=>{
    console.log(jsonData.meals)
displayFood(jsonData.meals[0])
displayMeal(jsonData.meals)
})  
function displayMeal(arrayOfMeals){
    arrayOfMeals.forEach(foodObj=>{
        const li=document.createElement("li")
        li.className="food-category"
        li.innerText=foodObj.strCategory
        menu.append(li)
        li.addEventListener("click",()=>{
            displayFood(foodObj)
        })
    })
}