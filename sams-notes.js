var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  custMin:17,
  custMax:88,
  cookiesPerCustomer:5.2,
  storeName: 'Pike Place',
  cookiesArray:[],
  dailyTotals:0,
  storeHtmlId: 'pike-store',

  custPerHour: function(){
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1)) + this.custMin;
    // console.log(custPerHour());
  },
  cookiesPurchasedPerHour: function(){
    return Math.floor((this.custPerHour()) * this.cookiesPerCustomer);
    // console.log('this is ' + cookiesPurchasedPerHour());
  },

  cookiesPurchasedEachHour: function(){
    for (i = 0; i < 14; i++) {
      var cookiesPurchasedPerHourDaily = this.cookiesPurchasedPerHour();
      // console.log(cookiesPurchasedPerHourDaily);
      this.cookiesArray.push(cookiesPurchasedPerHourDaily);
      this.dailyTotals += this.cookiesArray[i];
    }
  },

  renderData: function(){
    var ulEl = document.createElement('ul');
    ulEl.id = this.storeHtmlId;
    document.body.appendChild(ulEl);

    this.cookiesPurchasedEachHour();
    for(var i = 0; i < this.cookiesArray.length; i++) {
      var hourlyLiEl = document.createElement('li');
      // var ulEl = document.getElementById(this.storeHtmlId);
      hourlyLiEl.textContent = this.cookiesArray[i];
      ulEl.appendChild(hourlyLiEl);
    }
  }
};

pike.renderData();
