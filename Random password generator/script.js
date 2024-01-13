function createPassword() {
    //CHARACTERS TO BE INCLUDED IN YOUR PASSWORD
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  
    // SETTING LENGTH OF PASSWORD
    const passwordLength = 12; // YOU CAN ADJUST LENGTH
  
    // GENERATING THE PASSWORD HERE
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    // DISPLAY THE GENERATED PASSWORD IN INPUT FIELD
    const passwordInput = document.getElementById("Password");
    passwordInput.value = password;
  }
  
  // FUNCTIONALITY TO COPY THE PASSWORD TO CLIPBOARD
  document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.querySelector(".display img");
    copyButton.addEventListener("click", function() {
      const passwordInput = document.getElementById("Password");
  
      // SELECT TEXT IN INPUT FIELD
      passwordInput.select();
      passwordInput.setSelectionRange(0, 99999); // For mobile devices
  
      // COPY TEXT TO CLIPBOARD
      document.execCommand("copy");
  
      // DESELCT TEXT
      window.getSelection().removeAllRanges();
    });
  });
  