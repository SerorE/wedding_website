import "bootstrap";


(function() {

// //Display modal on click
// $('.show-prompt-box').click(function(e){
//   e.preventDefault();
//   $('.overlay, .prompt-box, .prompt-wrap').fadeIn();
// });

//Fade out overlay and prompt-box
// $('.overlay, .close').click(function(){
//   $('.overlay, .prompt-box').fadeOut();
//   $('.code-error').removeClass('is-error');
//   e.stopPropagation();
// });


//Get value and compare to password
$('.prompt-box form').submit(function(e) {
  e.preventDefault();
  var codeWord = $('.clients').val();


  if (codeWord.toLowerCase() == "code") {
  $('.overlay, .prompt-box').fadeOut();

    // alert('yeah');
    //location.href = "/path-to-page/";

} else {
    $('.code-error').addClass('is-error');
    $('.prompt-box').addClass('shake');
    setTimeout(function() {
        $('.prompt-box').removeClass('shake')
    }, 1000);

}
});

})();
