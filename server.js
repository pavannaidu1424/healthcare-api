const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const serviceRoutes = require('./routes/services');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/services', serviceRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
