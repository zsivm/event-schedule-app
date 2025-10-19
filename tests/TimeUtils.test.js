import { getTodayTime } from "../js/TimeUtils.js";

describe("getTodayTime", () => {
  it("should create a Date object with today’s date and the given time", () => {
    const result = getTodayTime("12:30");
    const now = new Date();

    expect(result.getFullYear()).toBe(now.getFullYear());
    expect(result.getMonth()).toBe(now.getMonth());
    expect(result.getDate()).toBe(now.getDate());
    expect(result.getHours()).toBe(12);
    expect(result.getMinutes()).toBe(30);
  });

  it("should return a valid Date object", () => {
    const result = getTodayTime("00:00");
    expect(result instanceof Date).toBe(true);
    expect(isNaN(result.getTime())).toBe(false);
  });

  it("should return a valid Date object", () => {
    const result = getTodayTime("08:00");
    expect(result instanceof Date).toBe(true);
    expect(isNaN(result.getTime())).toBe(false);
  });
});
