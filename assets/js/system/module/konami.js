export function init() {
  konami('arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba');
}

function konami($keys) {
  document.addEventListener('DOMContentLoaded', () => {
    _generator($keys);
  });
}

function _generator($keys) {
  let $buffer = [];
  let $lastKeyTime = Date.now();
  let $modal = new bootstrap.Modal(document.querySelector('#ext-egg'));

  document.addEventListener('keydown', ($e) => {
    const $key = $e.key.toLowerCase();
    const $currentTime = Date.now();

    if ($currentTime - $lastKeyTime > 1000) {
      $buffer = [];
    }

    $lastKeyTime = $currentTime;
    $buffer.push($key);

    if ($buffer.join('') === $keys) {
      $modal.show();
    }
  });
}
