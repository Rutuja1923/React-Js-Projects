# CatCard Project

A simple React project that displays cat profiles with their images, names, and favorite meals.

## Features
- Displays cat images with names and details.
- Uses props for dynamic data rendering.
- Styled with Tailwind CSS.

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd React-Js-Projects/CatCard
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the project:**
   ```sh
   npm run dev
   ```

## Usage
Simply run the project and you will see two cat profiles displayed on the screen.

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

