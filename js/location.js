var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("divMape"), {
    zoom: 14
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
      var myPos = new google.maps.Marker({
        map: map,
        position: pos
        });
      getNearbyPlaces(pos, map);
    },function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
  } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
}
function getNearbyPlaces(location, map) {
  var request = {
    location: location,
    radius: 20000,
    type: ['atm']
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < 10; i++) {
        var myLocation = new google.maps.LatLng(location.lat,location.lng);
        var destination = new google.maps.LatLng(results[i].geometry.location.lat(), results[i].geometry.location.lng());
        var distance = google.maps.geometry.spherical.computeDistanceBetween(myLocation, destination);
        var deslatlng = results[i].geometry.location.lat() + "," + results[i].geometry.location.lng();
        var myloclatlng = location.lat + "," + location.lng;
        var imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+deslatlng+"&zoom=14&size=150x150&markers=color:blue%7Clabel:A%7C"+deslatlng+"&key=AIzaSyD87Tc4XPLWbFQuhPFa_qS-MQ2bwPMU3w8";
        document.getElementById("tableBody").innerHTML += "<tr><td>" + results[i].name + "</td><td>" + distance.toFixed() + "m" + "</td><td><img src="+imgUrl+"></td</tr>";
      }
      (function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("tab");
        switching = true;
        while (switching) {
          switching = false;
          rows = table.getElementsByTagName("TR");
          for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
              shouldSwitch= true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      })();
    }
  }
}
