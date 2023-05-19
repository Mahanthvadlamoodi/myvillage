function calculateSimpleInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
  
    var timePeriod = calculateDuration(startDate, endDate);
  
    var simpleInterest = (principal * interestRate * timePeriod) / 100;
  
    document.getElementById('result').innerHTML = 'Simple Interest: ' + simpleInterest.toFixed(2);
  }
  
  function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
  
    var timePeriod = calculateDuration(startDate, endDate);
  
    var compoundInterest;
    if (timePeriod <= 1) {
      compoundInterest = (principal * interestRate * timePeriod) / 100;
    } else {
      var extraMonths = endDate.getMonth() - startDate.getMonth();
      var compoundPeriod = extraMonths > 6 ? Math.ceil(timePeriod) : Math.floor(timePeriod);
      compoundInterest = principal * Math.pow((1 + (interestRate / 100)), compoundPeriod) - principal;
    }
  
    document.getElementById('result').innerHTML = 'Compound Interest: ' + compoundInterest.toFixed(2);
  }
  
  function calculateDuration(startDate, endDate) {
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var durationInYears = timeDiff / (1000 * 3600 * 24 * 365.25); // Assuming a year has an average of 365.25 days
  
    return durationInYears;
  }
  