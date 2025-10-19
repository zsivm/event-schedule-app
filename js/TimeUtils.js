export function getTodayTime(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes
  );
}
