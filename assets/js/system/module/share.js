export function init() {
  popUp('[data-ext-fn="ext-popup"]');
}

function popUp($selector) {
  const $el = document.querySelectorAll($selector);

  $el.forEach(($i) => {
    _eventPopUp($i);
  });
}

function _eventPopUp($i) {
  let $event;

  $event = $i.addEventListener('click', ($e) => {
    $e.preventDefault();
    window.open($e.currentTarget.href, $e.currentTarget.title, 'width=640,height=480,toolbar=0,status=0');
  });

  return $event;
}
