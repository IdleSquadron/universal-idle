function Tab(t) {
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab2").style.display = "none";
  document.getElementById("tab3").style.display = "none";
  document.getElementById("tab4").style.display = "none";
  document.getElementById("tab101").style.display = "none";
  document.getElementById("tab102").style.display = "none";
  document.getElementById("tab103").style.display = "none";
  document.getElementById("tab104").style.display = "none";
  document.getElementById("tab" + t).style.display = "block"
  game.tab = t
}

function moveTab1(){
  Tab(1)
  game.tab = 1
}