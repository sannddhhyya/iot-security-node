IoT Security Node: Real-Time Telemetry Pipeline
Overview:
The IoT Security Node is a full-stack, edge-to-web telemetry pipeline. It transforms a standard smartphone into an active IoT edge device, transmitting real-time physical sensor data (accelerometer/gravity) over a local network to a custom Node.js backend. The data is visualized on a responsive web dashboard that utilizes edge-computing logic to detect physical movement and trigger an automated security alarm.

Core Features:
Real-Time Data Ingestion: Captures live Z-axis accelerometer data via HTTP POST requests from an edge node (smartphone).

Live Web Dashboard: Visualizes incoming data streams in real-time using Chart.js with a custom, responsive dark-mode UI.

Edge-Computing Logic: Analyzes incoming gravity vectors on the fly to accurately distinguish between a "resting" state and active movement.

Active Intruder Alarm: Utilizes the Web Audio API to automatically trigger a loud, synthetic square-wave alarm when unauthorized movement is detected.

Tech Stack:
Edge Device / Sensor: Smartphone running Sensor Logger

Backend Server: Node.js, Express.js (REST API Routing, CORS management)

Frontend Dashboard: HTML5, CSS3, Vanilla JavaScript

Data Visualization: Chart.js

System Architecture (How it Works):
The Edge Node (Smartphone) continually monitors local gravity using its built-in accelerometer.

It pushes this raw telemetry data via Wi-Fi to the Express.js API (POST /data).

The Node server catches and buffers the latest readings in short-term memory.

The Web Dashboard continuously polls the server (GET /api/latest), rendering the data into a live graph.

If the dashboard's logic detects a spike outside the standard gravity threshold (9.8m/s^2), it switches to "Armed" status and fires the audio alarm.
