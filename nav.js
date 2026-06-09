(function () {
  var LINKS = [
    { href: 'products.html',    text: 'Products' },
    { href: 'about.html',       text: 'About' },
    { href: 'contact.html',     text: 'Contact' },
    { href: 'magnacon.html',    text: 'MagnaCon 2026' },
    { href: 'get-started.html', text: 'Get Started', cta: true }
  ];

  function init() {
    var nav = document.querySelector('nav');
    var inner = document.querySelector('.nav-inner');
    if (!nav || !inner) return;

    /* ── Hamburger button ── */
    var btn = document.createElement('button');
    btn.className = 'nav-hamburger';
    btn.setAttribute('aria-label', 'Open menu');
    btn.innerHTML = '<span></span><span></span><span></span>';
    btn.addEventListener('click', toggle);
    inner.appendChild(btn);

    /* ── Mobile dropdown ── */
    var menu = document.createElement('div');
    menu.className = 'nav-mobile-menu';

    var page = window.location.pathname.split('/').pop() || 'index.html';

    LINKS.forEach(function (l) {
      var a = document.createElement('a');
      a.href = l.href;
      a.textContent = l.text;
      if (l.cta) a.className = 'nav-mobile-cta';
      if (page === l.href) a.classList.add('active');
      menu.appendChild(a);
    });

    nav.appendChild(menu);

    /* close on outside tap */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) close();
    });
  }

  function toggle() {
    var menu = document.querySelector('.nav-mobile-menu');
    var btn  = document.querySelector('.nav-hamburger');
    if (!menu) return;
    var open = menu.classList.contains('open');
    open ? close() : open_menu();
  }

  function open_menu() {
    document.querySelector('.nav-mobile-menu').classList.add('open');
    document.querySelector('.nav-hamburger').classList.add('open');
  }

  function close() {
    var m = document.querySelector('.nav-mobile-menu');
    var b = document.querySelector('.nav-hamburger');
    if (m) m.classList.remove('open');
    if (b) b.classList.remove('open');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
