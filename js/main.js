

function initMap() {
    var options = {lat: 51.5074, lng: 0.1278};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: options
    });
    var marker = new google.maps.Marker({
      position: options,
      map: map
    });
  }