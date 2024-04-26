# :dizzy:Hi! This is Planner project.  :dizzy:
### This project collected functionality for creating a board or task planning list, a Pomodoro timer, and a time-blocking structure for time control :godmode:
### Below you will see a presentation of the functionality in GIF  :eyes:

# :computer: Authorization / Registration :computer:

![Auth](https://github.com/Kuldik/Planner/assets/112172212/feb3e175-4a5c-4f1d-8f63-f1159d21873d)

### Authorization and registration are performed using JWT tokens. All information is stored on the Backend, including encrypted passwords and refresh tokens.

<br>
<br>

# 📋 Dashboard / Sidebar 📋
![Dashboard](https://github.com/Kuldik/Planner/assets/112172212/ad396dac-d078-4b39-bfd7-77d42c15ca2a)
### The Dashboard displays information about tasks, their number, how many of them were created and completed

<br>
<br>

# :calendar: Tasks :calendar:
![task](https://github.com/Kuldik/Planner/assets/112172212/01929d6f-81ec-4301-a739-50ff64d88a97) 
### The task block is made in two forms, in the form of a list and in the form of a board, both options use the react hello-pangea/dnd library, which allows you to drag and drop elements from one block to another. 
![task-list](https://github.com/Kuldik/Planner/assets/112172212/9f01abcd-632a-4a04-b3ed-529ca8127c45)
<br>
### You can create tasks, change their priority, use a checkbox to display the status of whether the task is completed or not; also, the task blocks display the task completion date, which dynamically changes depending on the block in which it is located

<br>
<br>

# :tomato: Pomodoro :tomato:
![Pomodoro](https://github.com/Kuldik/Planner/assets/112172212/c9bdf00f-82af-4436-b49c-cd3e2772d912)
### Pomodoro timer. This is a standard concentration control timer. The list of functionality includes: Start/Pause timer, rewind between circles and reset timer

<br>
<br>

# :clock5: Time blocking :clock5:
![Time-blocking](https://github.com/Kuldik/Planner/assets/112172212/2e1c999d-6b57-426d-a404-9b3cac4c3220)
### Time-blocking. This page allows the user to adjust tasks, time, and order of their completion, and create their own daily routine. Functionality: Under the time blocks there is a counter that counts the amount of time allocated for sleep; each time block can be changed, deleted, and given its own color. Time blocks will increase in size depending on the time allocated to the block

<br>
<br>

# :link: Settings :link:
![Settings](https://github.com/Kuldik/Planner/assets/112172212/9a0614bb-7af2-40c7-bf81-0b31ef75eb3a)
### Settings. On this page the user can change the account name, email and password. You can also change the settings for the Pomodoro timer, in particular, change the time of the working circle, the rest circle and the number of laps

<br>
<br>

# :notebook_with_decorative_cover: Libraries used in the project :notebook_with_decorative_cover:
@dnd-kit/core, <br>
@dnd-kit/sortable, <br>
@dnd-kit/utilities, <br>
@hello-pangea/dnd, <br>
@tanstack/react-query, <br>
@tanstack/react-query-devtools, <br>
axios, <br>
clsx, <br>
dayjs, <br>
js-cookie, <br> 
lodash.debounce, <br>
lucide-react, <br>
react-day-picker, <br>
react-hook-form, <br>
sonner, <br>
