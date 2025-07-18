(function() {
  const currentUrl = window.location.hostname;
  chrome.storage.local.get(['blockedSites', 'lastRedirect'], (data) => {
    const blockedSites = data.blockedSites || {};
    const lastRedirect = data.lastRedirect || 0;
    const now = Date.now();
    
    if (now - lastRedirect < 1000) {
      console.log('Redirect skipped to prevent loop');
      return;
    }

    for (const [site, data] of Object.entries(blockedSites)) {
      if ((currentUrl === site || currentUrl.endsWith(`.${site}`)) && isBlockActive(data, now)) {
        if (!window.location.href.includes(chrome.runtime.getURL('quotes.html'))) {
          console.log(`Redirecting ${currentUrl} to quotes.html`);
          window.location.href = chrome.runtime.getURL('quotes.html');
          chrome.storage.local.set({ lastRedirect: now });
        }
        return;
      }
    }
  });

  function isBlockActive(data, now) {
    if (!data.expiration || now < data.expiration) {
      if (data.schedule) {
        const [startHour, startMinute] = data.schedule.start.split(':').map(Number);
        const [endHour, endMinute] = data.schedule.end.split(':').map(Number);
        const nowDate = new Date();
        const currentHour = nowDate.getHours();
        const currentMinute = nowDate.getMinutes();
        const currentTime = currentHour * 60 + currentMinute;
        const startTime = startHour * 60 + startMinute;
        const endTime = endHour * 60 + endMinute;
        return currentTime >= startTime && currentTime <= endTime;
      }
      return true;
    }
    return false;
  }
})();