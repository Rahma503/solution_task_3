
//1st question
function alphatopos(text) {
    t= text.toLowerCase()
           .replace(/[^a-z]/g, '')  //just charachters
           .replace(/[a-z]/g, char => char.charCodeAt(0) - 96) //a=97-96=1 , b=98-96=2 ,....
           .replace(/(\d{1,2})(?!$)/g, '$1 ');
   return t
   }
   
   
   out = alphatopos("The sunset sets at twelve o' clock.");
   console.log(out);
   
   
   //2nd question
   
   function sortstr (str)
   {
       if (str === "") return ""
   
       r = str.split(' ')
       fin = new Array(r.length);
       for (i =0;i < r.length;i++) {
          for (j=0 ; j<r[i].length;j++)
          {
                 if (/\d/.test(r[i][j])){
   
                   position = parseInt(r[i][j], 10) - 1; 
                   fin[position] = r[i]; 
   
                 }
          }
           
           
       }
      return  fin
   }
   
   out2=sortstr ("i4of Fo1r pe6ople g3ood th5e the2")
   
    console.log(out2)
   
   
   
   //3rd question
   
   function specialmultiply(x, y) {
       if (arguments.length === 2) { 
           return x * y; 
       }
       return function (z) { 
           return x * z; 
       };
   }
   console.log(specialmultiply(3, 4));    
   console.log(specialmultiply(3)(4));  
   console.log(specialmultiply(3));      
    
   
   // 4th question
   
   function guessinggame(amount_attempts)
   {
       r = Math.floor(Math.random() * 10) + 1;
       attempt=0
   
       return function(g)
       {
           
           if (attempt >= amount_attempts) {
               return `out of guesses. The answer was ${r}`; // No more attempts allowed
           }
           attempt++
   
           if (g === r)
           {
               console.log("you got it")
   
           }
            else if (g < r)
            {
             
               console.log("You're too low!")
            }
            else if (g > r)
               {
                 
                  console.log("You're too high!")
               }
      
   
       }
      
   
   
   
   }
   
   game = guessinggame(5);
   console.log(game(1)); 
   console.log(game(8)); 
   console.log(game(5)); 
   console.log(game(9)); 
   console.log(game(10))
   console.log(game(3));