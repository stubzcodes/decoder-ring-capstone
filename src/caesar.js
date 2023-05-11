// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
let lookup = "abcdefghijklmnopqrstuvwxyz";
0
  function caesar(input, shift, encode = true) {
    // your solution code here

    let operator = 1

    if (encode === false){
      operator *= -1
    }
    //result will be a string
  let result = ""

    //if shift is less than 25, greater than 25, or 0, return false
    if(shift <-25 || shift > 25 || shift === 0) return false;

    //ignore capital letters
    let words = input.toLowerCase();

    //loop through input to find character indexes
    for (let i = 0; i < words.length; i++){
      //console.log("cheese");
      
      let letter = lookup.indexOf(words[i]);

      if (letter === -1){
        result += words[i]
      } else {
        letter += (shift * operator)
        if (letter < 0) letter += 26;
        if (letter > 25) letter -= 26;
        result += lookup[letter]
      }
    
    }
    //console.log(result)
    return result
  }

 

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
