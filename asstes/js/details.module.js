import { Ui } from "./Ui.module.js"

export class Details{
    constructor(id){
        this.getDtalis(id)
    }


    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772

    async getDtalis(id){
        this.loading=document.getElementById('loading')
   this.loading.classList.remove('d-none')
  
        let response= await fetch( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
         let data=await response.json()
         
         let allData=data.meals
         this.loading.classList.add('d-none')
        
         new Ui().displayDitalis(allData)

    }


    
}