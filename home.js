function getLocation(){
    const locationSectionLine2 = document.getElementById('location-section-line-2');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition();
    }else{
        locationSectionLine2.innerText = "Your browser does not support geolocation"
    }
        
}