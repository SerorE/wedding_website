import "bootstrap";

window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
  jQuery(overlay).fadeIn("slow");
  jQuery(promptBox).fadeIn("slow");

        localStorage.setItem("hasCodeRunBefore", true);
    }
}


const promptBox = document.getElementById("prompt-box");
const codeError = document.getElementById("code-error");
const overlay = document.getElementById("overlay");

function activateConsequences(array){

if (array[1] == true){
  jQuery(overlay).fadeOut("slow");
  jQuery(promptBox).fadeOut("slow");

} else {
    codeError.classList.toggle("is-error");
    promptBox.classList.toggle("shake");
    setTimeout(function() {
        promptBox.classList.toggle("shake")
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




$('.prompt-box form').submit( function(e) {

  e.preventDefault();
  var codeWord = $('.mdp').val();
  checkpassword(codeWord);
  activateConsequences(checkpassword(codeWord));
  console.log(checkpassword(codeWord));
});






// $('.btn-treehouse').click( function () {
//   console.log(codeWord);
// }

//   )
