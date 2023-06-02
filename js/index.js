var vehicles = [];

function logVehicle() {
  var type = document.getElementById('type').value;
  var make = document.getElementById('make').value;
  var model = document.getElementById('model').value;
  var regnr = document.getElementById('regnr').value;
  var condition = document.getElementById('condition').value;

  var vehicle = {
    type: type,
    make: make,
    model: model,
    regnr: regnr,
    condition: condition
  };

  vehicles.push(vehicle);

  console.log(vehicles);
}
