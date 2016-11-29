// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const displayOnlineOfflineStatus = () => {
    if (navigator.onLine) {
        console.log('WebGL Renderer: Online Logic');
    } else {
        console.log('WebGL Renderer: offline Logic');
    }
};

window.addEventListener('online', displayOnlineOfflineStatus);
window.addEventListener('offline', displayOnlineOfflineStatus);

displayOnlineOfflineStatus();

