export function init() {
  resize();
}

function resize() {
  _event('load');
  _event('click');
}

function _event($action) {
  if ($action === 'load') {
    document.addEventListener("DOMContentLoaded", ($e) => {
      if (localStorage.getItem('site-container')) {
        _fluid('on');
        _button('on');
      } else {
        return 0;
      }
    });
  }

  if ($action === 'click') {
    document.getElementById('ext-site-resize').addEventListener('click', ($e) => {
      $e.preventDefault();
      if (localStorage.getItem('site-container')) {
        _fluid('off');
        _button('off');
      } else {
        _fluid('on');
        _button('on');
      }
    });
  }
}

function _fluid($action) {
  if ($action === 'on') {
    const $el = document.querySelectorAll('.wrapper .container');

    $el.forEach(($i) => {
      $i.classList.replace('container', 'container-fluid');
    });

    document.querySelector('body').classList.add('ext-container-fluid');
    localStorage.setItem('site-container', 'fluid');
  }

  if ($action === 'off') {
    const $el = document.querySelectorAll('.wrapper .container-fluid');
    const $elLength = $el.length;

    $el.forEach(($i) => {
      $i.classList.replace('container-fluid', 'container');
    });

    document.querySelector('body').classList.remove('ext-container-fluid');
    localStorage.removeItem('site-container');
  }
}

function _button($action) {
  if ($action === 'on' && document.querySelector('#ext-site-resize .fa-expand-alt')) {
    const $elSiteResize = document.querySelector('#ext-site-resize .fa-expand-alt');

    $elSiteResize.classList.replace('fa-expand-alt', 'fa-compress-alt');
  }
  if ($action === 'off' && document.querySelector('#ext-site-resize .fa-compress-alt')) {
    const $elSiteResize = document.querySelector('#ext-site-resize .fa-compress-alt');

    $elSiteResize.classList.replace('fa-compress-alt', 'fa-expand-alt');
  }
}
