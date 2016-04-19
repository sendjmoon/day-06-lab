var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];
var totalCookies = [];

var pikePlace = {
  storeName: 'Pike Place',
  minHrlyCust: 17,
  maxHrlyCust: 88,
  avgCookiesPerCust: 5.2,

  calcDailyTotal: function() {
    var custPerHour = [];
    var salesPerHour = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var pikePlaceListItem = document.createElement('li');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      pikePlaceListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('pikePlaceEl').appendChild(pikePlaceListItem);

      total += salesPerHour[i];
    }

    var pikePlaceTotalItem = document.createElement('li');
    totalCookies.push(total);
    pikePlaceTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('pikePlaceEl').appendChild(pikePlaceTotalItem);
    console.log(total);
  }
};

var seaTac = {
  storeName: 'SeaTac Airport',
  minHrlyCust: 6,
  maxHrlyCust: 24,
  avgCookiesPerCust: 1.2,

  calcDailyTotal: function() {
    var custPerHour = [];
    var salesPerHour = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var seaTacListItem = document.createElement('li');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      seaTacListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('seaTacEl').appendChild(seaTacListItem);

      total += salesPerHour[i];
    }

    var seaTacTotalItem = document.createElement('li');
    totalCookies.push(total);
    seaTacTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('seaTacEl').appendChild(seaTacTotalItem);
    console.log(total);
  }
};

var southCenter = {
  storeName: 'Southcenter',
  minHrlyCust: 11,
  maxHrlyCust: 38,
  avgCookiesPerCust: 1.9,

  calcDailyTotal: function() {
    var custPerHour = [];
    var salesPerHour = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var southCenterListItem = document.createElement('li');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      southCenterListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('southCenterEl').appendChild(southCenterListItem);

      total += salesPerHour[i];
    }

    var southCenterTotalItem = document.createElement('li');
    totalCookies.push(total);
    southCenterTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('southCenterEl').appendChild(southCenterTotalItem);
    console.log(total);
  }
};

var bellSquare = {
  storeName: 'Bellevue Square',
  minHrlyCust: 20,
  maxHrlyCust: 48,
  avgCookiesPerCust: 3.3,

  calcDailyTotal: function() {
    var custPerHour = [];
    var salesPerHour = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var bellSquareListItem = document.createElement('li');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      bellSquareListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('bellSquareEl').appendChild(bellSquareListItem);

      total += salesPerHour[i];
    }

    var bellSquareTotalItem = document.createElement('li');
    totalCookies.push(total);
    bellSquareTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('bellSquareEl').appendChild(bellSquareTotalItem);
    console.log(total);
  }
};

var alki = {
  storeName: 'Bellevue Square',
  minHrlyCust: 3,
  maxHrlyCust: 24,
  avgCookiesPerCust: 2.6,

  calcDailyTotal: function() {
    var custPerHour = [];
    var salesPerHour = [];
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var alkiListItem = document.createElement('li');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      alkiListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('alkiEl').appendChild(alkiListItem);

      total += salesPerHour[i];
    }

    var alkiTotalItem = document.createElement('li');
    totalCookies.push(total);
    alkiTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('alkiEl').appendChild(alkiTotalItem);
    console.log(total);
  }
};

pikePlace.calcDailyTotal();
seaTac.calcDailyTotal();
southCenter.calcDailyTotal();
bellSquare.calcDailyTotal();
alki.calcDailyTotal();
