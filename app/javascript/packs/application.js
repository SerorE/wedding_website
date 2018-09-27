import "bootstrap";

var url = window.location.href;

 var session_solved = sessionStorage.getItem("session_solved");

if ((url == "http://localhost:3000/" ||
    url == "www.sarahetelliot.fr/" ||
    url == "http://www.sarahetelliot.fr/" ||
    url == "http://sarahetelliot.fr/") && (session_solved != "true")){
const promptBox = document.getElementById("prompt-box");
const codeError = document.getElementById("code-error");
const overlay = document.getElementById("overlay");
console.log(session_solved);
askforcode(promptBox,overlay,codeError);
// console.log("done with ask for code")
// console.log(sessionStorage.getItem("session_array"));
}
//changer cette condition à si pas de code valide
else if (url == "http://localhost:3000/programme" ||
    url == "http://www.sarahetelliot.fr/programme" ||
    url == "hwww.sarahetelliot.fr/programme" ||
    url == "http://sarahetelliot.fr/programme"){

var session_password = sessionStorage.getItem("session_password");
const vendredi = document.getElementById("vendredi");
const samedi = document.getElementById("samedi");

if (session_password == "seror") {
      vendredi.classList.remove("hide");
      console.log("vendredi et dimanche - potes");
    }
    else if (session_password == "flicoteaux"){
      console.log("samedi et dimanche - famille");
      samedi.classList.remove("hide");
    }
    else if (session_password == "bary"){
      console.log("tout - très proches");
        vendredi.classList.remove("hide");
        samedi.classList.remove("hide");
    }
    else if (session_password == "prawidlo"){
      console.log("juste dimanche");
    }
};

function checkpassword(mdp,promptBox,overlay,codeError){
  var solved

if (mdp.toLowerCase() == "bary" ||
      mdp.toLowerCase() == "flicoteaux" ||
      mdp.toLowerCase() == "seror" ||
      mdp.toLowerCase() == "prawidlo"
    ) {
  solved = true;
  jQuery(overlay).fadeOut("slow");
  jQuery(promptBox).fadeOut("slow");

} else {
    solved = false;
    codeError.classList.add("is-error");
    promptBox.classList.add("shake");
    setTimeout(function() {
        promptBox.classList.remove("shake")
    }, 1000);
}
  sessionStorage.setItem("session_password", mdp);
  sessionStorage.setItem("session_solved", solved);

};


function askforcode(promptBox,overlay,codeError){
  jQuery(overlay).fadeIn("slow");
  jQuery(promptBox).fadeIn("slow");

$('.prompt-box form').submit( function(e) {
  e.preventDefault();
  var codeWord = $('.mdp').val();
  var pwd_array = checkpassword(codeWord,promptBox,overlay,codeError)
  sessionStorage.setItem("session_array", pwd_array);
});

};
