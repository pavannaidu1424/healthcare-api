# Healthcare Services API

This is a simple API built with Node.js and Express for managing healthcare services, with MongoDB as the database.

## Features
- Add a new service (name, description, price)
- Get all services
- Update a service
- Delete a service

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Requirements
- Node.js installed
- MongoDB (local or cloud-based)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/healthcare-api.git
   cd healthcare-api

### Project Structure
First, let’s define the basic structure for your Node.js project:
```
healthcare-api/
│
├── server.js         # Main entry point
├── routes/
│   └── services.js   # API endpoints for services
├── models/
│   └── service.js    # Service schema for MongoDB
├── config/
│   └── db.js         # Database connection
└── package.json      # Node dependencies
```

### Step 1: Initialize the Project

1. **Create a directory** for the project and navigate into it:
   ```bash
   mkdir healthcare-api
   cd healthcare-api
   ```

2. **Initialize the project** with npm:
   ```bash
   npm init -y
   ```

3. **Install dependencies**:
   ```bash
   npm install express mongoose body-parser nodemon
   ```
   - `express`: For building the API.
   - `mongoose`: For interacting with MongoDB.
   - `body-parser`: To parse incoming JSON requests.
   - `nodemon`: Automatically restarts the server when you make changes (optional for development).

### Step 2: Set up MongoDB

If you don’t have MongoDB installed, either install it locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to set up a cloud-based MongoDB.

### Step 3: Create the Database Configuration (`configdb.js`)

In this file, we’ll define a function to connect to MongoDB.

```javascript
// configdb.js
```

### Step 4: Define the Service Model (`modelsservice.js`)

Create a Mongoose schema for the healthcare services.

```javascript
// modelsservice.js
```

### Step 5: Create the Routes for API Endpoints (`routesservices.js`)

Here, we will define the API endpoints for adding, retrieving, updating, and deleting services.

```javascript
// routesservices.js
```

### Step 6: Set Up the Server (`server.js`)

This file will act as the entry point to your application.

```javascript
// server.js
```

### Step 7: Run the Project

1. Start your MongoDB server (or make sure your MongoDB Atlas instance is running).
2. Run your Node.js app:
   ```bash
   nodemon server.js
   ```
3. Your API should now be running at `http://localhost:5000`.

### Step 8: Testing the API

You can test your API using Postman or another API testing tool:

1. **Add a service**:
   - URL: `POST http://localhost:5000/api/services`
   - Body (JSON1)

2. **Get all services**:
   - URL: `GET http://localhost:5000/api/services`

3. **Update a service**:
   - URL: `PUT http://localhost:5000/api/services/<id>`
   - Body (JSON2)

4. **Delete a service**:
   - URL: `DELETE http://localhost:5000/api/services/<id>`
