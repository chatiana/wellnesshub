let coll = document.getElementsByClassName("collapsible");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      document.getElementById("quick_view").innerHTML = "Quick View Venue Details";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementById("quick_view").innerHTML = " ";
    }
  });
}