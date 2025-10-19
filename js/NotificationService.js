export class NotificationService {
  static async requestPermission() {
    if (Notification.permission !== "granted") {
      await Notification.requestPermission();
    }
  }

  static send(title, body) {
    if (Notification.permission === "granted") {
      new Notification(title, { body });
    } else {
      console.warn("Notification permission not granted.");
    }
  }
}
