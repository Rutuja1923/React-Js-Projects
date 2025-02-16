# Counter App

A simple counter application built with **React.js** that allows users to increase or decrease the counter value within a predefined limit.

## Features
- Increase or decrease the counter value.
- Prevents incrementing above **20** and decrementing below **0**.
- Displays an error message when the limit is reached.
- Logs counter updates with timestamps in the console.

## Installation and Setup

### Clone the Repository
```bash
git clone https://github.com/Rutuja1923/Counter-App.git
cd Counter-App
```

### Install Dependencies
```bash
npm install
```

### Run the Application
```bash
npm start
```

This will start the development server, and you can access the application in your browser at:
```
http://localhost:3000
```

## How It Works
- Click the **Increase +** button to increment the counter.
- Click the **Decrease -** button to decrement the counter.
- If the counter reaches **20**, an error message appears: `Can't increase above 20`.
- If the counter reaches **0**, an error message appears: `Can't reduce below 0`.
- Console logs display the counter value and timestamp whenever it is changed.

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML & CSS


