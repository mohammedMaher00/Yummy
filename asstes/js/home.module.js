import { Ui } from "./Ui.module.js"
import { Details } from "./details.module.js"



export class Home{
    constructor(){


        
        this.getMeals()
        this.ui=new Ui()
        
  
        
    }


    

async getMeals(){
    this.loading=document.getElementById('loading')
   this.loading.classList.remove('d-none')
  
    let response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let data=await response.json()
    
    this.loading.classList.add('d-none')
 
    this.ui.displayMeals(data.meals)

    let allMeals=document.querySelectorAll('.inner-meal')
    
    for(let i=0;i<allMeals.length;i++){
        
       allMeals[i].addEventListener('click',function(e){
            this.details=document.getElementById('detalis')
            this.details.classList.remove('d-none')
            this.home=document.getElementById('homeSection')
            this.home.classList.add('d-none')
        

            new Details(allMeals[i].getAttribute('dataId'));
            
        })
    }
    
    

    
}


 }
