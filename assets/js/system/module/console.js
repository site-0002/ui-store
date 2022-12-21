export function init() {
  msg([
    '{{ i18n "console.buy_me" }} ☕ 😄 -> [ {{ "donate/" | absLangURL }} ] 😘',
    '{{ i18n "console.buy_me" }} 🍺 🤪 -> [ {{ "donate/" | absLangURL }} ] 😘',
    '{{ i18n "console.about_me" }} -> [ {{ "about/" | absLangURL }} ] 😉',
    '㊙️ ⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️'
  ]);
}

function msg($message) {
  let $item;

  $item = $message[Math.floor(Math.random() * $message.length)];
  _log($item, 'font-size: 2em;');
}

function _log($text, $style = '') {
  console.log('%c' + $text, $style);
}
