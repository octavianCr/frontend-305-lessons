let sendBtn = document.getElementById("send-btn").addEventListener("click", function(){
    event.preventDefault()
    console.log(3);
})


function initMap() {
    const uluru = { lat: -25.344, lng: 131.031 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
    }