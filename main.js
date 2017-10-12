/* eslint-disable no-unused-vars */

var map;
var src='http://gdurl.com/NiZm'

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

const $users = document.getElementById('capture')
const url = 'https://developer.nps.gov/api/v0/parks?parkCode=yell'

fetch(url, {headers:{AUTHORIZATION: '0CA48841-5F16-430F-BB39-F9AD09242D77'}})
  .then(response => {
    return response.json()
  })
  .then(console.log('something fetched! where is it?'))
