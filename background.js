chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.frameId === 0) {
        checkIfBlocked(details.url, details.tabId);
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' && tab.url) {
        checkIfBlocked(tab.url, tabId);
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'returnToDashboard') {
        chrome.tabs.remove(sender.tab.id, () => {
            chrome.tabs.create({ url: chrome.runtime.getURL('dashboard.html') }, () => {
                console.log('Opened dashboard.html in new tab');
            });
        });
    } else if (request.action === 'openPopup') {
        chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') }, () => {
            console.log('Opened popup.html in new tab');
        });
    }
});

chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') }, () => {
        console.log('Extension icon clicked: Opened popup.html in new tab');
    });
});

function checkIfBlocked(url, tabId) {
    try {
        const hostname = new URL(url).hostname;
        chrome.storage.local.get(['blockedSites'], (data) => {
            const blockedSites = data.blockedSites || {};
            const now = Date.now();
            console.log(`Checking URL: ${hostname}, Blocked Sites:`, Object.keys(blockedSites));

            for (const [site, data] of Object.entries(blockedSites)) {
                if (hostname === site || hostname.endsWith(`.${site}`)) {
                    if (!data.expiration || now < data.expiration) {
                        console.log(`Blocking ${hostname}, redirecting to quotes.html`);
                        chrome.tabs.update(tabId, { url: chrome.runtime.getURL('quotes.html') });
                        return;
                    }
                }
            }

            const updatedSites = {};
            for (const [site, data] of Object.entries(blockedSites)) {
                if (!data.expiration || now < data.expiration) {
                    updatedSites[site] = data;
                }
            }
            if (Object.keys(blockedSites).length !== Object.keys(updatedSites).length) {
                chrome.storage.local.set({ blockedSites: updatedSites }, () => {
                    console.log('Updated blocked sites:', Object.keys(updatedSites));
                });
            }
        });
    } catch (e) {
        console.error('Error processing URL:', e);
    }
}