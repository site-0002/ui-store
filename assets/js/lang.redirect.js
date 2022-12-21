function langRedirect() {
  // Only do i18n at root,
  // otherwise, redirect immediately.
  if (window.location.pathname !== '/') {
    window.location.replace('{{ .Permalink }}');
    return 0;
  }

  const getFirstBrowserLanguage = function () {
    const $nav = window.navigator;
    const $browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
    let $language;

    if (Array.isArray($nav.languages)) {
      const $navLangLength = $nav.languages.length;
      for (let $i = 0; $i < $navLangLength; ++$i) {
        $language = $nav.languages[$i];
        if ($language && $language.length) return $language;
      }
    }

    // Support for other well known properties in browsers.
    const $browserLanguagePropertyKeysLength = $browserLanguagePropertyKeys.length;
    for (let $i = 0; $i < $browserLanguagePropertyKeysLength; ++$i) {
      $language = $nav[$browserLanguagePropertyKeys[$i]];
      if ($language && $language.length) return $language;
    }
    return 'en';
  }

  const $preferLang = getFirstBrowserLanguage();
  ($preferLang.indexOf('ru') !== -1) ? window.location.replace('/ru/') : window.location.replace('/en/');
}

langRedirect();
