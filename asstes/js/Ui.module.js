




export class Ui{
    constructor(){}

    displayMeals(mealData){
 
let mealsBox=``
for(let i=0;i<mealData.length;i++){
    mealsBox+=`
    
    <div  class=" offset-2 offset-md-0 col-10 col-md-3  meal ">

        <div dataId=${mealData[i].idMeal} class="inner-meal   position-relative overflow-hidden">
            <img class="meal-img w-100 rounded " src=${mealData[i].strMealThumb} alt="" >
        <div class="meal-layer bg-layer   position-absolute  d-flex align-items-center"  ><p class=" fs-3 fw-bold">${mealData[i].strMeal}</p> </div>
        </div>
    
        
    </div>
    
    
    
    `

}

document.getElementById('rowData').innerHTML=mealsBox


    }


    displayDitalis(allDataMeal){
       

        let recip=''
        for(let i=0;i<20;i++){
            if( allDataMeal[0][`strIngredient${i}`]){
    
                recip+=`<li class="alert alert-info m-2 p-1">${allDataMeal[0][`strMeasure${i}`]} ${allDataMeal[0][`strIngredient${i}`]}</li>`   
                     }
        }
    
        let tags = allDataMeal[0].strTags?.split(",")
       
        if (!tags) tags = []
        let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }



        let DetalisBox=`
      
        
        <div class=" offset-2 offset-md-0 col-10 col-md-4">
        <img src=${allDataMeal[0].strMealThumb} class="w-100 rounded" alt="">
        <h3>${allDataMeal[0].strMeal}</h3>
    </div>
    <div class=" offset-2 offset-md-0 col-10 col-md-8">
        <h3>Instructions</h3>
        <p>${allDataMeal[0].strInstructions}</p>
        <h2>Area: <span>${allDataMeal[0].strArea}</span> </h2>
        <h2> Category: <span>${allDataMeal[0].strCategory}</span> </h2>
        <h2>Recips:</h2>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
          ${recip}
         
        </ul>
        <h3>Tags:</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
        <div></div>
        <div></div>
        
<a target="_blank" href=${allDataMeal[0].strSource} class="btn btn-success">Source</a>
<a href=${allDataMeal[0].strYoutube} target="_blank"  class="btn btn-danger">youtube</a>
        </div>
        
        
        `
        document.getElementById('detalisRow').innerHTML=DetalisBox;
    }

    displayForSearch(arr){
        let mealBox=``
        for(let i=0;i<arr.length;i++){
            mealBox +=`

            <div class="offset-2 offset-md-0 col-10 col-md-3 ">
    
            <div dataId=${arr[i].idMeal} class="inner-meal position-relative overflow-hidden">
                <img class="meal-img w-100 rounded " src=${arr[i].strMealThumb} alt="" >
            <div class="meal-layer bg-layer  position-absolute  d-flex align-items-center"  ><p class=" fs-3 fw-bold">${arr[i].strMeal}</p> </div>
            </div>
        
            
        </div>
            `
        }
        document.getElementById('searchRow').innerHTML=mealBox;
    }

displayCtegerios(arr){
    let mealBox=``
        for(let i=0;i<arr.length;i++){
            mealBox +=`
            <div class="offset-2 offset-md-0 col-10 col-md-3 ">
        
            <div cateName=${arr[i].strCategory} class="inner-meal  position-relative overflow-hidden">
                <img class="meal-img w-100 rounded " src=${arr[i].strCategoryThumb} alt="" >
            <div class="meal-layer bg-layer  position-absolute  d-flex flex-column  justify-content-center align-items-center"  >
                <h3 class=" fs-3 fw-bold">${arr[i].strCategory}</h3>
                <p class='text-center'>${arr[i].strCategoryDescription.slice(0,100)}</p>

            </div>
            </div>
        
            
        </div>
            
            `
        }
        document.getElementById('categeoryRow').innerHTML=mealBox;
    }


    displayMealsOfCate(mealData){
 
        let mealsBox=``
        for(let i=0;i<mealData.length;i++){
            mealsBox+=`
            
            <div  class="offset-2 offset-md-0 col-10 col-md-3 meal ">
        
                <div dataId=${mealData[i].idMeal} class="inner-meal mealsofcate   position-relative overflow-hidden">
                    <img class="meal-img w-100 rounded " src=${mealData[i].strMealThumb} alt="" >
                <div class="meal-layer bg-layer   position-absolute  d-flex align-items-center"  ><p class=" fs-3 fw-bold">${mealData[i].strMeal}</p> </div>
                </div>
            
                
            </div>
            
            
            
            `
        
        }
        
        document.getElementById('mealsOfCate').innerHTML=mealsBox
        
        
            }

            displayArea(arr){
                let mealBox=``
        for(let i=0;i<arr.length;i++){
            mealBox +=`
            <div statName=${arr[i].strArea} class="offset-2 offset-md-0 col-10 col-md-3 text-center areaName ">
    
            <i class="fa-solid fa-house-laptop fa-5x" style="color: #e4dcdc;"></i>
            <p  class="fs-2" style="color: #e4dcdc;">${arr[i].strArea}</p>
        
            
        </div>
           
            
            `
        }
        document.getElementById('areaRow').innerHTML=mealBox;

            }



            displayStateMeals(mealData){
 
                let mealsBox=``
                for(let i=0;i<mealData.length;i++){
                    mealsBox+=`
                    
                    <div  class="offset-2 offset-md-0 col-10 col-md-3 meal ">
                
                        <div dataId=${mealData[i].idMeal} class="inner-meal allAreaMeal   position-relative overflow-hidden">
                            <img class="meal-img w-100 rounded " src=${mealData[i].strMealThumb} alt="" >
                        <div class="meal-layer bg-layer   position-absolute  d-flex align-items-center"  ><p class=" fs-3 fw-bold">${mealData[i].strMeal}</p> </div>
                        </div>
                    
                        
                    </div>
                    
                    
                    
                    `
                
                }
                
                document.getElementById('stateRow').innerHTML=mealsBox
                
                
                    }


displayIngrediants(mealData){
    let mealsBox=``
    for(let i=0;i<20;i++){
        mealsBox+=`
        
        <div ingName=${mealData[i].strIngredient} class="offset-2 offset-md-0 col-10 col-md-3 text-center ingrediantsType ">
    
            <i class="fa-solid fa-drumstick-bite fa-5x " style="color: #e4dcdc;"></i>
            
            <h3  class="fs-2 " style="color: #e4dcdc;">${mealData[i].strIngredient}</h3>
            <p  class="" style="color: #e4dcdc;">${mealData[i].strDescription.slice(0,100)}</p>
        
            
        </div>
        
        
        
        `
    
    }
    
    document.getElementById('ingrediantsRow').innerHTML=mealsBox
    

}
displayingridMeals(mealData){
 
    let mealsBox=``
    for(let i=0;i<mealData.length;i++){
        mealsBox+=`
        
        <div  class="offset-2 offset-md-0 col-10 col-md-3 meal  ">
    
            <div dataId=${mealData[i].idMeal} class="inner-meal allIngridMeal   position-relative overflow-hidden">
                <img class="meal-img w-100 rounded " src=${mealData[i].strMealThumb} alt="" >
            <div class="meal-layer bg-layer   position-absolute  d-flex align-items-center"  ><p class=" fs-3 fw-bold">${mealData[i].strMeal}</p> </div>
            </div>
        
            
        </div>
        
        
        
        `
    
    }
    
    document.getElementById('ingrediantsMeals').innerHTML=mealsBox
    
    
        }


}





