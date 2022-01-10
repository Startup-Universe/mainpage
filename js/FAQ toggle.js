// FAQ toggle buttons
var divs = ["q1", "q2", "q3" , "q4" , "q5" , "q6"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId && div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

$(".rotate").click(function () {
    $(this).toggleClass("down");
})
