
var header = document.getElementById("myid");
var btns = document.getElementsByClassName("home");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

var typed = new Typed(".multiple", {
  strings: ["Frontend Developer", "Competitive Programmer", 
  "Stock Enthusiast"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 600,
  loop: true
})
