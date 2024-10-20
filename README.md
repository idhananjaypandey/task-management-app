This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Task Manager Application
This is a simple Task Manager application built using React. It allows users to create, edit, delete, and mark tasks as complete or incomplete. Tasks can be prioritized as Low, Medium, or High, and the task list is automatically sorted based on both the task priority and completion status.

Features
Add New Tasks: Add a task with a title, description, and priority (Low, Medium, High).

Edit Tasks: Update any existing task's details.

Delete Tasks: Remove tasks from the list.

Toggle Task Completion: Mark tasks as complete or incomplete.

Task Sorting: Tasks are sorted by completion status (pending tasks appear first), and within each status, tasks are sorted by priority (High > Medium > Low).

Success Alerts: Users are notified when actions are successfully performed (task added, task edited, task deleted, task marked as complete/incomplete).
 
<!-- Prerequisites -->
##Getting Started

Make sure you have the following installed on your machine:

Node.js (v12.x or later)
npm (comes with Node.js)
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/idhananjaypandey/task-management-app.git
cd task-manager-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The server will run on http://localhost:3000.

Open the app in your browser: Go to http://localhost:3000 to view the task manager application.

Folder Structure
java
Copy code
task-manager-app/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── TaskForm.js
  │   │   ├── TaskList.js
  │   └── App.js
  ├── .gitignore
  ├── README.md
  ├── package.json
  └── package-lock.json
Approach: Sorting Tasks by Priority
The tasks are sorted based on two main factors:

Completion Status:

Incomplete tasks are always displayed first, followed by completed tasks.
Priority Sorting:

Within each completion status (completed or incomplete), tasks are sorted by their priority level. The order of priorities is:
High: Tasks with high priority appear at the top of the list.
Medium: Tasks with medium priority appear after the high-priority tasks.
Low: Tasks with low priority appear at the bottom of the list.
Sorting Logic:
The sorting logic is implemented using JavaScript’s sort() function. The tasks are sorted in two steps:

Completed tasks are moved to the bottom: This is done by checking the completed status of each task. Incomplete tasks are displayed first, and completed tasks are displayed later.

Sorting by priority within each group: After sorting by completion status, tasks are further sorted by priority, where the order is High > Medium > Low.


By combining both completion status and priority, the task list is always organized in a way that prioritizes pending tasks and, within those, the tasks that need the most attention.

Future Improvements
Implement task due dates and sort by the nearest due date.
Add user authentication to manage individual task lists.
Implement a drag-and-drop feature for manual task rearrangement.