import "bootstrap";


//only run if homepage

window.onload = function () {
    // if (localStorage.getItem("hasCodeRunBefore") === null) {
  jQuery(overlay).fadeIn("slow");
  jQuery(promptBox).fadeIn("slow");
    //     localStorage.setItem("hasCodeRunBefore", true);
    // }
}


const promptBox = document.getElementById("prompt-box");
const codeError = document.getElementById("code-error");
const overlay = document.getElementById("overlay");
const vendredi = document.getElementById("vendredi");
console.log(codeError)
const samedi = document.getElementById("samedi");


function activateConsequences(array){

if (array[1] == true){
  jQuery(overlay).fadeOut("slow");
  jQuery(promptBox).fadeOut("slow");

} else {
    codeError.classList.add("is-error");
    promptBox.classList.add("shake");
    setTimeout(function() {
        promptBox.classList.remove("shake")
    }, 1000);
}
};


function checkpassword(mdp){
  var solved

if (mdp.toLowerCase() == "bary" ||
      mdp.toLowerCase() == "flicoteaux" ||
      mdp.toLowerCase() == "seror" ||
      mdp.toLowerCase() == "prawidlo"
    ) {
  solved = true;

} else {
  solved = false;
}

return [mdp, solved];
};

function displayProgramAccordingly(arr){
if (arr[1] == false){
  return;
} else {
    if (arr[0] == "seror") {
      console.log("vendredi et dimanche - potes");
    }
    else if (arr[0] == "flicoteaux"){
      console.log("samedi et dimanche - famille");
    }
    else if (arr[0] == "bary"){
      console.log("tout - très proches");
        vendredi.classList.remove("hide");
        samedi.classList.remove("hide");
    }
    else if (arr[0] == "prawidlo"){
      console.log("juste dimanche");
    }
    else {
  console.log("erreur, merci de contacter sarah et elliot");
    };
}
};



$('.prompt-box form').submit( function(e) {

  e.preventDefault();
  var codeWord = $('.mdp').val();
  var arr = checkpassword(codeWord)
  activateConsequences(arr);
  displayProgramAccordingly(arr)
});






// $('.btn-treehouse').click( function () {
//   console.log(codeWord);
// }

//   )
