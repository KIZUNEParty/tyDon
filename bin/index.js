exports.tyDon = function(date) {
  let time
  
  if (date == 'undefined') {
    const moonLanding = new Date();
    time = moonLanding.getTime()
  } else if (date != undefined) {
    const moonLanding = new Date(date);
    time = moonLanding.getTime()
  } else {
    const moonLanding = new Date();
    time = moonLanding.getTime()
  }

  return time
}