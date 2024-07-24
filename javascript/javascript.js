let arr=[1,2,13,4,5]
let max=arr[0];
for(let i=0;i<arr.length;i++){
   if(arr[i]>max)
      max=arr[i]
   }
console.log(max)
   
//============================================================================================

function string(name1,name2,name3){
   let arr=[name1,name2,name3]
   let max=arr[0];
   for(let i=0;i<arr.length;i++){
      if(arr[i].length>max.length)
         max=arr[i]
      }   
      console.log(max)
}
console.log(string("NAVEEN","AMAR","ARJUN"))

//============================================================================================

function palindrome(name){
   name.reverse()
   if(name==name.reverse)
      console.log("palindrome")
   else
   console.log("not palindrome")
   }
   console.log(palindrome("NAVEEN"))

   //==========================================================================================

   function temperature(celsius)
{
   let fahrenheit=(celsius*9/5)+32
   console.log(fahrenheit)
} 
console.log(temperature(30))

//==========================================================================================




