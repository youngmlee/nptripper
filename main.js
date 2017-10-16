/* eslint-disable no-unused-vars */

var map;
var src='http://gdurl.com/NiZm'

$(document).ready(function() {
  console.log('Document ready!')
   $('.carousel').carousel('cycle');
});

function cycleCar() {
  $('.carousel').carousel('cycle')
}

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
    const $capture = document.getElementById('capture')
    $capture.innerHTML = content
    var parkName = $capture.innerText
    parkFinder(parkName)
  });
}

function parkFinder (parkName) {
  switch(parkName) {
    case('Acadia National Park'):
      popCar('acad');
      fetchDescription('acad');
      createLinks('acad');
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
  const $capture = document.getElementById('capture')
  const $row = document.querySelector('.row')
  var parkName = $capture.innerText
  $row.removeChild($capture)
  createCar()
  var $carousel = document.querySelectorAll('.carousel-inner img')
  var foundObj = findObjByParkCode(parkCode, parkInfo)
  var parkSrc = foundObj.src
  var arr = ['images/deva/deva1.jpg', 'images/deva/deva2.jpg', 'images/deva/deva3.jpg', 'images/deva/deva4.jpg', 'images/deva/deva5.jpg']
  for (var i = 0; i < $carousel.length; i++) {
    $carousel[i].setAttribute('src', parkSrc[i])
  }
  cycleCar()
}

function createCar() {
  var $carExample = document.createElement('div')
  $carExample.setAttribute('id', 'carouselExampleIndicators')
  $carExample.setAttribute('class', 'carousel slide')
  $carExample.setAttribute('data-ride', 'carousel')
  var $carIndicators = document.createElement('ol')
  $carIndicators.setAttribute('class', 'carousel-indicators')
  var $carExampleIndicatorsActive = document.createElement('li')
  $carExampleIndicatorsActive.setAttribute('data-target', '#carouselExampleIndicators')
  $carExampleIndicatorsActive.setAttribute('data-slide-to', '0')
  $carExampleIndicatorsActive.setAttribute('class', 'active')
  var $carExampleIndicatorsTwo = document.createElement('li')
  $carExampleIndicatorsTwo.setAttribute('data-target', '#carouselExampleIndicators')
  $carExampleIndicatorsTwo.setAttribute('data-slide-to', '1')
  var $carExampleIndicatorsThree = document.createElement('li')
  $carExampleIndicatorsThree.setAttribute('data-target', '#carouselExampleIndicators')
  $carExampleIndicatorsThree.setAttribute('data-slide-to', '2')
  var $carExampleIndicatorsFour = document.createElement('li')
  $carExampleIndicatorsFour.setAttribute('data-target', '#carouselExampleIndicators')
  $carExampleIndicatorsFour.setAttribute('data-slide-to', '3')
  var $carExampleIndicatorsFive = document.createElement('li')
  $carExampleIndicatorsFive.setAttribute('data-target', '#carouselExampleIndicators')
  $carExampleIndicatorsFive.setAttribute('data-slide-to', '4')
  var $carInner = document.createElement('div')
  $carInner.setAttribute('class', 'carousel-inner')
  var $carItemActive = document.createElement('div')
  $carItemActive.setAttribute('class', 'carousel-item-active')
  var $carActiveImg = document.createElement('img')
  $carActiveImg.setAttribute('class', 'd-block w-100')
  $carActiveImg.setAttribute('src', '')
  $carActiveImg.setAttribute('alt', 'First slide')
  var $carItemTwo = document.createElement('div')
  $carItemTwo.setAttribute('class', 'carousel-item')
  var $carItemThree = document.createElement('div')
  $carItemThree.setAttribute('class', 'carousel-item')
  var $carItemFour = document.createElement('div')
  $carItemFour.setAttribute('class', 'carousel-item')
  var $carItemFive = document.createElement('div')
  $carItemFive.setAttribute('class', 'carousel-item')
  var $carImgTwo = document.createElement('img')
  $carImgTwo.setAttribute('class', 'd-block w-100')
  $carImgTwo.setAttribute('src', '')
  $carImgTwo.setAttribute('alt', 'Second slide')
  var $carImgThree = document.createElement('img')
  $carImgThree.setAttribute('class', 'd-block w-100')
  $carImgThree.setAttribute('src', '')
  $carImgThree.setAttribute('alt', 'Third slide')
  var $carImgFour = document.createElement('img')
  $carImgFour.setAttribute('class', 'd-block w-100')
  $carImgFour.setAttribute('src', '')
  $carImgFour.setAttribute('alt', 'Fourth slide')
  var $carImgFive = document.createElement('img')
  $carImgFive.setAttribute('class', 'd-block w-100')
  $carImgFive.setAttribute('src', '')
  $carImgFive.setAttribute('alt', 'Fifth slide')
  var $carControlPrev = document.createElement('a')
  $carControlPrev.setAttribute('class', 'carousel-control-prev')
  $carControlPrev.setAttribute('href', '#carouselExampleIndicators')
  $carControlPrev.setAttribute('role', 'button')
  $carControlPrev.setAttribute('data-slide', 'prev')
  var $carPrevSpan = document.createElement('span')
  $carPrevSpan.setAttribute('class', 'carousel-control-prev-icon')
  $carPrevSpan.setAttribute('aria-hidden', 'true')
  var $carControlNext = document.createElement('a')
  $carControlNext.setAttribute('class', 'carousel-control-next')
  $carControlNext.setAttribute('href', '#carouselExampleIndicators')
  $carControlNext.setAttribute('role', 'button')
  $carControlNext.setAttribute('data-slide', 'next')
  var $carNextSpan = document.createElement('span')
  $carNextSpan.setAttribute('class', 'carousel-control-next-icon')
  $carNextSpan.setAttribute('aria-hidden', 'true')
  var $srSpanPrev = document.createElement('span')
  var $srSpanNext = document.createElement('span')
  $srSpanPrev.setAttribute('class', 'sr-only')
  $srSpanNext.setAttribute('class', 'sr-only')
  $srSpanPrev.innerHTML = 'Previous'
  $srSpanNext.innerHTML = 'Next'
  $carItemActive.appendChild($carActiveImg)
  $carInner.appendChild($carItemActive)
  $carItemTwo.appendChild($carImgTwo)
  $carInner.appendChild($carItemTwo)
  $carItemThree.appendChild($carImgThree)
  $carInner.appendChild($carItemThree)
  $carItemFour.appendChild($carImgFour)
  $carInner.appendChild($carItemFour)
  $carItemFive.appendChild($carImgFive)
  $carInner.appendChild($carItemFive)
  $carIndicators.appendChild($carExampleIndicatorsActive)
  $carIndicators.appendChild($carExampleIndicatorsTwo)
  $carIndicators.appendChild($carExampleIndicatorsThree)
  $carIndicators.appendChild($carExampleIndicatorsFour)
  $carIndicators.appendChild($carExampleIndicatorsFive)
  $carControlPrev.appendChild($carPrevSpan)
  $carControlPrev.appendChild($srSpanPrev)
  $carControlNext.appendChild($carNextSpan)
  $carControlNext.appendChild($srSpanNext)
  $carExample.appendChild($carIndicators)
  $carExample.appendChild($carInner)
  $carExample.appendChild($carControlPrev)
  $carExample.appendChild($carControlNext)
  var $newCapture = document.createElement('div')
  $newCapture.setAttribute('id', 'capture')
  $newCapture.setAttribute('class', 'col-4')
  $newCapture.appendChild($carExample)
  var $row = document.querySelector('.row')
  $row.appendChild($newCapture)
}

function fetchDescription(parkCode) {
  const url = 'https://developer.nps.gov/api/v0/parks?parkCode=' + parkCode
  const $description = document.createElement('p')
  $description.setAttribute('class', 'description')
  const $capture = document.querySelector('#capture')
  fetch(url, {headers:{AUTHORIZATION: '0CA48841-5F16-430F-BB39-F9AD09242D77'}})
  .then(response => {
    return response.json()
  })
  .then(fetched => {
    $description.innerText = fetched.data[0].fullName + ' (' + fetched.data[0].states + ') ' + fetched.data[0].description
    $capture.appendChild($description)
  })
}

function createLinks(parkCode) {
  const url = 'https://developer.nps.gov/api/v0/parks?parkCode=' + parkCode
  const $linksRow = document.createElement('div')
  $linksRow.setAttribute('class', 'row justify-content-end')
  const $linksDiv = document.createElement('div')
  $linksDiv.setAttribute('class', 'col-4')
  const $moreInfo = document.createElement('button')
  $moreInfo.setAttribute('class', 'more-info')
  const $cheatsheet = document.createElement('button')
  $cheatsheet.setAttribute('class', 'cheatsheet')
  const $bg = document.querySelector('.bg')
  $linksDiv.appendChild($moreInfo)
  $linksDiv.appendChild($cheatsheet)
  $linksRow.appendChild($linksDiv)
  $bg.appendChild($linksRow)
  const $capture = document.querySelector('#capture')
  fetch(url, {headers:{AUTHORIZATION: '0CA48841-5F16-430F-BB39-F9AD09242D77'}})
  .then(response => {
    return response.json()
  })
  .then(fetched => {
    $description.innerText = fetched.data[0].fullName + ' (' + fetched.data[0].states + ') ' + fetched.data[0].description
    $capture.appendChild($description)
  })
}

const parkInfo = [
  {
    id: '0',
    name: 'Acadia National Park, ME',
    parkCode: 'acad',
    src: ['images/acad/acad1.jpg', 'images/acad/acad2.jpg', 'images/acad/acad3.jpg', 'images/acad/acad4.jpg', 'images/acad/acad5.jpg'],
    LatLng: [ 44.3385559, -68.2733346 ]
  },
  {
    id: '1',
    name: 'Arches National Park, UT',
    parkCode: 'arch',
    src: ['images/arch/arch1.jpg', 'images/arch/arch2.jpg', 'images/arch/arch3.jpg', 'images/arch/arch4.jpg', 'images/arch/arch5.jpg'],
    LatLng: [ 38.6165441, -109.6163418 ]
  },
  {
    id: '2',
    name: 'Badlands National Park, SD',
    parkCode: 'badl',
    src: ['images/badl/badl1.jpg', 'images/badl/badl2.jpg', 'images/badl/badl3.jpg', 'images/badl/badl4.jpg', 'images/badl/badl5.jpg'],
    LatLng: [ 43.8553804, -102.3396912 ]
  },
  {
    id: '3',
    name: 'Big Bend National Park, TX',
    parkCode: 'bibe',
    src: ['images/bibe/bibe1.jpg', 'images/bibe/bibe2.jpg', 'images/bibe/bibe3.jpg', 'images/bibe/bibe4.jpg', 'images/bibe/bibe5.jpg'],
    LatLng: [ 29.1274869, -103.2425379 ]
  },
  {
    id: '4',
    name: 'Biscayne National Park, FL',
    parkCode: 'bisc',
    src: ['images/bisc/bisc1.jpg', 'images/bisc/bisc2.jpg', 'images/bisc/bisc3.jpg', 'images/bisc/bisc4.jpg', 'images/bisc/bisc5.jpg'],
    LatLng: [ 25.4630212, -80.3463698 ]
  },
  {
    id: '5',
    name: 'Black Canyon of the Gunnison National Park, CO',
    parkCode: 'blca',
    src: ['images/blca/blca1.jpg', 'images/blca/blca2.jpg', 'images/blca/blca3.jpg', 'images/blca/blca4.jpg', 'images/blca/blca5.jpg'],
    LatLng: [ 38.5753936, -107.7415961 ]
  },
  {
    id: '6',
    name: 'Bryce Canyon National Park, UT',
    parkCode: 'brca',
    src: ['images/brca/brca1.jpg', 'images/brca/brca2.jpg', 'images/brca/brca3.jpg', 'images/brca/brca4.jpg', 'images/brca/brca5.jpg'],
    LatLng: [ 37.5930377, -112.1870895 ]
  },
  {
    id: '7',
    name: 'Canyonlands National Park, UT',
    parkCode: 'cany',
    src: ['images/cany/cany1.jpg', 'images/cany/cany2.jpg', 'images/cany/cany3.jpg', 'images/cany/cany4.jpg', 'images/cany/cany5.jpg'],
    LatLng: [ 38.3268693, -109.8782592 ]
  },
  {
    id: '8',
    name: 'Capitol Reef National Park, UT',
    parkCode: 'care',
    src: ['images/care/care1.jpg', 'images/care/care2.jpg', 'images/care/care3.jpg', 'images/care/care4.jpg', 'images/care/care5.jpg'],
    LatLng: [ 38.3669703, -111.2615042 ]
  },
  {
    id: '9',
    name: 'Carlsbad Caverns National Park, NM',
    parkCode: 'cave',
    src: ['images/cave/cave1.jpg', 'images/cave/cave2.jpg', 'images/cave/cave3.jpg', 'images/cave/cave4.jpg', 'images/cave/cave5.jpg'],
    LatLng: [ 32.1478553, -104.5567138 ]
  },
  {
    id: '10',
    name: 'Congaree National Park, SC',
    parkCode: 'cong',
    src: ['images/cong/cong1.jpg', 'images/cong/cong2.jpg', 'images/cong/cong3.jpg', 'images/cong/cong4.jpg', 'images/cong/cong5.jpg'],
    LatLng: [ 33.7916877, -80.7693495 ]
  },
  {
    id: '11',
    name: 'Crater Lake National Park, OR',
    parkCode: 'crla',
    src: ['images/crla/crla1.jpg', 'images/crla/crla2.jpg', 'images/crla/crla3.jpg', 'images/crla/crla4.jpg', 'images/crla/crla5.jpg'],
    LatLng: [ 42.8684411, -122.1684785 ]
  },
  {
    id: '12',
    name: 'Cuyahoga Valley National Park, OH',
    parkCode: 'cuva',
    src: ['images/cuva/cuva1.jpg', 'images/cuva/cuva2.jpg', 'images/cuva/cuva3.jpg', 'images/cuva/cuva4.jpg', 'images/cuva/cuva5.jpg'],
    LatLng: [ 41.2808248, -81.567812 ]
  },
  {
    id: '13',
    name: 'Death Valley National Park, CA/NV',
    parkCode: 'deva',
    src: ['images/deva/deva1.jpg', 'images/deva/deva2.jpg', 'images/deva/deva3.jpg', 'images/deva/deva4.jpg', 'images/deva/deva5.jpg'],
    LatLng: [ 36.5053891, -117.0794078 ]
  },
  {
    id: '14',
    name: 'Everglades National Park, FL',
    parkCode: 'ever',
    src: ['images/ever/ever1.jpg', 'images/ever/ever2.jpg', 'images/ever/ever3.jpg', 'images/ever/ever4.jpg', 'images/ever/ever5.jpg'],
    LatLng: [ 25.2866149, -80.8986502 ]
  },
  {
    id: '15',
    name: 'Glacier National Park, MT',
    parkCode: 'glac',
    src: ['images/glac/glac1.jpg', 'images/glac/glac2.jpg', 'images/glac/glac3.jpg', 'images/glac/glac4.jpg', 'images/glac/glac5.jpg'],
    LatLng: [ 48.7596128, -113.7870225 ]
  },
  {
    id: '16',
    name: 'Grand Canyon National Park, AZ',
    parkCode: 'grca',
    src: ['images/grca/grca1.jpg', 'images/grca/grca2.jpg', 'images/grca/grca3.jpg', 'images/grca/grca4.jpg', 'images/grca/grca5.jpg'],
    LatLng: [ 36.1069642, -112.1129972 ]
  },
  {
    id: '17',
    name: 'Grand Teton National Park, WY',
    parkCode: 'grte',
    src: ['images/grte/grte1.jpg', 'images/grte/grte2.jpg', 'images/grte/grte3.jpg', 'images/grte/grte4.jpg', 'images/grte/grte5.jpg'],
    LatLng: [ 43.7904282, -110.6817627 ]
  },
  {
    id: '18',
    name: 'Great Basin National Park, NV',
    parkCode: 'grba',
    src: ['images/grba/grba1.jpg', 'images/grba/grba2.jpg', 'images/grba/grba3.jpg', 'images/grba/grba4.jpg', 'images/grba/grba5.jpg'],
    LatLng: [ 38.983333, -114.3 ]
  },
  {
    id: '19',
    name: 'Great Sand Dunes National Park, CO',
    parkCode: 'grsa',
    src: ['images/grsa/grsa1.jpg', 'images/grsa/grsa2.jpg', 'images/grsa/grsa3.jpg', 'images/grsa/grsa4.jpg', 'images/grsa/grsa5.jpg'],
    LatLng: [ 37.7915959, -105.5943276 ]
  },
  {
    id: '20',
    name: 'Great Smoky Mountains National Park, TN/NC',
    parkCode: 'grsm',
    src: ['images/grsm/grsm1.jpg', 'images/grsm/grsm2.jpg', 'images/grsm/grsm3.jpg', 'images/grsm/grsm4.jpg', 'images/grsm/grsm5.jpg'],
    LatLng: [ 35.6117644, -83.4895449 ]
  },
  {
    id: '21',
    name: 'Guadalupe Mountains National Park, TX',
    parkCode: 'gumo',
    src: ['images/gumo/gumo1.jpg', 'images/gumo/gumo2.jpg', 'images/gumo/gumo3.jpg', 'images/gumo/gumo4.jpg', 'images/gumo/gumo5.jpg'],
    LatLng: [ 31.94519, -104.8725221 ]
  },
  {
    id: '22',
    name: 'Hot Springs National Park, AR',
    parkCode: 'hosp',
    src: ['images/hosp/hosp1.jpg', 'images/hosp/hosp2.jpg', 'images/hosp/hosp3.jpg', 'images/hosp/hosp4.jpg', 'images/hosp/hosp5.jpg'],
    LatLng: [ 34.5216915, -93.0423545 ]
  },
  {
    id: '23',
    name: 'Joshua Tree National Park, CA',
    parkCode: 'jotr',
    src: ['images/jotr/jotr1.jpg', 'images/jotr/jotr2.jpg', 'images/jotr/jotr3.jpg', 'images/jotr/jotr4.jpg', 'images/jotr/jotr5.jpg'],
    LatLng: [ 33.873415, -115.9009923 ]
  },
  {
    id: '24',
    name: 'Lassen Volcanic National Park, CA',
    parkCode: 'lavo',
    src: ['images/lavo/lavo1.jpg', 'images/lavo/lavo2.jpg', 'images/lavo/lavo3.jpg', 'images/lavo/lavo4.jpg', 'images/lavo/lavo5.jpg'],
    LatLng: [ 40.49766, -121.4206552 ]
  },
  {
    id: '25',
    name: 'Mammoth Cave National Park, KY',
    parkCode: 'maca',
    src: ['images/maca/maca1.jpg', 'images/maca/maca2.jpg', 'images/maca/maca3.jpg', 'images/maca/maca4.jpg', 'images/maca/maca5.jpg'],
    LatLng: [ 37.1869978, -86.100528 ]
  },
  {
    id: '26',
    name: 'Mesa Verde National Park, CO',
    parkCode: 'meve',
    src: ['images/meve/meve1.jpg', 'images/meve/meve2.jpg', 'images/meve/meve3.jpg', 'images/meve/meve4.jpg', 'images/meve/meve5.jpg'],
    LatLng: [ 37.2308729, -108.4618335 ]
  },
  {
    id: '27',
    name: 'Mount Rainier National Park, WA',
    parkCode: 'mora',
    src: ['images/mora/mora1.jpg', 'images/mora/mora2.jpg', 'images/mora/mora3.jpg', 'images/mora/mora4.jpg', 'images/mora/mora5.jpg'],
    LatLng: [ 46.8799663, -121.7269094 ]
  },
  {
    id: '28',
    name: 'North Cascades National Park, WA',
    parkCode: 'noca',
    src: ['images/noca/noca1.jpg', 'images/noca/noca2.jpg', 'images/noca/noca3.jpg', 'images/noca/noca4.jpg', 'images/noca/noca5.jpg'],
    LatLng: [ 48.7718174, -121.2984648 ]
  },
  {
    id: '29',
    name: 'Olympic National Park, WA',
    parkCode: 'olym',
    src: ['images/olym/olym1.jpg', 'images/olym/olym2.jpg', 'images/olym/olym3.jpg', 'images/olym/olym4.jpg', 'images/olym/olym5.jpg'],
    LatLng: [ 47.8021067, -123.6043524 ]
  },
  {
    id: '30',
    name: 'Petrified Forest National Park, AZ',
    parkCode: 'pefo',
    src: ['images/pefo/pefo1.jpg', 'images/pefo/pefo2.jpg', 'images/pefo/pefo3.jpg', 'images/pefo/pefo4.jpg', 'images/pefo/pefo5.jpg'],
    LatLng: [ 35.065931, -109.78204 ]
  },
  {
    id: '31',
    name: 'Pinnacles National Park, CA',
    parkCode: 'pinn',
    src: ['images/pinn/pinn1.jpg', 'images/pinn/pinn2.jpg', 'images/pinn/pinn3.jpg', 'images/pinn/pinn4.jpg', 'images/pinn/pinn5.jpg'],
    LatLng: [ 36.4905655, -121.1824925 ]
  },
  {
    id: '32',
    name: 'Redwood National Park, CA',
    parkCode: 'redw',
    src: ['images/redw/redw1.jpg', 'images/redw/redw2.jpg', 'images/redw/redw3.jpg', 'images/redw/redw4.jpg', 'images/redw/redw5.jpg'],
    LatLng: [ 41.2131788, -124.0046275 ]
  },
  {
    id: '33',
    name: 'Rocky Mountain National Park, CO',
    parkCode: 'romo',
    src: ['images/romo/romo1.jpg', 'images/romo/romo2.jpg', 'images/romo/romo3.jpg', 'images/romo/romo4.jpg', 'images/romo/romo5.jpg'],
    LatLng: [ 40.3427932, -105.6836389 ]
  },
  {
    id: '34',
    name: 'Saguaro National Park, AZ',
    parkCode: 'sagu',
    src: ['images/sagu/sagu1.jpg', 'images/sagu/sagu2.jpg', 'images/sagu/sagu3.jpg', 'images/sagu/sagu4.jpg', 'images/sagu/sagu5.jpg'],
    LatLng: [ 32.2967359, -111.166615 ]
  },
  {
    id: '35',
    name: 'Sequoia and Kings Canyon National Park, CA',
    parkCode: 'seki',
    src: ['images/seki/seki1.jpg', 'images/seki/seki2.jpg', 'images/seki/seki3.jpg', 'images/seki/seki4.jpg', 'images/seki/seki5.jpg'],
    LatLng: [ 36.4863668, -118.5657516 ]
  },
  {
    id: '36',
    name: 'Shenandoah National Park, VA',
    parkCode: 'shen',
    src: ['images/shen/shen1.jpg', 'images/shen/shen2.jpg', 'images/shen/shen3.jpg', 'images/shen/shen4.jpg', 'images/shen/shen5.jpg'],
    LatLng: [ 38.6632309, -78.3720764 ]
  },
  {
    id: '37',
    name: 'Theodore Roosevelt National Park, ND',
    parkCode: 'this',
    src: ['images/this/this1.jpg', 'images/this/this2.jpg', 'images/this/this3.jpg', 'images/this/this4.jpg', 'images/this/this5.jpg'],
    LatLng: [ 46.978965, -103.5387091 ]
  },
  {
    id: '38',
    name: 'Voyageurs National Park, MN',
    parkCode: 'voya',
    src: ['images/voya/voya1.jpg', 'images/voya/voya2.jpg', 'images/voya/voya3.jpg', 'images/voya/voya4.jpg', 'images/voya/voya5.jpg'],
    LatLng: [ 48.4268554, -92.8465541 ]
  },
  {
    id: '39',
    name: 'Wind Cave National Park, SD',
    parkCode: 'wica',
    src: ['images/wica/wica1.jpg', 'images/wica/wica2.jpg', 'images/wica/wica3.jpg', 'images/wica/wica4.jpg', 'images/wica/wica5.jpg'],
    LatLng: [ 43.6045811, -103.4213433 ]
  },
  {
    id: '40',
    name: 'Yellowstone National Park, WY',
    parkCode: 'yell',
    src: ['images/yell/yell1.jpg', 'images/yell/yell2.jpg', 'images/yell/yell3.jpg', 'images/yell/yell4.jpg', 'images/yell/yell5.jpg'],
    LatLng: [ 44.427963, -110.588455 ]
  },
  {
    id: '41',
    name: 'Yosemite National Park, CA',
    parkCode: 'yose',
    src: ['images/yose/yose1.jpg', 'images/yose/yose2.jpg', 'images/yose/yose3.jpg', 'images/yose/yose4.jpg', 'images/yose/yose5.jpg'],
    LatLng: [ 37.8646393, -119.5379448 ]
  },
  {
    id: '42',
    name: 'Zion National Park, UT',
    parkCode: 'zion',
    src: ['images/zion/zion1.jpg', 'images/zion/zion2.jpg', 'images/zion/zion3.jpg', 'images/zion/zion4.jpg', 'images/zion/zion5.jpg'],
    LatLng: [ 37.2982022, -113.0263005 ]
  }
]
