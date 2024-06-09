import express from 'express';
import cron from 'node-cron';
import pingServer from './ping.js';

const app = express();

// Schedule the ping to run every 15 minutes
cron.schedule('*/10 * * * *', () => {
  console.log('Pinging server...');
  pingServer();
});

app.get('/', (req, res) => {
  res.send('Ping server is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
