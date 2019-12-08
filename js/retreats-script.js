// Additional Collapse Function for Retreats Page
let button = document.getElementsByClassName("collapse_button")

for(i=0; i<button.length; i++){
  button[i].addEventListener("click", function() {
    let content = button[0].parentElement.parentElement;
      content.style.maxHeight = null;
      document.getElementById("quick_view").innerHTML = "Quick View Venue Details";
});}