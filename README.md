# React JSON Viewer

React JSON Viewer is a simple and user-friendly React-based application that allows you to visualize JSON data in a collapsible tree structure. This app supports both object literals and array literals, making it easy to navigate and understand complex JSON structures.
<img width="316" alt="image" src="https://user-images.githubusercontent.com/17172317/229389628-94f017c6-72d1-49a1-a529-708d78fa481f.png">

## Features

- Supports both object and array literals
- Collapsible tree structure for easy navigation
- Expand and collapse nodes using arrow buttons
- Automatically formats JSON data

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) version 12.x or higher
- [npm](https://www.npmjs.com/) version 6.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-json-viewer.git
```

2. Change the current directory to the project folder:

```bash
cd react-json-viewer
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

This will open the app in your default web browser at [http://localhost:3000](http://localhost:3000).

## Usage

To use the React JSON Viewer component in your own project, simply import it and pass the JSON data as a prop:

```jsx
import React from "react";
import JsonRenderer from "./JsonRenderer";

const jsonData = {
  "name": "John Doe",
  "age": 30,
  "hobbies": ["reading", "travelling", "programming"]
};

function App() {
  return (
   <div className="App">
     <JsonRenderer json={jsonData} level={1} />
   </div>
  );
}

export default App;
```

Replace `jsonData` with your own JSON data.
