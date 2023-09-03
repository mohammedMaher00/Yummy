
// const BaseUrl=`www.themealdb.com/api/json/v1/1/`


// class Api{
//     constructor(){

//         this.baseUrl=BaseUrl    

//     }
//     async getDataFromServer(endPoint){
//         let response= await fetch(`${this.baseUrl}${endPoint}`)
//         let data= await response.json()
//         console.log(data);
//         return data

//     }
//     getMealsByName(mealName){
// let endPoint=`search.php?s=${mealName}`
// let data=thisgetDataFromServer(endPoint)
// return data
//     }
//     getMealsByFirstLetter(letter){
//         let endPoint=`search.php?f=${letter}`
//         let data =this.getDataFromServer(endPoint)
//         return data
//     }

//     getMealsByCategory(){
//         let endPoint=`categories.php`
//         let data =this.getDataFromServer(endPoint)
//         return data
//     }
//     getAreas() {
//         let endpoint = `list.php?a=list`;
//         let data =this.getDataFromServer(endPoint)
//         return data
//       }
//       getIngredients() {
//         let endpoint = `list.php?i=list`;
//         let data =this.getDataFromServer(endPoint)
//         return data
//       }



// }