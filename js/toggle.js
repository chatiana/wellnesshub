

  /*Responsive navbar toggle script*/

    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active-nav');
});



  /*Responsive navbar for big screen size*/
window.onscroll = function(){
    stickyFunction();
    }   

    var header = document.querySelector(".main-nav");
    var sticky = header.offsetTop;
    var logo = document.querySelector(".main-nav-logo");
    var nav = document.queryCommandValue(".main-nav")

    function stickyFunction(){
        if(window.pageYOffset>sticky && window.innerWidth >768){
            header.classList.add("sticky");
            logo.style.display = "block";
            nav.style.display = "flex";
        }else{
            header.classList.remove("sticky");
            logo.style.display = "none";

    }
    }