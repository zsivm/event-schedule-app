# event-schedule-app

This app tracks the schedule of events which are fed to the application through a json file in a given format.

For the App to properly work please provide the schedule.json file in the following format:

title - string, title of the given event (example: Start of the event, Musical concert of artist xy...)
startTime - string, hours of the event in 24 hour format (example: 08:00 for morning hours and 14:00 for afternoon)
endTime - string, the time when the actual event ends (example: 08:00 for morning hours and 14:00 for afternoon)
location - string, location of the event (what building, room, stage), so that people know where they can attend (example: Room 206, second floor)

Example:
[
    {
        "title": "title of the scheduled event",
        "startTime": "08:00",
        "endTime": "13:00",
        "location": "the location of the event (building, room, floor, building, stage, square)" 
    },
    {
        "title": "title of the next scheduled event",
        "startTime": "13:00",
        "endTime": "23:00",
        "location": "the location of the event (building, room, floor, stage, square)"
    }
]