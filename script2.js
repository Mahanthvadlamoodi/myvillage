function calculateArea() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    var sideD = parseFloat(document.getElementById("sideD").value);
    var diagonal1 = parseFloat(document.getElementById("diagonal1").value);
    var diagonal2 = parseFloat(document.getElementById("diagonal2").value);
  
    // Calculate the semi-perimeter
    var semiPerimeter1 = (sideA + sideB + diagonal1) / 2;
    var area1=Math.sqrt(semiPerimeter1*(semiPerimeter1-sideA)*(semiPerimeter1-sideB)*(semiPerimeter1-diagonal1));
    var semiPerimeter2 = (sideC + sideD + diagonal1) / 2;
    var area2=Math.sqrt(semiPerimeter2*(semiPerimeter2-sideD)*(semiPerimeter2-sideC)*(semiPerimeter2-diagonal1));
  
    // Calculate the area using Heron's formula
    var area = area1+area2;
   document.getElementById("result").innerHTML = "Area: " + area.toFixed(2);
  }
  