const http = require('http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Import express (or use connect if you prefer)
const express = require('express');
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

let userList = []; // Array to store user data

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'users.html'));
});

// GET /api/users - Return the list of users
app.get('/api/users', (req, res) => {
    res.json(userList);
});

// POST /api/users - Add a new user to the list
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    userList.push(newUser);
    res.status(201).json(newUser);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
