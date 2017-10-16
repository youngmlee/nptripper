/* eslint-disable no-unused-vars */

var map;
var src='http://gdurl.com/ba_Lf'

const $descript = document.querySelector('#capture')

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.5, lng: -98.35},
    zoom: 5,
    mapTypeId: 'hybrid'
  });

  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  kmlLayer.addListener('click', function(event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.getElementById('capture');
    testimonial.innerHTML = content;
  });
}
