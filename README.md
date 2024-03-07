# Book Store App

## Installation and Usage

1. Install Node.js environment.
2. Download this repository.
3. Navigate to the project directory: `cd bookstore-app`.
4. Install dependencies: `npm install`.
5. Start the application: `npm start`.
6. Open your browser and visit [http://localhost:3000](http://localhost:3000/).

## Mock Data

```
npx json-server --watch mock/data.json --port 3001
```

## Using Real Backend API

1. Modify `src\services\api.jsx`, change `const apiUrl = 'http://localhost:3001'` with the real backend API URL.
2. Restart the application.
