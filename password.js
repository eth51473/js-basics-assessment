const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
let caseChecker = 0
let mixed = false
console.log("Welcome to the Password Validator Tool!")
readline.question('Please enter a Password that you want to Validate: ', password => {
  // checks for differences between upper and lowercase to ensure password is mixed cases
  for (let i=0; i<password.length; i++){
    if(password.charAt(i) == password.charAt(i).toUpperCase()){
      caseChecker +=1
      
    }
    else{
      caseChecker+=0
    
    }
  }

  if(caseChecker > 0 && caseChecker < password.length){
    mixed = true
  }else{
    mixed = false
  }

  if(password.length >=10 && mixed === true ){
    console.log(`  
 ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ 
▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌          ▐░▌          ▐░▌          
▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░▌          ▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌ ▀▀▀▀▀▀▀▀▀█░▌
          ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          ▐░▌                    ▐░▌          ▐░▌
 ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄█░▌ ▄▄▄▄▄▄▄▄▄█░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
    
    
 ██████   ██████   ██████  ██████           ██  ██████  ██████  
 ██       ██    ██ ██    ██ ██   ██          ██ ██    ██ ██   ██ 
 ██   ███ ██    ██ ██    ██ ██   ██          ██ ██    ██ ██████  
 ██    ██ ██    ██ ██    ██ ██   ██     ██   ██ ██    ██ ██   ██ 
  ██████   ██████   ██████  ██████       █████   ██████  ██████  
                                                                
 
    
     `);
  }else{
    
    console.log(` 
 _______  _______  ___  ___      __   __  ______    _______ 
 |       ||   _   ||   ||   |    |  | |  ||    _ |  |       |
 |    ___||  |_|  ||   ||   |    |  | |  ||   | ||  |    ___|
 |   |___ |       ||   ||   |    |  |_|  ||   |_||_ |   |___ 
 |    ___||       ||   ||   |___ |       ||    __  ||    ___|
 |   |    |   _   ||   ||       ||       ||   |  | ||   |___ 
 |___|    |__| |__||___||_______||_______||___|  |_||_______|
 Were sorry this password does not meet our criteria (at least ten characters long contains' 'must contain both uppercase and lowercase letters
 `)
  }
  
  readline.close();
});