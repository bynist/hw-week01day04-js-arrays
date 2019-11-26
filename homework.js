 
function summation (sum)
{ for ( let i=0; i<=sum; i++){
     result += i
}
return `\n summation of ${sum} is ${result} \n `
}
let result=0
console.log( summation(3))

//A2)

function sumEven(sum){
    let summitionE=0
     for ( let i=0; i<=sum; i++){
        if(i%2==0){
        summitionE += i
        }
        }
   return `\n summationEven of ${sum} is ${summitionE} \n `
}

console.log(sumEven(5))

//A3)

const Ava =function (group){
    let sum = 0 
         for (i=0;i<group.length;i++){
           sum += group[i]
         } 
        return`The Avarge of ${group} is ${sum/group.length}\n `
}

console.log(Ava([8, 2, 2, 4]))

   
//A4)
function reverseS(word){
    let revWord = word.split("")
    revWord.reverse()      

    return`the reverse of ${word} is: `+ revWord.join("")
 
    }

console.log( reverseS("caterpillar"))
    
//A5)

function addDashes(dash){
console.log(`\n`+ dash.join(" - "))
}
addDashes(['test1', 'test2', 'test3'])
//A6)
function countUpAndDown (max){

        let count = [] //empty array
        for (j=1 ; j< max ; j++){
                count.push(j) 
             }
                
             for (j=max ; j>=1 ; j--){
                count.push(j) 
            }  
             return `Updown Numbers: ${count}`
}
 console.log(countUpAndDown(3))
//A7)

function wordsWithA(searchA){
    let arr =[]
    for (let i = 0; i<searchA.length;i++){
    if (searchA[i].indexOf('a')>=0 ){
        arr.push(searchA[i])
       
    }}
    return`the words have "A" are : ${arr}` 
    }

 

console.log(wordsWithA(['m ','la','ka']))

//A8)
function largestEvenNumber (largest){
    let arr=[]
   
for (i=0 ; i<largest.length;i++){
  if (largest[i] % 2 == 0 ){
       arr.push(largest[i])
        
        }
       
    }return`the even Number ${arr}`
    }

console.log( largestEvenNumber([1,2,3,10,4,7,0]))
//A9)
const wordsWithLetter=function (letter,series) {

    let arr=[]
    //let x=letter
    for (let i = 0; i<series.length;i++){
        if (series[i].indexOf(letter)>=0 ){
            arr.push(series[i])
        }
    }
        return`the words have ${letter} are : ${arr}`    

}

console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']))

//A10
let longestWord = function (longw) {
    let x =" "
  arr=longw.split(" ")
//     console.log(arr)
//     x.sort()
   for (let i =0 ; i<arr.length;i++){
    if (arr[i].length > x.length) {
        x = arr[i];
    }
}
return `the largest word is ${x}`
}

console.log(longestWord("The cat in the house"))