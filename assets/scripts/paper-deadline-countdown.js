(function () {
  var els = document.querySelectorAll('.js-paper-deadline-countdown');
  if (!els.length) return;

  function formatRemaining(ms) {
    if (ms <= 0) return 'Deadline passed';
    var totalHours = Math.floor(ms / 3600000);
    var days = Math.floor(totalHours / 24);
    var hours = totalHours % 24;
    var dayLabel = days === 1 ? '1 day' : days + ' days';
    var hourLabel = hours === 1 ? '1 hour' : hours + ' hours';
    return dayLabel + ', ' + hourLabel;
  }

  function update() {
    var now = Date.now();
    for (var i = 0; i < els.length; i++) {
      var iso = els[i].getAttribute('data-deadline');
      if (!iso) {
        els[i].textContent = '—';
        continue;
      }
      var deadline = Date.parse(iso);
      if (isNaN(deadline)) {
        els[i].textContent = '—';
        continue;
      }
      els[i].textContent = formatRemaining(deadline - now);
    }
  }

  update();
  setInterval(update, 60000);
})();
