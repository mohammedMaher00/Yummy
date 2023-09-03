// import { Ui } from "./Ui.module.js"




// export class Search{
//     constructor(){
// this.searchName=document.getElementById('searchName')
// this.searchByLetter=document.getElementById('searchByLetter')
// // this.ui=new Ui()
 

//  this.searchName.addEventListener('input',function(){
//     this.searchNameValue=this.searchByName.value()
//     searchByName( this.searchNameValue)


//  })

//  this.searchByLetter.addEventListener('input',function(){
//     this.searchByLetterValue=this.searchByLetter.value()
//     searchByfirstLetter( this.searchByLetterValue)
//  })








//     }


// async searchByName(mealName){

//     let response= await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
//     let data =await response.json()
//     console.log(data);
//     new Ui().displayForSearchByName(data)
    

// }
// async searchByfirstLetter(firstLetter){

//     let response= await fetch( `www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
//     let data =await response.json()
//     console.log(data);
//     new Ui().displayForSearchByName(data)

// }



// }