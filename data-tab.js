const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(otherTab => {
      if (otherTab !== tab) {
        otherTab.classList.remove('active');
      }
    });
    tab.classList.add('active');
    const panes = document.querySelectorAll('.pane');
    panes.forEach(pane => {
      pane.classList.remove('active');
    });
    const tabId = tab.getAttribute('data-tab');
    const associatedPane = document.getElementById(tabId);
    if (associatedPane) {
      associatedPane.classList.add('active');
    }
  });
});
