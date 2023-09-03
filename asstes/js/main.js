
import { Ui } from "./Ui.module.js"
import { Details } from "./details.module.js"
import { Home } from "./home.module.js";



// !html elements
const searchBtn=document.getElementById('searchBtn')
const searchSection=document.querySelector('.searchSection')
const  homeSection=document.getElementById('homeSection')
const searchName=document.getElementById('searchName')
const searchByLetter=document.getElementById('searchByLetter')

const CategoryhBtn=document.getElementById('CategoryhBtn')
const categories=document.getElementById('categories')
const detalis=document.getElementById('detalis')
const AreaBtn=document.getElementById('AreaBtn')
const Area=document.getElementById('Area')
const ingrediants=document.getElementById('ingrediants')
const ingrediantsBtn=document.getElementById('ingrediantsBtn')
const contactBtn=document.getElementById('contactBtn')
const contactUs=document.getElementById('contact-us')
const loading=document.getElementById('loading')

// ********


// *******
const home=new Home()


// ***********
const sidebarOuterWidth=$('.sidebar-inner').outerWidth(true)
function linksAnimation(){
    let allLinks=$('#sidebar ul li')
   
    for(let i = 0; i < allLinks.length; i++) {
       allLinks.eq(i).animate({
           top:'300px'
       }, (i + 5) * 100)
   }
}


$('.close-icon').click(function(){
    const sidebarOuterWidth=$('.sidebar-inner').outerWidth(true)

    $('#sidebar').animate({left:-sidebarOuterWidth},500)
    
    $('.close-icon').addClass('d-none');
    $('.bar-icon').removeClass('d-none')
    linksAnimation()
 
    
})

$('.bar-icon').click(function(){
  

    $('#sidebar').animate({left:'0px'},500)
    
    $('.close-icon').removeClass('d-none');
    $('.bar-icon').addClass('d-none')

    let allLinks=$('#sidebar ul li')

     for(let i = 0; i < allLinks.length; i++) {
        allLinks.eq(i).animate({
            top:'0px'
        }, (i + 5) * 100)
    }
 

    
})

// !search

searchBtn.addEventListener('click',function(){
    searchSection.classList.remove('d-none')
    homeSection.classList.add('d-none')
    categories.classList.add('d-none')
    detalis.classList.add('d-none')
    Area.classList.add('d-none')
    contactUs.classList.add('d-none')
    document.getElementById('mealsOfCate').classList.add('d-none')
    $('#sidebar').animate({left:-sidebarOuterWidth},500 );
$('.close-icon').addClass('d-none');
    $('.bar-icon').removeClass('d-none')


    linksAnimation()

})


async function searchByFirstLetter(FirstLetter){


if(/^[a-zA-Z]$/.test(searchByLetter.value)){
    document.querySelector('.searchFLetter').classList.add('d-none')


  loading.classList.remove('d-none')


  let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${FirstLetter}`)
 

    let data=await response.json()

if(data.meals==null){
   
    
    loading.classList.add('d-none')

}else{
    loading.classList.add('d-none')
    new Ui().displayForSearch(data.meals)
    
    const AllMeals=document.querySelectorAll('.inner-meal')
    
    
    for(let i=0;i<AllMeals.length;i++){
    AllMeals[i].addEventListener('click',function(){
    
    document.getElementById('detalis').classList.remove('d-none')
    document.querySelector('.searchSection').classList.add('d-none')
    const mealId=AllMeals[i].getAttribute('dataId')
    
      new Details(mealId)
    })
    }
     
      
        
    //   }
        
    
    
}

  
  



}else{
    document.querySelector('.searchFLetter').classList.remove('d-none')
}


}



searchByLetter.addEventListener('input', function(){
    let inValue=searchByLetter.value

    searchByFirstLetter(inValue)

})





async function searchByName(mealName){
    document.querySelector('.searchFLetter').classList.add('d-none')
       loading.classList.remove('d-none')


    let response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let data=await response.json()
    loading.classList.add('d-none')
        let allData= data.meals
        
        let matchedMeals=[]
        for(let i=0;i<allData.length;i++){
            if(data.meals[i].strMeal.toLowerCase().includes(mealName.toLowerCase())==true){
                matchedMeals.push(data.meals[i])

            }
           
        }
        new Ui().displayForSearch(matchedMeals)

        const AllMeals=document.querySelectorAll('.inner-meal')
       
      
        for(let i=0;i<AllMeals.length;i++){
          AllMeals[i].addEventListener('click',function(){
      
      document.getElementById('detalis').classList.remove('d-none')
      document.querySelector('.searchSection').classList.add('d-none')
      const mealId=AllMeals[i].getAttribute('dataId')
    
              new Details(mealId)
          })
        }

        
       
        
    }




    searchName.addEventListener('input', function(){
        let inValue=searchName.value
    
        searchByName(inValue)
    
    })
    




// ******End Search******

// !Categerios

CategoryhBtn.addEventListener('click',function(){
    categories.classList.remove('d-none')
    homeSection.classList.add('d-none')
    searchSection.classList.add('d-none')
    detalis.classList.add('d-none')
    Area.classList.add('d-none')
    contactUs.classList.add('d-none')
    document.getElementById('mealsOfCate').classList.add('d-none')
    document.getElementById('categeoryRow').classList.remove('d-none')
    $('#sidebar').animate({left:-sidebarOuterWidth},500 );
    $('.close-icon').addClass('d-none');
        $('.bar-icon').removeClass('d-none')
        getCategerios()


        linksAnimation()

})




async function getCategerios(){
    
    loading.classList.remove('d-none')
    
    let response= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data=await response.json()
    loading.classList.add('d-none')
    const catData=data.categories
   
    new Ui().displayCtegerios(catData)

    const allCate=document.querySelectorAll('.inner-meal')
    for(let i=0;i<allCate.length;i++){
        
        allCate[i].addEventListener('click',function(){
            document.getElementById('categeoryRow').classList.add('d-none')
        document.getElementById('mealsOfCate').classList.remove('d-none')

            fetchCateData(allCate[i].getAttribute('cateName'))
         })

    

}


}


async function fetchCateData(Cate){
    loading.classList.remove('d-none')
  
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Cate}`)
    let data=await response.json()
    loading.classList.add('d-none')
    const catData=data.meals
    new Ui().displayMealsOfCate(catData)


    const allCateMeal=document.querySelectorAll('.mealsofcate')
    
    
    for(let i=0;i<allCateMeal.length;i++){
        allCateMeal[i].addEventListener('click',function(){
       
           const DATAID=allCateMeal[i].getAttribute('dataid')
    
            categories.classList.add('d-none')
            detalis.classList.remove('d-none')



         new Details(DATAID)
        
        
        })
    
    }

}

// ******End Category******

// !Area
AreaBtn.addEventListener('click',function(){
    Area.classList.remove('d-none')
    searchSection.classList.add('d-none')
    homeSection.classList.add('d-none')
    categories.classList.add('d-none')
    detalis.classList.add('d-none')
    ingrediants.classList.add('d-none')
    contactUs.classList.add('d-none')

    document.getElementById('stateRow').classList.add('d-none')
    document.getElementById('areaRow').classList.remove('d-none')
$('#sidebar').animate({left:-sidebarOuterWidth},500 );
$('.close-icon').addClass('d-none');
$('.bar-icon').removeClass('d-none')
linksAnimation()
    getArea()

})



async function getArea(){
    loading.classList.remove('d-none')
    

    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    const data=await response.json()
    loading.classList.add('d-none')
    const catData=data.meals
    new Ui().displayArea(catData)
    const areaName=document.querySelectorAll('.areaName')
   
    for(let i=0;i<areaName.length;i++){
        
        areaName[i].addEventListener('click',function(){
            document.getElementById('areaRow').classList.add('d-none')
        document.getElementById('stateRow').classList.remove('d-none')
        fetchStateMeals(areaName[i].getAttribute('statName'))
        
       
         })
         

    

}

}

async function fetchStateMeals(stateName){
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${stateName}`)
    let data=await response.json()
    const catData=data.meals
    new Ui().displayStateMeals(catData)


    const allAreaMeal=document.querySelectorAll('.allAreaMeal')
    
    
    for(let i=0;i<allAreaMeal.length;i++){
        allAreaMeal[i].addEventListener('click',function(){
       
           const DATAID=allAreaMeal[i].getAttribute('dataid')
          console.log();
    
           Area.classList.add('d-none')
           detalis.classList.remove('d-none')



         new Details(DATAID)
        
        
        })
    
    }

}
// ******End Area******

// !Ingredients
ingrediantsBtn.addEventListener('click',function(){
    ingrediants.classList.remove('d-none')
    Area.classList.add('d-none')
    searchSection.classList.add('d-none')
    homeSection.classList.add('d-none')
    categories.classList.add('d-none')
    detalis.classList.add('d-none')
    contactUs.classList.add('d-none')

    document.getElementById('ingrediantsMeals').classList.add('d-none')
    document.getElementById('ingrediantsRow').classList.remove('d-none')

    $('#sidebar').animate({left:-sidebarOuterWidth},500 );
$('.close-icon').addClass('d-none');
$('.bar-icon').removeClass('d-none')
linksAnimation()
getIngredients()


})




async function getIngredients(){
    loading.classList.remove('d-none')
    

    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    const data=await response.json()
    loading.classList.add('d-none')
    const intData=data.meals
   
  new Ui().displayIngrediants(intData)
    const ingrediantsType=document.querySelectorAll('.ingrediantsType')

   
    for(let i=0;i<ingrediantsType.length;i++){
        
        ingrediantsType[i].addEventListener('click',function(){

            document.getElementById('ingrediantsRow').classList.add('d-none')
        document.getElementById('ingrediantsMeals').classList.remove('d-none')
        
        fetchingredIantsMeals(ingrediantsType[i].getAttribute('ingName'))})
         

    

}

}

async function fetchingredIantsMeals(ingrediantsType){
    loading.classList.remove('d-none')
    
    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediantsType}`)
    let data=await response.json()
    loading.classList.add('d-none')
    const ingData=data.meals
   
    new Ui().displayingridMeals(ingData)


    const allIngridMeal=document.querySelectorAll('.allIngridMeal')
    
    
    for(let i=0;i<allIngridMeal.length;i++){
        allIngridMeal[i].addEventListener('click',function(){
       
           const DATAID=allIngridMeal[i].getAttribute('dataid')
        
    
           ingrediants.classList.add('d-none')
           detalis.classList.remove('d-none')



         new Details(DATAID)
        
        
        })
    
    }

}

// ******End Ingredients******

// !Contact Us

contactBtn.addEventListener('click',function(){
    contactUs.classList.remove('d-none')
    ingrediants.classList.add('d-none')
    Area.classList.add('d-none')
    searchSection.classList.add('d-none')
    homeSection.classList.add('d-none')
    categories.classList.add('d-none')
    detalis.classList.add('d-none')

    

    $('#sidebar').animate({left:-sidebarOuterWidth},500 );
$('.close-icon').addClass('d-none');
$('.bar-icon').removeClass('d-none')
linksAnimation()

})

const nameIput=document.getElementById('nameIput')
const phoneInput=document.getElementById('phoneInput')
const passInput=document.getElementById('passInput')
const emailInput=document.getElementById('emailInput')
const ageInput=document.getElementById('ageInput')
const repassInput=document.querySelector('.repassinput')
const chechName=document.querySelector('.chechName')
const checkPhone=document.querySelector('.checkPhone')
const checkPass=document.querySelector('.checkPass')
const checkEmail=document.querySelector('.checkEmail')
const chechAge=document.querySelector('.chechAge')
const checkMatchedPass=document.querySelector('.checkMatchedPass')
const submitBtn=document.querySelector('.submitBtn')



function validateName(){
    const regxName=/^[a-zA-Z ]+$/
   if(regxName.test(nameIput.value)){
    chechName.classList.replace("d-block","d-none")
    nameIput.classList.replace('is-invalid','is-valid')
  
    return true
    
   }else{
    nameIput.classList.add('is-invalid')
    chechName.classList.replace("d-none","d-block")
    
    return false
   }
   
}



nameIput.addEventListener('input',validateName)
nameIput.addEventListener('input',validteInputs)

// **********
function validatePhone(){
    var regxName=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
   if(regxName.test(phoneInput.value)){
    checkPhone.classList.replace("d-block","d-none")
    phoneInput.classList.replace('is-invalid','is-valid')

    return true
   }else{
    phoneInput.classList.add('is-invalid')
    checkPhone.classList.replace("d-none","d-block")
    return false
   }

}

phoneInput.addEventListener('input',validatePhone)
phoneInput.addEventListener('input',validteInputs)
// ***********


function validateAge(){
    var regxName=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
   if(regxName.test(ageInput.value)){
    chechAge.classList.replace("d-block","d-none")
    ageInput.classList.replace('is-invalid','is-valid')

    return true
   }else{
    ageInput.classList.add('is-invalid')
    chechAge.classList.replace("d-none","d-block")
    return false
   }

}
ageInput.addEventListener('input',validateAge)
ageInput.addEventListener('input',validteInputs)
// *********
function validateEmail(){
    var regxName=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(regxName.test(emailInput.value)){
    checkEmail.classList.replace("d-block","d-none")
    emailInput.classList.replace('is-invalid','is-valid')

    return true
   }else{
    emailInput.classList.add('is-invalid')
    checkEmail.classList.replace("d-none","d-block")
    return false
   }

}
emailInput.addEventListener('input',validateEmail)
emailInput.addEventListener('input',validteInputs)



// **********
function validatepassword(){
    var regxName=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
   if(regxName.test(passInput.value)){
    checkPass.classList.replace("d-block","d-none")
    passInput.classList.replace('is-invalid','is-valid')

    return true
   }else{
    passInput.classList.add('is-invalid')
    checkPass.classList.replace("d-none","d-block")
    return false
   }

}
passInput.addEventListener('input',validatepassword)
passInput.addEventListener('input',validteInputs)

// ********
 function validateRePassword(){
    
    
    if(passInput.value==repassInput.value){
    checkMatchedPass.classList.replace("d-block","d-none")
    repassInput.classList.replace('is-invalid','is-valid')

    return true
   }else{
    repassInput.classList.add('is-invalid')
    checkMatchedPass.classList.replace("d-none","d-block")
    return false
   }

}
repassInput.addEventListener('input',validateRePassword)
repassInput.addEventListener('input',validteInputs)



function validteInputs(){
  
    if(validateName()&&validatePhone()&&validatePhone()&&validatepassword()&&validateEmail()&& validateAge()&&validateRePassword()){
        submitBtn.classList.remove('disabled')
    }else{
        submitBtn.classList.add('disabled')
    }
}



// end contact



