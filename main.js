/* eslint-disable no-unused-vars */

var map;
var src='http://gdurl.com/NiZm'

$(document).ready(function() {
  console.log('Document ready!')
});

function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer
  var directionsService = new google.maps.DirectionsService
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.5, lng: -98.35},
    zoom: 5,
    mapTypeId: 'hybrid'
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
  kmlLayer.addListener('click', function(event) {
    var content = event.featureData.infoWindowHtml;
    const $bg = document.querySelector('.parkplaceholder')
    const $capture = document.getElementById('capture')
    $bg.innerHTML = content
    var parkName = $bg.innerText
    parkFinder(parkName)
  });
}

function parkFinder (parkName) {
  switch(parkName) {
    case('Acadia National Park'):
      popCar('acad');
      fetchDescription('acad');
      break;
      case('Arches National Park'):
      popCar('arch');
      fetchDescription('arch');
      break;
      case('Badlands National Park'):
      popCar('badl');
      fetchDescription('badl');
      break;
      case('Big Bend National Park'):
      popCar('bibe');
      fetchDescription('bibe');
      break;
      case('Biscayne National Park'):
      popCar('bisc');
      fetchDescription('bisc');
      break;
      case('Black Canyon of the Gunnison National Park'):
      popCar('blca');
      fetchDescription('blca');
      break;
      case('Bryce Canyon National Park'):
      popCar('brca');
      fetchDescription('brca');
      break;
      case('Canyonlands National Park'):
      popCar('cany');
      fetchDescription('cany');
      break;
      case('Capitol Reef National Park'):
      popCar('care');
      fetchDescription('care');
      break;
      case('Carlsbad Caverns National Park'):
      popCar('cave');
      fetchDescription('cave');
      break;
      case('Congaree National Park'):
      popCar('cong');
      fetchDescription('cong');
      break;
      case('Crater Lake National Park'):
      popCar('crla');
      fetchDescription('crla');
      break;
      case('Cuyahoga Valley National Park'):
      popCar('cuva');
      fetchDescription('cuva');
      break;
      case('Death Valley National Park'):
      popCar('deva');
      fetchDescription('deva');
      break;
      case('Everglades National Park'):
      popCar('ever');
      fetchDescription('ever');
      break;
      case('Glacier National Park'):
      popCar('glac');
      fetchDescription('glac');
      break;
      case('Grand Canyon National Park'):
      popCar('grca');
      fetchDescription('grca');
      break;
      case('Grand Teton National Park'):
      popCar('grte');
      fetchDescription('grte');
      break;
      case('Great Basin National Park'):
      popCar('grba');
      fetchDescription('grba');
      break;
      case('Great Sand Dunes National Park and Preserve'):
      popCar('grsa');
      fetchDescription('grsa');
      break;
      case('Great Smoky Mountains National Park'):
      popCar('grsm');
      fetchDescription('grsm');
      break;
      case('Guadalupe Mountains National Park'):
      popCar('gumo');
      fetchDescription('gumo');
      break;
      case('Hot Springs National Park'):
      popCar('hosp');
      fetchDescription('hosp');
      break;
      case('Joshua Tree National Park'):
      popCar('jotr');
      fetchDescription('jotr');
      break;
      case('Lassen Volcanic National Park'):
      popCar('lavo');
      fetchDescription('lavo');
      break;
      case('Mammoth Cave National Park'):
      popCar('maca');
      fetchDescription('maca');
      break;
      case('Mesa Verde National Park'):
      popCar('meve');
      fetchDescription('meve');
      break;
      case('Mount Rainier National Park'):
      popCar('mora');
      fetchDescription('mora');
      break;
      case('North Cascades National Park'):
      popCar('noca');
      fetchDescription('noca');
      break;
      case('Olympic National Park'):
      popCar('olym');
      fetchDescription('olym');
      break;
      case('Petrified Forest National Park'):
      popCar('pefo');
      fetchDescription('pefo');
      break;
      case('Pinnacles National Park'):
      popCar('pinn');
      fetchDescription('pinn');
      break;
      case('Redwood National and State Parks'):
      popCar('redw');
      fetchDescription('redw');
      break;
      case('Rocky Mountain National Park'):
      popCar('romo');
      fetchDescription('romo');
      break;
      case('Saguaro National Park'):
      popCar('sagu');
      fetchDescription('sagu');
      break;
      case('Sequoia National Park'):
      popCar('seki');
      fetchDescription('seki');
      break;
      case('Shenandoah National Park'):
      popCar('shen');
      fetchDescription('shen');
      break;
      case('Theodore Roosevelt National Park'):
      popCar('this');
      fetchDescription('this');
      break;
      case('Voyageurs National Park'):
      popCar('voya');
      fetchDescription('voya');
      break;
      case('Wind Cave National Park'):
      popCar('wica');
      fetchDescription('wica');
      break;
      case('Yellowstone National Park'):
      popCar('yell');
      fetchDescription('yell');
      break;
      case('Yosemite National Park'):
      popCar('yose');
      fetchDescription('yose');
      break;
      case('Zion National Park'):
      popCar('zion');
      fetchDescription('zion');
      break;
  }
}

function findObjByParkCode (parkCode, array) {
  for (var i = 0; i < array.length; i++) {
    var arrObj = array[i]
    if (parkCode === arrObj.parkCode) {
      return arrObj
    }
  }
}

function popCar(parkCode) {
  var $carousel = document.querySelectorAll('.carousel-inner img')
  var foundObj = findObjByParkCode(parkCode, parkInfo)
  var parkSrc = foundObj.src
  for (var i = 0; i < $carousel.length; i++) {
    $carousel[i].setAttribute('src', parkSrc[i])
  }
}

function fetchDescription(parkCode) {
  const $description = document.querySelector('.description')
  var foundObj = findObjByParkCode(parkCode, parkInfo)
  $description.innerText = foundObj.description
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  const $formHolder = document.querySelector('.formholder')
  var formInfo = $formHolder.textContent
  var split = formInfo.split('&')
  var origin = split[0]
  var destination = split[1]
  var waypoints = split[2]
  var finalOrg = origin.replace(/origin=/g, '').split('%20').join(' ')
  var finalDest = destination.replace(/destination=/g, '').split('%20').join(' ')
  var middleWay = waypoints.replace(/waypoints=/g, '').split('%20').join(' ')
  var waypointsObj = {}
  waypointsObj['location'] = middleWay
  waypointsObj['stopover'] = true
  var waypointsArr = []
  waypointsArr.push(waypointsObj)
  directionsService.route({
    origin: finalOrg,
    destination: finalDest,
    waypoints: waypointsArr,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

$('#myform').submit(function(e) {
  e.preventDefault();
  const $formHolder = document.querySelector('.formholder')
  $formHolder.innerHTML = ''
  $formHolder.append($(this).serialize())
  const $capture = document.getElementById('capture')
  var directionsDisplay = new google.maps.DirectionsRenderer
  var directionsService = new google.maps.DirectionsService
  var newmap = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.5, lng: -98.35},
    zoom: 5,
    mapTypeId: 'hybrid'
  });
  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: newmap
  });
  kmlLayer.addListener('click', function(event) {
    var content = event.featureData.infoWindowHtml;
    const $bg = document.querySelector('.parkplaceholder')
    const $capture = document.getElementById('capture')
    $bg.innerHTML = content
    var parkName = $bg.innerText
    parkFinder(parkName)
  });
  directionsDisplay.setMap(newmap);
  directionsDisplay.setPanel($capture);
  calculateAndDisplayRoute(directionsService, directionsDisplay)
})

function calcRoute() {
  const $formHolder = document.querySelector('.formholder')
  var formInfo = $formHolder.textContent
  var split = formInfo.split('&')
  var origin = split[0]
  var destination = split[1]
  var waypoints = split[2]
  var finalOrg = origin.replace(/origin=/g, '').split('%20').join(' ')
  var finalDest = destination.replace(/destination=/g, '').split('%20').join(' ')
  var finalWay = waypoints.replace(/waypoints=/g, '').split('%20').join(' ')
  var request = {
    origin: finalOrg,
    destination: finalDest,
    travelMode: 'DRIVING'
  }
  console.log(finalOrg)
  console.log(finalDest)
  console.log(finalWay)
}

const parkInfo = [
  {
    id: '0',
    name: 'Acadia National Park, ME',
    parkCode: 'acad',
    src: ['images/acad/acad1.jpg', 'images/acad/acad2.jpg', 'images/acad/acad3.jpg', 'images/acad/acad4.jpg', 'images/acad/acad5.jpg'],
    LatLng: [ 44.3385559, -68.2733346 ],
    description: "Acadia National Park, ME\n\nDuring high visitation, you may experience delays entering the park, and increased travel times and congestion on scenic drives. Our best advice is to have back-up plans for your day. Between 10 am and 4 pm, and particularly on Cadillac Mountain for sunrise or sunset, destinations throughout Acadia can exceed capacity, and rangers may restrict access temporarily in the interest of public safety."
  },
  {
    id: '1',
    name: 'Arches National Park, UT',
    parkCode: 'arch',
    src: ['images/arch/arch1.jpg', 'images/arch/arch2.jpg', 'images/arch/arch3.jpg', 'images/arch/arch4.jpg', 'images/arch/arch5.jpg'],
    LatLng: [ 38.6165441, -109.6163418 ],
    description: "Arches National Park, UT\n\nVisit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets."
  },
  {
    id: '2',
    name: 'Badlands National Park, SD',
    parkCode: 'badl',
    src: ['images/badl/badl1.jpg', 'images/badl/badl2.jpg', 'images/badl/badl3.jpg', 'images/badl/badl4.jpg', 'images/badl/badl5.jpg'],
    LatLng: [ 43.8553804, -102.3396912 ],
    description: "Badlands National Park, SD\n\nThe rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient mammals such as the rhino, horse, and saber-toothed cat once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today."
  },
  {
    id: '3',
    name: 'Big Bend National Park, TX',
    parkCode: 'bibe',
    src: ['images/bibe/bibe1.jpg', 'images/bibe/bibe2.jpg', 'images/bibe/bibe3.jpg', 'images/bibe/bibe4.jpg', 'images/bibe/bibe5.jpg'],
    LatLng: [ 29.1274869, -103.2425379 ],
    description: "Big Bend National Park, TX\n\nThere is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend."
  },
  {
    id: '4',
    name: 'Biscayne National Park, FL',
    parkCode: 'bisc',
    src: ['images/bisc/bisc1.jpg', 'images/bisc/bisc2.jpg', 'images/bisc/bisc3.jpg', 'images/bisc/bisc4.jpg', 'images/bisc/bisc5.jpg'],
    LatLng: [ 25.4630212, -80.3463698 ],
    description: "Biscayne National Park, FL\n\nWithin sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay."
  },
  {
    id: '5',
    name: 'Black Canyon of the Gunnison National Park, CO',
    parkCode: 'blca',
    src: ['images/blca/blca1.jpg', 'images/blca/blca2.jpg', 'images/blca/blca3.jpg', 'images/blca/blca4.jpg', 'images/blca/blca5.jpg'],
    LatLng: [ 38.5753936, -107.7415961 ],
    description: "Black Canyon of the Gunnison National Park, CO\n\nBig enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky."
  },
  {
    id: '6',
    name: 'Bryce Canyon National Park, UT',
    parkCode: 'brca',
    src: ['images/brca/brca1.jpg', 'images/brca/brca2.jpg', 'images/brca/brca3.jpg', 'images/brca/brca4.jpg', 'images/brca/brca5.jpg'],
    LatLng: [ 37.5930377, -112.1870895 ],
    description: "Bryce Canyon National Park, UT\n\nThere is no place like Bryce Canyon. Hoodoos (odd-shaped pillars of rock left standing from the forces of erosion) can be found on every continent, but here is the largest collection of hoodoos in the world! Descriptions fail. Photographs do not do it justice. Bring your sense of wonder and imagination when visiting Bryce Canyon National Park."
  },
  {
    id: '7',
    name: 'Canyonlands National Park, UT',
    parkCode: 'cany',
    src: ['images/cany/cany1.jpg', 'images/cany/cany2.jpg', 'images/cany/cany3.jpg', 'images/cany/cany4.jpg', 'images/cany/cany5.jpg'],
    LatLng: [ 38.3268693, -109.8782592 ],
    description: "Canyonlands National Park, UT\n\nCanyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure."
  },
  {
    id: '8',
    name: 'Capitol Reef National Park, UT',
    parkCode: 'care',
    src: ['images/care/care1.jpg', 'images/care/care2.jpg', 'images/care/care3.jpg', 'images/care/care4.jpg', 'images/care/care5.jpg'],
    LatLng: [ 38.3669703, -111.2615042 ],
    description: "Capitol Reef National Park, UT\n\nLocated in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles."
  },
  {
    id: '9',
    name: 'Carlsbad Caverns National Park, NM',
    parkCode: 'cave',
    src: ['images/cave/cave1.jpg', 'images/cave/cave2.jpg', 'images/cave/cave3.jpg', 'images/cave/cave4.jpg', 'images/cave/cave5.jpg'],
    LatLng: [ 32.1478553, -104.5567138 ],
    description: "Carlsbad Caverns National Park, NM\n\nHigh ancient sea ledges, deep rocky canyons, flowering cactus and desert wildlife - treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves - formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes."
  },
  {
    id: '10',
    name: 'Congaree National Park, SC',
    parkCode: 'cong',
    src: ['images/cong/cong1.jpg', 'images/cong/cong2.jpg', 'images/cong/cong3.jpg', 'images/cong/cong4.jpg', 'images/cong/cong5.jpg'],
    LatLng: [ 33.7916877, -80.7693495 ],
    description: "Congaree National Park, SC\n\nAstonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees."
  },
  {
    id: '11',
    name: 'Crater Lake National Park, OR',
    parkCode: 'crla',
    src: ['images/crla/crla1.jpg', 'images/crla/crla2.jpg', 'images/crla/crla3.jpg', 'images/crla/crla4.jpg', 'images/crla/crla5.jpg'],
    LatLng: [ 42.8684411, -122.1684785 ],
    description: "Crater Lake National Park, OR\n\nCrater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and perhaps the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range."
  },
  {
    id: '12',
    name: 'Cuyahoga Valley National Park, OH',
    parkCode: 'cuva',
    src: ['images/cuva/cuva1.jpg', 'images/cuva/cuva2.jpg', 'images/cuva/cuva3.jpg', 'images/cuva/cuva4.jpg', 'images/cuva/cuva5.jpg'],
    LatLng: [ 41.2808248, -81.567812 ],
    description: "Cuyahoga Valley National Park, OH\n\nThough a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal."
  },
  {
    id: '13',
    name: 'Death Valley National Park, CA/NV',
    parkCode: 'deva',
    src: ['images/deva/deva1.jpg', 'images/deva/deva2.jpg', 'images/deva/deva3.jpg', 'images/deva/deva4.jpg', 'images/deva/deva5.jpg'],
    LatLng: [ 36.5053891, -117.0794078 ],
    description: "Death Valley National Park, CA/NV\n\nIn this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley."
  },
  {
    id: '14',
    name: 'Everglades National Park, FL',
    parkCode: 'ever',
    src: ['images/ever/ever1.jpg', 'images/ever/ever2.jpg', 'images/ever/ever3.jpg', 'images/ever/ever4.jpg', 'images/ever/ever5.jpg'],
    LatLng: [ 25.2866149, -80.8986502 ],
    description: "Everglades National Park, FL\n\nEverglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther.\n\nAn international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty."
  },
  {
    id: '15',
    name: 'Glacier National Park, MT',
    parkCode: 'glac',
    src: ['images/glac/glac1.jpg', 'images/glac/glac2.jpg', 'images/glac/glac3.jpg', 'images/glac/glac4.jpg', 'images/glac/glac5.jpg'],
    LatLng: [ 48.7596128, -113.7870225 ],
    description: "Glacier National Park, MT\n\nAs the Crown of the Continent, Glacier is the headwaters for streams that flow to the Pacific Ocean, the Gulf of Mexico, and to Hudson's Bay. What happens here affects waters in a huge section of North America. Due to a detection of invasive mussel populations in central Montana, Glacier has closed all park waters to motorized and trailered watercraft until further notice."
  },
  {
    id: '16',
    name: 'Grand Canyon National Park, AZ',
    parkCode: 'grca',
    src: ['images/grca/grca1.jpg', 'images/grca/grca2.jpg', 'images/grca/grca3.jpg', 'images/grca/grca4.jpg', 'images/grca/grca5.jpg'],
    LatLng: [ 36.1069642, -112.1129972 ],
    description: "Grand Canyon National Park, AZ\n\nUnique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size \n\nThe South Rim is open all year. \nMost North Rim visitor services will shut down on Monday, October 16, 2017"
  },
  {
    id: '17',
    name: 'Grand Teton National Park, WY',
    parkCode: 'grte',
    src: ['images/grte/grte1.jpg', 'images/grte/grte2.jpg', 'images/grte/grte3.jpg', 'images/grte/grte4.jpg', 'images/grte/grte5.jpg'],
    LatLng: [ 43.7904282, -110.6817627 ],
    description: "Grand Teton National Park, WY\n\nRising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River or enjoy the serenity of this remarkable place."
  },
  {
    id: '18',
    name: 'Great Basin National Park, NV',
    parkCode: 'grba',
    src: ['images/grba/grba1.jpg', 'images/grba/grba2.jpg', 'images/grba/grba3.jpg', 'images/grba/grba4.jpg', 'images/grba/grba5.jpg'],
    LatLng: [ 38.983333, -114.3 ],
    description: "Great Basin National Park, NV\n\nFrom the 13,000-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!"
  },
  {
    id: '19',
    name: 'Great Sand Dunes National Park, CO',
    parkCode: 'grsa',
    src: ['images/grsa/grsa1.jpg', 'images/grsa/grsa2.jpg', 'images/grsa/grsa3.jpg', 'images/grsa/grsa4.jpg', 'images/grsa/grsa5.jpg'],
    LatLng: [ 37.7915959, -105.5943276 ],
    description: "Great Sand Dunes National Park, CO\n\nThe tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, conifer and aspen forests, alpine lakes, and tundra. Experience this diversity through hiking, sand sledding, splashing in Medano Creek, wildlife watching, and more! The park and preserve are open 24 hours a day, so plan to also experience night skies and nocturnal wildlife during your visit."
  },
  {
    id: '20',
    name: 'Great Smoky Mountains National Park, TN/NC',
    parkCode: 'grsm',
    src: ['images/grsm/grsm1.jpg', 'images/grsm/grsm2.jpg', 'images/grsm/grsm3.jpg', 'images/grsm/grsm4.jpg', 'images/grsm/grsm5.jpg'],
    LatLng: [ 35.6117644, -83.4895449 ],
    description: "Great Smoky Mountains National Park, TN/NC\n\nRidge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park."
  },
  {
    id: '21',
    name: 'Guadalupe Mountains National Park, TX',
    parkCode: 'gumo',
    src: ['images/gumo/gumo1.jpg', 'images/gumo/gumo2.jpg', 'images/gumo/gumo3.jpg', 'images/gumo/gumo4.jpg', 'images/gumo/gumo5.jpg'],
    LatLng: [ 31.94519, -104.8725221 ],
    description: "Guadalupe Mountains National Park, TX\n\nGuadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival. Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other within the NPS."
  },
  {
    id: '22',
    name: 'Hot Springs National Park, AR',
    parkCode: 'hosp',
    src: ['images/hosp/hosp1.jpg', 'images/hosp/hosp2.jpg', 'images/hosp/hosp3.jpg', 'images/hosp/hosp4.jpg', 'images/hosp/hosp5.jpg'],
    LatLng: [ 34.5216915, -93.0423545 ],
    description: "Hot Springs National Park, AR\n\nWater. That's what first attracted people, and they have been coming here ever since to use these soothing thermal waters to heal and relax. Rich and poor alike came for the baths, and a thriving city built up around the hot springs. Together nicknamed \"The American Spa,\" Hot Springs National Park today surrounds the north end of the city of Hot Springs, Arkansas. Come discover it for yourself."
  },
  {
    id: '23',
    name: 'Joshua Tree National Park, CA',
    parkCode: 'jotr',
    src: ['images/jotr/jotr1.jpg', 'images/jotr/jotr2.jpg', 'images/jotr/jotr3.jpg', 'images/jotr/jotr4.jpg', 'images/jotr/jotr5.jpg'],
    LatLng: [ 33.873415, -115.9009923 ],
    description: "Joshua Tree National Park, CA\n\nTwo distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself."
  },
  {
    id: '24',
    name: 'Lassen Volcanic National Park, CA',
    parkCode: 'lavo',
    src: ['images/lavo/lavo1.jpg', 'images/lavo/lavo2.jpg', 'images/lavo/lavo3.jpg', 'images/lavo/lavo4.jpg', 'images/lavo/lavo5.jpg'],
    LatLng: [ 40.49766, -121.4206552 ],
    description: "Lassen Volcanic National Park, CA\n\nLassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land. Lassen Volcanic offers opportunities to discover the wonder and mysteries of volcanoes and hot water for visitors willing to explore the undiscovered."
  },
  {
    id: '25',
    name: 'Mammoth Cave National Park, KY',
    parkCode: 'maca',
    src: ['images/maca/maca1.jpg', 'images/maca/maca2.jpg', 'images/maca/maca3.jpg', 'images/maca/maca4.jpg', 'images/maca/maca5.jpg'],
    LatLng: [ 37.1869978, -86.100528 ],
    description: "Mammoth Cave National Park, KY\n\nMammoth Cave National Park preserves the cave system and a part of the Green River valley and hilly country of south central Kentucky. This is the world's longest known cave system, with more than 400 miles explored. Early guide Stephen Bishop called the cave a \"grand, gloomy and peculiar place,\" but its vast chambers and complex labyrinths have earned its name - Mammoth."
  },
  {
    id: '26',
    name: 'Mesa Verde National Park, CO',
    parkCode: 'meve',
    src: ['images/meve/meve1.jpg', 'images/meve/meve2.jpg', 'images/meve/meve3.jpg', 'images/meve/meve4.jpg', 'images/meve/meve5.jpg'],
    LatLng: [ 37.2308729, -108.4618335 ],
    description: "Mesa Verde National Park, CO\n\nMesa Verde, Spanish for green table, offers a spectacular look into the lives of the Ancestral Pueblo people who made it their home for over 700 years, from AD 600 to 1300. Today the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States."
  },
  {
    id: '27',
    name: 'Mount Rainier National Park, WA',
    parkCode: 'mora',
    src: ['images/mora/mora1.jpg', 'images/mora/mora2.jpg', 'images/mora/mora3.jpg', 'images/mora/mora4.jpg', 'images/mora/mora5.jpg'],
    LatLng: [ 46.8799663, -121.7269094 ],
    description: "Mount Rainier National Park, WA\n\nAscending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning six major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits."
  },
  {
    id: '28',
    name: 'North Cascades National Park, WA',
    parkCode: 'noca',
    src: ['images/noca/noca1.jpg', 'images/noca/noca2.jpg', 'images/noca/noca3.jpg', 'images/noca/noca4.jpg', 'images/noca/noca5.jpg'],
    LatLng: [ 48.7718174, -121.2984648 ],
    description: "North Cascades National Park, WA\n\nLess than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades."
  },
  {
    id: '29',
    name: 'Olympic National Park, WA',
    parkCode: 'olym',
    src: ['images/olym/olym1.jpg', 'images/olym/olym2.jpg', 'images/olym/olym3.jpg', 'images/olym/olym4.jpg', 'images/olym/olym5.jpg'],
    LatLng: [ 47.8021067, -123.6043524 ],
    description: "Olympic National Park, WA\n\nWith its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!"
  },
  {
    id: '30',
    name: 'Petrified Forest National Park, AZ',
    parkCode: 'pefo',
    src: ['images/pefo/pefo1.jpg', 'images/pefo/pefo2.jpg', 'images/pefo/pefo3.jpg', 'images/pefo/pefo4.jpg', 'images/pefo/pefo5.jpg'],
    LatLng: [ 35.065931, -109.78204 ],
    description: "Petrified Forest National Park, AZ\n\nDid you know that Petrified Forest is more spectacular than ever? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin and little known areas like the Martha's Butte. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!"
  },
  {
    id: '31',
    name: 'Pinnacles National Park, CA',
    parkCode: 'pinn',
    src: ['images/pinn/pinn1.jpg', 'images/pinn/pinn2.jpg', 'images/pinn/pinn3.jpg', 'images/pinn/pinn4.jpg', 'images/pinn/pinn5.jpg'],
    LatLng: [ 36.4905655, -121.1824925 ],
    description: "Pinnacles National Park, CA\n\nSome 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor."
  },
  {
    id: '32',
    name: 'Redwood National Park, CA',
    parkCode: 'redw',
    src: ['images/redw/redw1.jpg', 'images/redw/redw2.jpg', 'images/redw/redw3.jpg', 'images/redw/redw4.jpg', 'images/redw/redw5.jpg'],
    LatLng: [ 41.2131788, -124.0046275 ],
    description: "Redwood National Park, CA\n\nMost people know Redwood as home to the tallest trees on Earth. The parks also protect vast prairies, oak woodlands, wild riverways, and nearly 40 miles of rugged coastline.  For thousands of years people have lived in this verdant landscape.  Together, the National Park Service and California State Parks manage these lands for the inspiration, enjoyment, and education of all."
  },
  {
    id: '33',
    name: 'Rocky Mountain National Park, CO',
    parkCode: 'romo',
    src: ['images/romo/romo1.jpg', 'images/romo/romo2.jpg', 'images/romo/romo3.jpg', 'images/romo/romo4.jpg', 'images/romo/romo5.jpg'],
    LatLng: [ 40.3427932, -105.6836389 ],
    description: "Rocky Mountain National Park, CO\n\nRocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!"
  },
  {
    id: '34',
    name: 'Saguaro National Park, AZ',
    parkCode: 'sagu',
    src: ['images/sagu/sagu1.jpg', 'images/sagu/sagu2.jpg', 'images/sagu/sagu3.jpg', 'images/sagu/sagu4.jpg', 'images/sagu/sagu5.jpg'],
    LatLng: [ 32.2967359, -111.166615 ],
    description: "Saguaro National Park, AZ\n\nTucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset."
  },
  {
    id: '35',
    name: 'Sequoia and Kings Canyon National Park, CA',
    parkCode: 'seki',
    src: ['images/seki/seki1.jpg', 'images/seki/seki2.jpg', 'images/seki/seki3.jpg', 'images/seki/seki4.jpg', 'images/seki/seki5.jpg'],
    LatLng: [ 36.4863668, -118.5657516 ],
    description: "Sequoia and Kings Canyon National Park, CA\n\nThis dramatic landscape testifies to nature's size, beauty, and diversity--huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. These two parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'."
  },
  {
    id: '36',
    name: 'Shenandoah National Park, VA',
    parkCode: 'shen',
    src: ['images/shen/shen1.jpg', 'images/shen/shen2.jpg', 'images/shen/shen3.jpg', 'images/shen/shen4.jpg', 'images/shen/shen5.jpg'],
    LatLng: [ 38.6632309, -78.3720764 ],
    description: "Shenandoah National Park, VA\n\nJust 75 miles from the bustle of Washington, D.C., Shenandoah National Park is your escape to recreation and re-creation. Cascading waterfalls, spectacular vistas, quiet wooded hollows—take a hike, meander along Skyline Drive, or picnic with the family. 200,000 acres of protected lands are haven to deer, songbirds, the night sky…and you. Plan a Shenandoah escape today!"
  },
  {
    id: '37',
    name: 'Theodore Roosevelt National Park, ND',
    parkCode: 'this',
    src: ['images/this/this1.jpg', 'images/this/this2.jpg', 'images/this/this3.jpg', 'images/this/this4.jpg', 'images/this/this5.jpg'],
    LatLng: [ 46.978965, -103.5387091 ],
    description: "Theodore Roosevelt National Park, ND\n\nIn the 1930s, landscape architects transformed Mason’s Island from neglected, overgrown farmland into Theodore Roosevelt Island, a memorial to America’s 26th president. They conceived a “real forest” designed to mimic the natural forest that once covered the island. Today miles of trails through wooded uplands and swampy bottomlands honor the legacy of a great outdoorsman and conservationist."
  },
  {
    id: '38',
    name: 'Voyageurs National Park, MN',
    parkCode: 'voya',
    src: ['images/voya/voya1.jpg', 'images/voya/voya2.jpg', 'images/voya/voya3.jpg', 'images/voya/voya4.jpg', 'images/voya/voya5.jpg'],
    LatLng: [ 48.4268554, -92.8465541 ],
    description: "Voyageurs National Park, MN\n\nVoyageurs National Park lies within the heart of the North American Continent.  Here you can see and touch rocks half as old as the world, experience the life of a voyageur, immerse yourself in the sights and sounds of a boreal forest, view the dark skies, or ply the interconnected water routes."
  },
  {
    id: '39',
    name: 'Wind Cave National Park, SD',
    parkCode: 'wica',
    src: ['images/wica/wica1.jpg', 'images/wica/wica2.jpg', 'images/wica/wica3.jpg', 'images/wica/wica4.jpg', 'images/wica/wica5.jpg'],
    LatLng: [ 43.6045811, -103.4213433 ],
    description: "Wind Cave National Park, SD\n\nBison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere."
  },
  {
    id: '40',
    name: 'Yellowstone National Park, WY',
    parkCode: 'yell',
    src: ['images/yell/yell1.jpg', 'images/yell/yell2.jpg', 'images/yell/yell3.jpg', 'images/yell/yell4.jpg', 'images/yell/yell5.jpg'],
    LatLng: [ 44.427963, -110.588455 ],
    description: "Yellowstone National Park, WY\n\nVisit Yellowstone and experience the world's first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people.”"
  },
  {
    id: '41',
    name: 'Yosemite National Park, CA',
    parkCode: 'yose',
    src: ['images/yose/yose1.jpg', 'images/yose/yose2.jpg', 'images/yose/yose3.jpg', 'images/yose/yose4.jpg', 'images/yose/yose5.jpg'],
    LatLng: [ 37.8646393, -119.5379448 ],
    description: "Yosemite National Park, CA\n\nNot just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more."
  },
  {
    id: '42',
    name: 'Zion National Park, UT',
    parkCode: 'zion',
    src: ['images/zion/zion1.jpg', 'images/zion/zion2.jpg', 'images/zion/zion3.jpg', 'images/zion/zion4.jpg', 'images/zion/zion5.jpg'],
    LatLng: [ 37.2982022, -113.0263005 ],
    description: "Zion National Park, UT\n\nFollow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures."
  }
]
