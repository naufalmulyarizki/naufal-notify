window.addEventListener('message', function(event) {
    if (event.data.action === "showNotification") {
        showNotification(event.data.message, event.data.type, event.data.icon, event.data.duration, event.data.position, event.data.suara);
    }
});

function showNotification(message, type, icon, duration, position, suara) {
    let containerId = `notification-container-${position}`;
    let container = document.getElementById(containerId);

    if (!container) {
        container = document.createElement('div');
        container.id = containerId;
        container.classList.add('notification-container', position);
        document.body.appendChild(container);
    }

    const notification = document.createElement('div');
    notification.classList.add('notification', type);

    notification.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="message">${message}</span>
        <div class="progress-bar"></div>
    `;

    console.log(suara)

    // Mainkan suara notifikasi
    let audio = new Audio(`sounds/${suara}.mp3`);
    audio.volume = 0.5;
    audio.play();

    container.appendChild(notification);

    const progressBar = notification.querySelector('.progress-bar');
    progressBar.style.animation = `progress ${duration}ms linear forwards`;

    setTimeout(() => {
        closeNotification(notification);
    }, duration);
}

function closeNotification(notification) {
    notification.style.animation = "fadeOut 0.5s ease-out";
    setTimeout(() => {
        notification.remove();
    }, 500);
}
