(function () {
  var els = document.querySelectorAll('.js-next-meeting-date, #next-meeting-date');
  if (!els.length) return;

  function thirdMonday(year, month) {
    var date = new Date(year, month, 1);
    var mondayCount = 0;

    while (date.getMonth() === month) {
      if (date.getDay() === 1) {
        mondayCount += 1;
        if (mondayCount === 3) return new Date(date.getTime());
      }
      date.setDate(date.getDate() + 1);
    }
    return null;
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function nextThirdMonday(from) {
    var year = from.getFullYear();
    var month = from.getMonth();
    var candidate = thirdMonday(year, month);
    var today = startOfDay(from);

    if (!candidate || startOfDay(candidate) < today) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      candidate = thirdMonday(year, month);
    }
    return candidate;
  }

  function formatDate(date) {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  var next = nextThirdMonday(new Date());
  if (!next) return;

  var formatted = formatDate(next);
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = formatted;
  }
})();
