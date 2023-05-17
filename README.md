# Work Day Scheduler
## Table of Contents 
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)
- [Deployed URL](#deployed-url)

## Description 
This project is a simple calendar application that allows users to input events or appointments throughout work hours (9AM-5PM). The time blocks are color coded with gray displayed as the past, red as the present time, and green as future hours depending on the current time. 

This application is designed to run in a web browser and incorporates dynamically updated HTML and CSS powered by jQuery. 

## User Story
AS AN employee with a busy schedule

I WANT to add important events to a daily planner

SO THAT I can manage my time effectively

## Acceptance Criteria
* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with time blocks for standard business hours
* WHEN I view the time blocks for that day
* THEN each time block is color-coded to indicate whether it is in the past, present, or future
* WHEN I click into a time block
* THEN I can enter an event
* WHEN I click the save button for that time block
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist

## Installation 
N/A

## Usage
To use this application, the user will first click the deployed link. They will then view the current date and time displayed at the top of the calendar. Users can start inputting their events into the respective time slots. 

Users are able to view the work day deconstructed into time blocks. These time blocks are color coded with gray as the past, red as the present hour, and green as future work hours of the day. The application allows users to save an event/task for each time slot every time they refresh the page through local storage. 

## Screenshots
The colors displayed on the page indicate past, present, and future time blocks. Gray symbolizes the past, red is the current hour, and green represents future work hours of the day. 

Suppose it is 12 PM. The time blocks will display the following image:

<img width="1436" alt="Screen Shot 2023-05-17 at 2 40 27 AM" src="https://github.com/ima2132/Work-Day-Scheduler/assets/117132129/9ef75355-05b5-4f0d-9d05-8b54f434c153">


To save these assignments, please input the tasks/events and click the save button. Once the browser is refreshed, the saved items will remain on the page. 

<img width="1440" alt="Screen Shot 2023-05-17 at 2 41 07 AM" src="https://github.com/ima2132/Work-Day-Scheduler/assets/117132129/ead72123-fa51-4d97-ab0c-a2d128261241">

## License
Please refer to the LICENSE listed in the repo.

## Deployed URL
https://ima2132.github.io/Work-Day-Scheduler/ 
