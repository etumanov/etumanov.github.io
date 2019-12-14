      function initMap() {
        var uluru = {lat: 50.078195, lng: 14.445849};
        var map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: 'images/map-marker.png'
        });
      }