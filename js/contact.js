    
    //Displays forms submission confirmation
    const form = document.forms.contact;
    form.addEventListener('submit', showConfirmation);
    //Formspree does not allow empty fields. Delaying this function to ensure the form inputs are submitted to formspree before resettinf the form.
    
    
    function showConfirmation(){
        document.querySelector('.contact-content-form').innerHTML = "<div class = 'confirmation-message-container'><div class = 'confirmation-message'>Thanks for your message. We will respond to your inquiry within the next 48 hours.</div><div class='logo'><a href='index.html'><img src='images/logoweb.png'></a></div></div>";
    };


    // Callback function for Google Maps API

    /*This section prevent Maps API form loading Roboto font*/
    var head = document.getElementsByTagName( 'head' )[0];

    var insertBefore = head.insertBefore;

    head.insertBefore = function (newElement, referenceElement) {
        
        if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
        
            console.info('Prevented Roboto from loading!');
            return;
        }
        
        insertBefore.call(head, newElement, referenceElement);
    };

    /*This section creates the maps*/
    function contactMap() {
  
        var loc = {name:"NCI",lat:53.348925,long:-6.242578};
    
            props = {
                center:new google.maps.LatLng(loc.lat,loc.long),
                zoom:15,
                mapTypeControl:false,
                streetViewControl:false,
                fullscreenControl:false,
                styles: [
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{color: '#b6e3db'}]
                        }
                    ]
                };
        
            var map = new google.maps.Map(document.getElementById('hubmap'),props);

            var marker = new google.maps.Marker({position: props.center});
            marker.setMap(map);
            
        }
    // End of Maps Function