function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

// The calculater for one rep max!
function handleCalculation() {
    let weight = document.getElementById('weight').value;
    let reps = document.getElementById('reps').value;
    let btn = document.getElementById('btn');

    let one = reps * 2.5;
    let two = 100 - one;
    let three = two / 100;
    let maxRep = weight / three;

    document.getElementById('max-rep').innerHTML = 'Your one rep max is:' + ' ' + (Math.round(maxRep * 100) / 100).toFixed(2) + ' ' + 'kg/lbs';
    document.getElementById('calculated').style.display = 'block';
}
