function calcCustPerHour(minHrlyCust, maxHrlyCust) {
  var rng = Math.floor(Math.random() * (maxHrlyCust - minHrlyCust) + minHrlyCust);
  return rng;
}
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];
var stores = [];

function Store(storeName, minHrlyCust, maxHrlyCust, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minHrlyCust = minHrlyCust;
  this.maxHrlyCust = maxHrlyCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.store = [];
  this.custPerHour = [];
  this.salesPerHour = [];
  this.total = 0;

  this.dailyTotals = function(){
    for (var i = 0; i < hours.length; i++) {
      this.custPerHour.push(calcCustPerHour(minHrlyCust, maxHrlyCust));
      this.salesPerHour.push(Math.floor(this.custPerHour[i] * avgCookiesPerCust));
      this.total += this.salesPerHour[i];
    }
  };
  this.dailyTotals();
}

function makeStoreData(store) {
  var appendStores = document.getElementById('append-stores');
  var th = document.createElement('th');
  th.textContent = ' ';
  th.textContent = store.storeName;
  appendStores.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    var tr = document.createElement('tr');
    tr.textContent = ' ';
    tr.textContent = hours[i] + ': ' + store.salesPerHour[i] + ' cookies';
    th.appendChild(tr);
  }
  var total = document.createElement('tr');
  total.textContent = ' ';
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

//Forms & Events
var storeForm = document.getElementById('store-form');

var handleStoreSubmit = function(event){
  event.preventDefault();
  console.log(event);
  if (!event.target.store.value || !event.target.min.value || !event.target.max.value || !event.target.avg.value){
    return alert('Fields cannot be empty.');
  } else if(isNaN(event.target.min.value) || isNaN(event.target.max.value) || isNaN(event.target.avg.value)){
    return alert ('Must enter a number.');
  }

  var storeName = event.target.store.value;
  var minCust = parseInt(event.target.min.value);
  var maxCust = parseInt(event.target.max.value);
  var avgCookies = parseInt(event.target.avg.value);
  var newStore = new Store(storeName,minCust,maxCust,avgCookies);
  stores.push(newStore);
  makeStoreData(newStore);
  // for(var i = 0; i < stores.length; i++) {
  //   makeStoreData(stores[i]);
  // }
  stores = [];
};

storeForm.addEventListener('submit', handleStoreSubmit);
