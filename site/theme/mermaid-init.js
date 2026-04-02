function initMermaid() {
  var theme = document.documentElement.className.includes('light') ? 'default' : 'dark';
  mermaid.initialize({
    startOnLoad: false,
    theme: theme,
    securityLevel: 'loose',
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
    sequence: { useMaxWidth: true },
    themeVariables: {
      fontSize: '14px'
    }
  });

  function renderDiagrams() {
    var blocks = document.querySelectorAll('pre > code.language-mermaid');
    blocks.forEach(function(block, i) {
      var container = block.parentElement;
      var id = 'mermaid-' + i + '-' + Date.now();
      var svg = document.createElement('div');
      svg.className = 'mermaid';
      svg.textContent = block.textContent;
      container.parentElement.replaceChild(svg, container);
    });
    mermaid.run();
  }

  if (document.readyState === 'complete') {
    renderDiagrams();
  } else {
    window.addEventListener('load', renderDiagrams);
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      if (m.addedNodes.length) renderDiagrams();
    });
  });
  var content = document.getElementById('content');
  if (content) observer.observe(content, { childList: true, subtree: true });
}

if (typeof mermaid !== 'undefined') initMermaid();
