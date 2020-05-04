
exports.getDate = getDate;
exports.getDay = getDay;

function getDate(){
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();

  return today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
}

function getDay(){
  const options = { weekday: 'long' };
  var today  = new Date();

  return today.toLocaleDateString("en-US", options); // Saturday
}
