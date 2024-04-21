function calculateCarbonFootprint() {
    var electricity = parseFloat(document.getElementById('electricity').value) || 0;
    var gas = parseFloat(document.getElementById('gas').value) || 0;
    var fuel = parseFloat(document.getElementById('fuel').value) || 0;
    var members = parseFloat(document.getElementById('members').value) || 1;

    var co2_electricity = 0.82 * electricity;  // kg, monthly
    console.log(co2_electricity); 

    var co2_gas = 3 * gas; // kg monthly
    console.log(co2_gas);

    var co2_fuel = 2.31 * fuel;  // kg monthly
    console.log(co2_fuel);
  
    var totalFootprint = co2_electricity + co2_gas + co2_fuel;
    totalFootprint *= 12;  // Convert to yearly
    // Convert kg to tons
    totalFootprint /= 1000;
    // Divide by number of members
    totalFootprint /= members;

    console.log(totalFootprint);

    // document.getElementById('result').innerHTML = `Your estimated carbon footprint is: ${totalFootprint.toFixed(2)} tons CO2e per year`;
  

    console.log(totalFootprint);
  
    var message = "";
    var choice = "";
    var expr = "";
    if (totalFootprint <= 4.38) {
      message = "Your choices inspire positive change and contribute to a healthier planet. Keep up the work!";
      expr = "GREAT!👌👌👌"
      choice = "Continue to take the same actions so that you can maintain your low carbon footprint."
    } else if (totalFootprint <= 11.67) {
      message = "Your carbon footprint is low. Keep up the good work!";
      expr = "GOOD!👍👍👍"
      choice = "Continue to take the same actions so that you can maintain your low carbon footprint."
      
    } else if (totalFootprint <= 16.06) {
      message = "You are doing okay, but there is room for improvement. Try to reduce your carbon footprint by making more sustainable choices.";
      expr = "NOT BAD!😯😯😯"
      choice = "Try to reduce your carbon footprint by using the resources you consume more efficiently. For example, turn off lights when you leave a room, using public transportation, or carpooling."
    } else {
      message = "Your carbon footprint is quite high. Consider making more sustainable choices to reduce your impact on the environment.";
      expr = "TERRIBLE!😱😱😱"
      choice = " Consider using public transportation, carpooling, planting trees, or using energy-efficient appliances to reduce your carbon footprint."
    }
  
    
    document.getElementById('result').innerHTML = `Your estimated carbon footprint is: ${totalFootprint.toFixed(2)} tons CO2e per year<br><br>` + message;

    document.getElementById('choices').innerHTML = `<br>` + expr + `<br>` + choice;


    // yearly footprint
    var chartData = [electricity*12, gas*12, fuel*12];
    // average footprint 
    var avgData = [2040, 140.4, 4600];
    drawBarChart(chartData, avgData);
    drawPieChart(chartData);
    
    displayStatistics(totalFootprint);

  
  }
  
  function drawPieChart(userData) {
    var chartContainer = document.getElementById('chart');
    chartContainer.innerHTML = '';  // Clear previous content
  
    var canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'carbonChart');
    chartContainer.appendChild(canvas);
  
    var carbonChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Electricity', 'Natural Gas', 'Car Fuel'],
        datasets: [{
          data: userData,
          backgroundColor: ['#ffcc00', '#66b2ff', '#ff6666'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
  
  function drawBarChart(userData, avgData) {
    var chartContainer = document.getElementById('avg-chart');
    chartContainer.innerHTML = '';  
    var canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'avgCarbonChart');
    chartContainer.appendChild(canvas);
  
    var carbonChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Electricity', 'Natural Gas', 'Car Fuel'],
        datasets: [
          {
            label: 'Your Consumption',
            data: userData,
            backgroundColor: '#ffcc00', // Color for user consumption
          },
          {
            label: 'Average Consumption',
            data: avgData,
            backgroundColor: '#66b2ff', // Color for average consumption
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true,
          }],
        },
      },
    });
  }
  

