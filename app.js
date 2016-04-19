function calcCustPerHour(minHrlyCust, maxHrlyCust) {
  var rng = Math.floor(Math.random() * (maxHrlyCust - minHrlyCust) + minHrlyCust);
  return rng;
}

var stores = [];

function Store(storeName, minHrlyCust, maxHrlyCust, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minHrlyCust = minHrlyCust;
  this.maxHrlyCust = maxHrlyCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [];
  this.salesPerHour = [];
  this.total = 0;
  this.hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];

  for (var i = 0; i < this.hours.length; i++) {
    this.custPerHour.push(calcCustPerHour(minHrlyCust, maxHrlyCust));
    this.salesPerHour.push(Math.floor(this.custPerHour[i] * avgCookiesPerCust));
    this.total += this.salesPerHour[i];
  }
};

function makeStoreData(store) {
  var appendStores = document.getElementById('append-stores');
  var th = document.createElement('th');
  th.textContent = store.storeName;
  appendStores.appendChild(th);
  for (var i = 0; i < store.hours.length; i++) {
    var tr = document.createElement('tr');
    tr.textContent = store.hours[i] + ': ' + store.salesPerHour[i] + ' cookies';
    th.appendChild(tr);
  }
  var total = document.createElement('tr');
  total.textContent = 'Total: ' + store.total + ' cookies';
  th.appendChild(total);
}

stores.push(new Store('Pike Place',17,88,5.2));
stores.push(new Store('SeaTac Airport',6,24,1.2));
stores.push(new Store('Southcenter',11,38,1.9));
stores.push(new Store('Bellevue Square',20,48,3.3));
stores.push(new Store('Alki',3,24,2.6));

for (var i = 0; i < stores.length; i++) {
  makeStoreData(stores[i]);
}
