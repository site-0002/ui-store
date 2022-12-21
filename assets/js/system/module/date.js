export function init() {
  local('[data-ext-fn="ext-date-local"]');
  local('[data-ext-fn="ext-time-local"]', 4);
}

function local($selector, $view = 0) {
  const $el = document.querySelectorAll($selector);
  let $utcDate, $localDate;

  $el.forEach(($i) => {
    $utcDate = $i.getAttribute('datetime');
    $localDate = _date($utcDate, $view);
    $i.textContent = $localDate;
  });
}

function _date($iso, $view) {
  let $date, $year, $month, $day, $hours, $minutes, $seconds, $out;

  $date = new Date($iso);
  $year = $date.getFullYear();
  $month = _f24($date.getMonth() + 1);
  $day = _f24($date.getDate());
  $hours = _f24($date.getHours());
  $minutes = _f24($date.getMinutes());
  $seconds = _f24($date.getSeconds());

  switch ($view) {
    case 0:
      $out = $year + '/' + $month + '/' + $day + ' ' + $hours + ':' + $minutes + ':' + $seconds;
      break;
    case 1:
      $out = $year + '/' + $month + '/' + $day + ' ' + $hours + ':' + $minutes;
      break;
    case 2:
      $out = $year + '/' + $month + '/' + $day;
      break;
    case 3:
      $out = $hours + ':' + $minutes + ':' + $seconds;
      break;
    case 4:
      $out = $hours + ':' + $minutes;
      break;
    default:
      console.error('Unknown type!')
  }

  return $out;
}

function _f24($num) {
  if ($num < 10) {
    $num = '0' + $num;
  }
  return $num;
}
