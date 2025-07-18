document.getElementById('openPopupButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'openPopup' });
});

chrome.storage.local.get(['blockedSites'], (data) => {
    const blockedSites = data.blockedSites || {};
    document.getElementById('blockedCount').textContent = Object.keys(blockedSites).length;
    const categories = {};
    for (const [, data] of Object.entries(blockedSites)) {
        categories[data.category] = (categories[data.category] || 0) + 1;
    }
    const chart = {
        type: 'pie',
        data: {
            labels: Object.keys(categories).length ? Object.keys(categories) : ['No Sites Blocked'],
            datasets: [{
                data: Object.keys(categories).length ? Object.values(categories) : [1],
                backgroundColor: ['#8B5CF6', '#2DD4BF', '#FF2E63', '#E8DEF8'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#F3E8FF' } }
            }
        }
    };
    new Chart(document.getElementById('blockedSitesChart'), chart);
});