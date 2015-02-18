function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Donutshop(location, hrMin, hrMax, inPercent, avgOrder, donutPrice) {
  this.location = location;
  this.inPercent = inPercent;
  this.avgOrder = avgOrder;
  this.donutPrice = donutPrice;
  this.hoursOfOperation = ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  this.trafficPerHour = [];

  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    this.trafficPerHour[i] = getRandomInt(hrMin, hrMax);
  }

  this.getFootTotal = function() {
    var footTotal = 0;

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      footTotal += this.trafficPerHour[i];
    }

    return footTotal;
  }

  this.getHourlyCustomers = function() {
    var customers = [];

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      customers[i] = Math.round(this.trafficPerHour[i] * (inPercent / 100));
    }

    return customers;
  }

  this.getTotalCustomers = function() {
    return Math.round(this.getFootTotal() * (inPercent / 100));
  }

  this.getHourlyDonuts = function() {
    var donuts = [];

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      donuts[i] = this.getHourlyCustomers()[i] * avgOrder;
    }

    return donuts;
  }

  this.getTotalDonuts = function() {
    return this.getTotalCustomers() * avgOrder;
  }

  this.getHourlyProfit = function() {
    var profit = [];

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      profit[i] = this.getHourlyDonuts()[i] * this.donutPrice;
    }

    return profit;
  }

  this.getTotalProfit = function() {
    return this.getTotalDonuts() * this.donutPrice;
  }

  this.hourlyReport = function() {
    var tdList = document.querySelectorAll('td');

    for (var i = 0; i < tdList.length; i++) {
      tdList[i].remove();
    }

    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      var trEl = document.getElementById(this.hoursOfOperation[i]);

      var cell1 = document.createElement('td');
      cell1.textContent = this.trafficPerHour[i];
      trEl.appendChild(cell1);

      var cell2 = document.createElement('td');
      cell2.textContent = this.getHourlyCustomers()[i];
      trEl.appendChild(cell2);

      var cell3 = document.createElement('td');
      cell3.textContent = this.getHourlyDonuts()[i];
      trEl.appendChild(cell3);

      var cell4 = document.createElement('td');
      cell4.textContent = this.getHourlyProfit()[i];
      trEl.appendChild(cell4);
    }
  }
};

var downtown = new Donutshop("Downtown", 80, 220, 10, 4, 1.25),
    capitolHill = new Donutshop("Capitol Hill", 5, 45, 45, 2, 1.25),
    southLakeUnion = new Donutshop("South Lake Union", 180, 250, 5, 6, 1.25),
    wedgewood = new Donutshop("Wedgewood", 20, 60, 20, 1.5, 1.25),
    ballard = new Donutshop("Ballard", 25, 175, 33, 1, 1.25);

function totalReport(location) {
  var total = document.getElementById('total'),
      cell1 = document.createElement('td'),
      cell2 = document.createElement('td'),
      cell3 = document.createElement('td'),
      cell4 = document.createElement('td');

      cell1.textContent = location.getFootTotal();
      cell2.textContent = location.getTotalCustomers();
      cell3.textContent = location.getTotalDonuts();
      cell4.textContent = location.getTotalProfit();

      total.appendChild(cell1);
      total.appendChild(cell2);
      total.appendChild(cell3);
      total.appendChild(cell4);
}

function generateReport() {
  var sel = this.options[this.selectedIndex].value;

  switch (sel) {
    case "downtown":
      downtown.hourlyReport();
      totalReport(downtown);
      break;

    case "capitolHill":
      capitolHill.hourlyReport();
      totalReport(capitolHill);
      break;

    case "southLakeUnion":
      southLakeUnion.hourlyReport();
      totalReport(southLakeUnion);
      break;

    case "wedgewood":
      wedgewood.hourlyReport();
      totalReport(wedgewood);
      break;

    case "ballard":
      ballard.hourlyReport();
      totalReport(ballard);
      break;
  }
}

function clickStay(e) {
  var target;
  target = e.target;
  console.log(target);
  if (target.className == '') {
  target.className = 'click';
} else {
  target.className = '';
}
}

var elSelect = document.getElementById('store');
elSelect.addEventListener('change', generateReport, false);
var elClick = document.getElementById('main');
elClick.addEventListener('click', clickStay, false);
