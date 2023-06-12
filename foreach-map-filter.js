/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){

    const arrNew= []

    arr.forEach(element => {
        element *= 2
        arrNew.push(element)
         
    });
    return arrNew
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){

        const evenArray= []
        arr.forEach(element => {
             
            if((element % 2) === 0){
                evenArray.push(element)
            }

        });

        return evenArray
    
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const firstLast = []
        
         arr.forEach(element => {
            let string = Array.from(element)

            let intial = string[0] + string[string.length - 1]
            firstLast.push(intial)

         });

        return firstLast
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){

         arr.forEach(val => {   
               val[key] = value    // failed look at solutoin beofore completing this 

    });

    return arr          //forgot return 
    
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){  // did not finish  

            //let string = Array.from(str)     //orringale plan
//
            //vowel = 'aeiou'
            //const vowObj = {}
            //string.forEach(element => {
            //    element.toString()
            //    element = element.toLowerCase()
            //    if(vowel === string.indexOf()){
//
            //    }
            //    
            //});

        //return vowObj
                  // commenting it trying to understand as much i lcan can 
            let splitArr = str.split("");  //had to look this up, split method to new array making each letter a string and have a index
            let obj = {}; // declare obj as  an oblject
            const vowels = "aeiou";  // string aeiou intoe vowels
          
            splitArr.forEach(function(letter) {     //
              let lowerCasedLetter = letter.toLowerCase()  // lower case each split just in case if there it is captilize
              if (vowels.indexOf(lowerCasedLetter) !== -1) {  
                if (obj[lowerCasedLetter]) { // if this object  exist it will add 1 counter 
                  obj[lowerCasedLetter]++;   // if not    
                } else {
                  obj[lowerCasedLetter] = 1;
                }
              }
            });
            return obj;

}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(value){
        return value * 2
    })

    
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){

    const newArr = arr.map(function(value, index){

        return value * index
    })
    return newArr
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
        const newObj = arr.map(function(array){
              return array[key]  // added .value did not work
        })

    return newObj
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    const fullName = arr.map(function(val){     // was original  const fullName = arr.maps(function(val){
            return val.first + " "+ val.last   //`${val.first}  ${val.last}`
    })
    return fullName;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    
    const nameArr = arr.filter(function(value){
        return value[key]
    })

    return nameArr
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {

    const find = arr.filter(function(valeu){
        return valeu === searchValue
    }) 
    return find[0]  //did not know to add fisrt index 
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const inObj = arr.filter(function(value){
        return value[key] === searchValue
    })

    return inObj[0]                     // same as find function  but why add [0] index? 
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = 'aeiou'              
    let word =""
    const loCase = Array.from(str.toLowerCase())
        loCase.filter(function(value){
            
            
            if(vowels.indexOf(loCase) == -1){
            return    word += loCase; 
            }
            return
        })
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    return arr.filter(element => { 
        if((element % 2) === 1){
            return element
        }
    })
           .map(function(value){  // would like to incorperrate teh double with maps instead of this for now 
                return value * 2
            })
     

    
   

    return oddArray
}


// most of them are simple mistakes