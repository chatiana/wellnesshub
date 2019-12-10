
// Maps Function for Retreats, Yoga, Meditation, and Contacts Pages
   /*This section prevent Maps API from loading Roboto font*/
   var head = document.getElementsByTagName( 'head' )[0];

   var insertBefore = head.insertBefore;

   head.insertBefore = function (newElement, referenceElement) {
       
       if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
            return;
       }
       
       insertBefore.call(head, newElement, referenceElement);
   };

  /*This section creates the maps*/
  function retreatMap() {
    
  var retreatLocations = [
    {name:"Philippines",lat:11.402198,long:119.513998},
    {name:"Bali",lat:-8.671991,long:115.449439},
    ];

  var locations = retreatLocations.length;
  var maps = [];
  var loc;
  var props;
  var element;

    for(i=0;i<locations;i++){
        loc = retreatLocations[i];
        props = {
          center:new google.maps.LatLng(loc.lat,loc.long),
          zoom:8,
          mapTypeControl:false,
          streetViewControl:false,
          fullscreenControl:false,
          options: {
            gestureHandling: 'greedy'
          },
          styles: [
                    {
                      featureType: 'water',
                      elementType: 'geometry',
                      stylers: [{color: '#b6e3db'}]
                    }
                ]
          };

    element = "hubmap" + (i+1);
    maps.push(new google.maps.Map(document.getElementById(element),props));


    var circle = new google.maps.Circle({
            center: props.center,
            radius:25000,
            strokeColor:"#16778C",
            strokeOpacity:1,
            strokeWeight:1,
            fillColor:"#16778C",
            fillOpacity:0.2
        });
    
    circle.setMap(maps[i]);
      
    }
  }


// End of Maps Function


// Additional Collapse Function for Retreats Page
let button = document.getElementsByClassName("collapse-option")

for(i=0; i<button.length; i++){
  button[i].addEventListener("click", function() {
      let content = this.parentElement;
      content.previousElementSibling.classList.toggle('active');
      content.style.maxHeight = null;
      document.getElementById("quick_view").innerHTML = "Quick View Venue Details";
});}
// End of Collapse Function

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
      if (arr[x].textContent.toLowerCase().includes(searchbar.value.toLowerCase())) {
        arr[x].style.display = "block";
        results.push(arr[x]);
        document.getElementById("searchResults").innerHTML = "You have found " + results.length +" results";
      } else {
        arr[x].style.display = "none";
        if (results == 0){
          document.getElementById("searchResults").innerHTML = "You have found 0 result";
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
