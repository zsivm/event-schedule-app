import { jest } from "@jest/globals";
import { ScheduleManager } from "../js/ScheduleManager.js";

// Mock NotificationService and UIRenderer (ESM style)
jest.mock("../js/NotificationService.js", () => ({
  NotificationService: jest.fn().mockImplementation(() => ({
    sendNotification: jest.fn(),
  })),
}));

jest.mock("../js/UIRenderer.js", () => ({
  UIRenderer: jest.fn().mockImplementation(() => ({
    renderEvents: jest.fn(),
    highlightActiveEvent: jest.fn(),
  })),
}));

describe("ScheduleManager", () => {
  test("should load schedule and store events", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => [
        {
          title: "Opening Ceremony",
          startTime: "12:00",
          endTime: "12:10",
          location: "Main Hall",
        },
      ],
    });

    const manager = new ScheduleManager("dummy.json");
    await manager.loadSchedule();

    expect(manager.events.length).toBe(1);
    expect(manager.events[0].title).toBe("Opening Ceremony");
  });
});
