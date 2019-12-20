// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 3000;

var jsonFile = require('./packageInfo.json');
// create a route for the app
app.get('/info', (req, res) => {
    res.json({ 'serverName': jsonFile.name, 'serverVersion': jsonFile.version})
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/info`);
});