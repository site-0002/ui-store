export function init() {
  generator('[data-ext-fn="ext-qrcode"]');
}

function generator($selector) {
  const $el = document.querySelectorAll($selector);
  let $text;

  $el.forEach(($i) => {
    $text = $i.getAttribute('data-ext-text');
    _qrcode($i, $text);
  });
}

function _qrcode($selector, $text, $size = 128) {
  let $options;

  $options = {
    text: $text,
    width: $size,
    height: $size,
    drawer: 'svg'
  }

  return new QRCode($selector, $options);
}
