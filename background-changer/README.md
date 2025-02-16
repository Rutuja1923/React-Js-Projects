 # Dynamic Background Changer

 A simple React project that allows users to change the background color dynamically by clicking on color buttons.

## Features

- Click on buttons to change the background color dynamically.
- Automatic text color adjustment for better visibility.
- Fixed button container at the bottom for easy access.
- Fixed header for a clean UI experience.
- Built with React and styled using Tailwind CSS.

## Clone & Setup

1. Clone the Repository
```sh
git clone https://github.com/Rutuja1923/React-Js-Projects.git
cd React-Js-Projects/Background-Changer
```

2. Install Dependencies
```sh
npm install
```

3. Start your build process
```sh
npm run dev
```

### Installation  
1. Install Node.js (if not installed)  

2. Create a React app:  
```sh
   npm create vite@latest my-app 
```

3. Navigate to the project:
```sh
    cd my-app
```

4. Install dependencies:
```sh
    npm install
```

### Installing Tailwind CSS as a Vite plugin

1. Install tailwindcss and @tailwindcss/vite via npm.
```sh
npm install tailwindcss @tailwindcss/vite
```

2. Add the @tailwindcss/vite plugin to your Vite configuration.
```sh
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. Add an @import to your CSS file that imports Tailwind CSS.
```sh
@import "tailwindcss";
``` 

## Running the Project
```sh
    npm run dev
```

The app runs at the URL shown in the terminal (e.g., http://localhost:5173/)
