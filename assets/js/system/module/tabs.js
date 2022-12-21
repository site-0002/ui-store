export function init() {
  active('[data-ext-fn="ext-node-tabs"]', 'button[data-bs-toggle="tab"]');
}

function active($selector, $button) {
  if (!document.querySelector($selector)) {
    return 0;
  }

  const $elID = document.querySelector($selector).getAttribute('id');
  const $elTabs = document.querySelectorAll($selector + ' ' + $button);
  const $storageItem = $elID + '-active';

  $elTabs.forEach(($i) => {
    _eventActive($i, $storageItem)
  });

  const $tabActive = localStorage.getItem($storageItem);

  if ($tabActive) {
    const $tab = document.querySelector('button[data-bs-target="' + $tabActive + '"]');
    const $bsTab = new bootstrap.Tab($tab);
    $bsTab.show()
  }
}

function _eventActive($i, $s) {
  $i.addEventListener('show.bs.tab', ($e) => {
    localStorage.setItem($s, $i.dataset.bsTarget);
  });
}
