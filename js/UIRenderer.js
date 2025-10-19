export class UIRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

     renderEvents(events) {
        if (!this.container) return;
        this.container.innerHTML = '';

        if (!events || events.length === 0) {
            this.container.innerHTML = '<p>No events found.</p>';
            return;
        }

        for (const event of events) {
            const div = document.createElement('div');
            div.className = 'event';

            div.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Time:</strong> ${event.startTime} – ${event.endTime}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            `;

            this.container.appendChild(div);
        }
    }
}