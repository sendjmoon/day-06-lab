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
    for (var i = 0; i < 16; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var pikePlaceListItem = document.createElement('tr');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      pikePlaceListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('pikePlaceEl').appendChild(pikePlaceListItem);

      total += salesPerHour[i];
    }

    var pikePlaceTotalItem = document.createElement('tr');
    totalCookies.push(total);
    pikePlaceTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('pikePlaceEl').appendChild(pikePlaceTotalItem);
    console.log(total);
  }
};

var seaTac = {
  storeName: 'SeaTac Airport',
  minHrlyCust: 17,
  maxHrlyCust: 88,
  avgCookiesPerCust: 5.2,

  calcDailyTotal: function() {
    var custPerHour = [];
    var salesPerHour = [];
    var total = 0;
    for (var i = 0; i < 16; i++) {
      custPerHour.push(Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust) + this.minHrlyCust));

      var seaTacListItem = document.createElement('tr');
      salesPerHour.push(Math.floor(custPerHour[i] * this.avgCookiesPerCust));
      seaTacListItem.textContent = hours[i] + ': ' + salesPerHour[i] + ' cookies';
      document.getElementById('seaTacEl').appendChild(seaTacListItem);

      total += salesPerHour[i];
    }

    var seaTacTotalItem = document.createElement('tr');
    totalCookies.push(total);
    seaTacTotalItem.textContent = 'Total: ' + total + ' cookies';
    document.getElementById('seaTacEl').appendChild(seaTacTotalItem);
    console.log(total);
  }
};

pikePlace.calcDailyTotal();
seaTac.calcDailyTotal();
