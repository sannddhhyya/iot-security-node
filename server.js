const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Array to temporarily hold our live data
let sensorData = [];

// 1. The Route for my phone (Sensor Logger sends data here)
app.post('/data', (req, res) => {
    const data = req.body;
    
    // The app sends data in a 'payload' array.Extract the first reading.
    if (data.payload && data.payload.length > 0) {
        const reading = data.payload[0];
        console.log("Live Reading:", reading.values);
        
        // Keep only the latest 20 readings so we arent overloading the memory
        if (sensorData.length > 20) {
            sensorData.shift(); 
        }
        sensorData.push(reading);
    }
    res.status(200).send('Data received');
});

// 2. The Route for Web Dashboard
app.get('/api/latest', (req, res) => {
    res.json(sensorData);
});

// The port uses 8000 as its on the logger app (under http push )
const PORT = 8000; 
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running! Catching data on port ${PORT}...`);
});