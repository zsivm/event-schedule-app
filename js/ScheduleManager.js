import { getTodayTime } from "./TimeUtils.js";
import { NotificationService } from "./NotificationService.js";

export class ScheduleManager {
    constructor(scheduleUrl, uiRenderer, notificationLeadMinutes = 5) {
        this.scheduleUrl = scheduleUrl;
        this.notificationLeadMinutes = notificationLeadMinutes * 60 * 1000;
        this.events = [];
        this.uiRenderer = uiRenderer;
    }

    async loadSchedule() {
        const response = await fetch(this.scheduleUrl);
        this.events = await response.json();
        console.log("Schedule loaded:", this.events);

        if (this.uiRenderer) {
            this.uiRenderer.renderEvents(this.events);
        }
    }

    checkAndNotify() {
        const now = new Date();

        for (const event of this.events) {
            const eventStart = getTodayTime(event.startTime);
            const diff = eventStart - now;

            if (diff > 0 && diff <= this.notificationLeadMinutes) {
                const body = `Starts at ${event.startTime} in ${event.location}`;
                NotificationService.send(event.title, body);
            }
        }
    }

    async init() {
        await this.loadSchedule();
        await NotificationService.requestPermission();

        this.checkAndNotify();
        setInterval(() => this.checkAndNotify(), 60 * 1000);
    }
}