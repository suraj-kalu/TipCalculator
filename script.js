//hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";





var btn = document.getElementById('calculate');

function calculateTip() {

    var billAmount = document.getElementById('totalAmount').value;
    var service = document.getElementById('service').value;
    var people = document.getElementById('totalPeople').value;

    if (billAmount === 'null' || service == 0) {
        return window.alert('Please provide me an input to get me working');

    }
    
    if (people === "" || people <= 1) {
        people = 1;
          document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";

    }
    
    var tip = (billAmount * service)/people;
    tip = Math.round(tip*100)/100;
    tip = tip.toFixed(2);
    document.getElementById('totalTip').style.display = "block";
document.getElementById('tip').innerHTML = tip;
  

};


btn.onclick = function () {
    calculateTip();
};
