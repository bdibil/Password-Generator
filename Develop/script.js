// Variable and Array declaration 
let passLower = false
let passUpper = false
let passNum = false
let passSpec = false
let anyChoice = false
let sizeGood = false

let numArray = ["0"]
let lowArray = ["0"]
let upArray = ["0"]
let specArray = ["0"]
let tempArray = ["0"]
let finalPass = ["0"]

let offset = 32
let passString = ""


// User Password size input
let passSize = window.prompt("Please enter a number between 8 and 128 characters for your password ")


// Determine if user choice is correct (error otherwise / ask again)
if (passSize<=128 && passSize>=8) {
  console.log("size is good")
  sizeGood = true
} else {
  window.alert("Please try again. Hint: (only numbers between 8 and 128 will work)")
  document.location.reload()
}

// Determine password criteria from user 
if (sizeGood) {
  passNum = confirm("Do you want your password to include numbers ?")
  passLower = confirm("Do you want your password to include lowercase letters ?")
  passUpper = confirm("Do you want your password to include uppercase letters ?")
  passSpec = confirm("Do you want your password to include special characters ?")
}


// Determine if user made ANY choice (error otherwise / ask again)
if (passSpec || passLower || passUpper || passNum ) {
    anyChoice = true
    console.log("criteria is good")
} else {
  window.alert("Please try again. Hint: (You need to select at least one criteria)")
  document.location.reload()
}



///////////////////////////////////////////////


// generate Array of numbers 
for (let index = 0; index < 10; index++) {
  numArray[index] = index
}
// console.log(numArray)


// generate Array of lowecase letters 
for (let index = 0; index < 26; index++) {
  lowArray[index] = String.fromCharCode(index+97)
}
// console.log(lowArray)


// generate Array of uppercase letters 
for (let index = 0; index < 26; index++) {
  upArray[index] = String.fromCharCode(index+65)
}
// console.log(upArray)


// generate Array of special characters 
for (let index = 0; index < 33; index++) {
  specArray[index] = String.fromCharCode(index+offset)
  if (index===15) {
      offset+= 10
  } 
  if (index===22) {
      offset+= 26
  }  
  if (index===28) {
      offset+= 26
  }  
}
// console.log(specArray)


// Temporary Array based on selected criteria

function criteria(a,b,c,d) { 
  // Just one selection 
  if (a&&!b&&!c&&!d) {
      tempArray = numArray
      }
  if (!a&&b&&!c&&!d) {
      tempArray = lowArray
      }
  if (!a&&!b&&c&&!d) {
      tempArray = upArray
      }
  if (!a&&!b&&!c&&d) {
      tempArray = specArray
      }

  // Two selections 
  if (a&&b) {
      tempArray = numArray.concat(lowArray)
      }
  if (a&&c) {
      tempArray = numArray.concat(upArray)
      }
  if (a&&d) {
      tempArray = numArray.concat(specArray)
      }
  if (c&&d) {
      tempArray = upArray.concat(specArray)
      }
  if (b&&d) {
      tempArray = lowArray.concat(specArray)
      }
  if (b&&c) {
      tempArray = lowArray.concat(upArray)
      }
      
  // Three selections 
  if (b&&c&&d) {
  tempArray = lowArray.concat(upArray)
  tempArray = tempArray.concat(specArray)
  }
  if (a&&c&&d) {
  tempArray = numArray.concat(upArray)
  tempArray = tempArray.concat(specArray)
  }
  if (a&&b&&d) {
  tempArray = numArray.concat(lowArray)
  tempArray = tempArray.concat(specArray)
  }
  if (a&&b&&c) {
  tempArray = numArray.concat(lowArray)
  tempArray = tempArray.concat(upArray)
  }

  // All Chars
  if (a&&b&&c&&d) {
  tempArray = numArray.concat(lowArray)
  tempArray = tempArray.concat(upArray)
  tempArray = tempArray.concat(specArray)
  }

  }


criteria(passNum,passLower,passUpper,passSpec)

// console.log("temp below")
// console.log(tempArray)



// Final password  - change the index based on user input

if (sizeGood) {
  
  for (let index = 0; index < passSize; index++) {
    // numPass[index] = Math.floor(Math.random()*9)
    finalPass[index] = tempArray[Math.floor(Math.random()*tempArray.length)] 
  }
}


for (let index = 0; index < finalPass.length; index++) {
  passString = passString + finalPass[index];
}
 


// console.log("FINAL FINAL VV")
// console.log(finalPass)



///////////////////////////////////////////////////////




// Generates password based on criteria selected 
function generatePassword(){
  return passString
}

// console.log("test")



// Functional code below

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
