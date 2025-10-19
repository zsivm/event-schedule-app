import { ScheduleManager } from "./ScheduleManager.js"; 
import { UIRenderer } from "./UIRenderer.js";

document.addEventListener("DOMContentLoaded", async () => {
    const uiRenderer = new UIRenderer('events');
    const scheduleManager = new ScheduleManager('schedule.json', uiRenderer);
    await scheduleManager.init();
});