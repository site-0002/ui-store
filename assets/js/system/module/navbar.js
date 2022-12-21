export function init() {
  toggle('.navbar');
}

function toggle($selector) {
  const $header = document.querySelector($selector);
  const $headroom = new Headroom($header);
  $headroom.init();
}
