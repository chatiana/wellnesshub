// Collapse Function

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

// Search Function

let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keydown", search);
const arr = document.getElementsByClassName("card");

let results = []

function search(e) {
  if(e.keyCode === 13){
    for(x=0; x < arr.length; x ++) {
      if (arr[x].children[0].children[1].children[0].value.includes(searchbar.value.toLowerCase())) {
        arr[x].style.display = "block";
        results.push(arr[x]);
        document.getElementById("searchResults").innerHTML = "You have found " + results.length +" results";
      } else {
        arr[x].style.display = "none";
        if (results == 0){
          document.getElementById("searchResults").innerHTML = "You have found 0 results";
        }
      }
    }
  }
  results = [];
};

// Carousel Function

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
