let timerInterval;
let lastUpdateTime = Date.now();

self.onmessage = function(e) {
    if (e.data === 'start') {
        lastUpdateTime = Date.now();
        timerInterval = setInterval(() => {
            const now = Date.now();
            const elapsed = now - lastUpdateTime;
            if (elapsed >= 1000) {
                self.postMessage('tick');
                lastUpdateTime = now;
            }
        }, 100);
    } else if (e.data === 'stop') {
        clearInterval(timerInterval);
    }
}; 