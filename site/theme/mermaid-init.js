// Mermaid diagram renderer for mdBook
// Works with locally bundled mermaid.min.js (no CDN dependency)
(function () {
  if (typeof mermaid === 'undefined') return;

  var theme = document.documentElement.className.includes('light') ? 'default' : 'dark';
  mermaid.initialize({
    startOnLoad: false,
    theme: theme,
    securityLevel: 'loose',
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
    sequence: { useMaxWidth: true },
    themeVariables: { fontSize: '14px' }
  });

  function renderMermaid() {
    var blocks = document.querySelectorAll('pre > code.language-mermaid');
    if (blocks.length === 0) return;

    blocks.forEach(function (block) {
      var pre = block.parentElement;
      // Skip if already processed
      if (pre.getAttribute('data-mermaid-processed')) return;
      pre.setAttribute('data-mermaid-processed', 'true');

      var div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = block.textContent;
      pre.parentElement.replaceChild(div, pre);
    });

    // mermaid v11 API
    try {
      mermaid.run({ querySelector: '.mermaid:not([data-processed])' });
    } catch (e) {
      // fallback for older API
      try { mermaid.run(); } catch (e2) { console.warn('Mermaid render failed:', e2); }
    }
  }

  // Initial render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderMermaid);
  } else {
    renderMermaid();
  }

  // Re-render on mdBook SPA navigation
  var observer = new MutationObserver(function () {
    setTimeout(renderMermaid, 50);
  });
  var content = document.getElementById('content');
  if (content) {
    observer.observe(content, { childList: true, subtree: true });
  }

  // Re-render on theme change
  var themeObserver = new MutationObserver(function () {
    var newTheme = document.documentElement.className.includes('light') ? 'default' : 'dark';
    mermaid.initialize({ theme: newTheme });
    // Re-process all diagrams
    document.querySelectorAll('[data-mermaid-processed]').forEach(function (el) {
      el.removeAttribute('data-mermaid-processed');
    });
    renderMermaid();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
})();
