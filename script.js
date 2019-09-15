document.addEventListener('DOMContentLoaded', function() {

  //to make navbar sticky
  window.addEventListener('scroll', stickybar)

  var navbar = document.getElementById("navbar");

  var sticky = navbar.offsetTop;

  function stickybar(){
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove ("sticky");
    }
  }

  //make text grow
  var begin_text_size = 100;
  var end_text_size = 300;
  var txt1 = 300;
  var txt2 = 0;
  //var timer = //setTimeout("grow_text()",100);


  function grow_text () {
    if (begin_text_size < end_text_size){
      msg.style.fontsize = begin_text_size;
      begin_text_size++;
      timer = setTimeout("grow_text()",100);
    }
  }

  function shrink_function() {
    if (txt1 > txt2) {
    msg.style.fontsize = txt1;
    txt1--;
    timer = setTimeout("shrink_function()", 100);
    }
  }

  function stoptimer() {
  clearTimeout(timer);
  }


})
