function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    
    if (t.days >= 100) {
        daysSpan.textContent = (t.days).slice(-3);
    } else if (t.days >= 10) {
        daysSpan.textContent = (t.days).slice(-2);
    else {
        daysSpan.textContent = (t.days).slice(-1);
    }
    hoursSpan.textContent = ('0' + t.hours).slice(-2);
    minutesSpan.textContent = ('0' + t.minutes).slice(-2);
    secondsSpan.textContent = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.UTC(2019, 4, 25, 20, 0, 0, 0));
initializeClock('clockdiv', deadline);